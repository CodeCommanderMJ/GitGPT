import fs from "fs";
import path from "path";
import db from "../db.js";
import * as git from "./git.js";
import * as docker from "./docker.js";

const WORKSPACE_ROOT = path.resolve("workspaces");

export async function startRun({ runId, repoUrl, teamName, leaderName }) {
  const workspace = path.join(WORKSPACE_ROOT, runId);
  fs.mkdirSync(workspace, { recursive: true });

  const branchName =
    `${teamName}_${leaderName}_AI_Fix`
      .toUpperCase()
      .replace(/\s+/g, "_");

  try {
    await git.cloneRepo(repoUrl, workspace);
    await git.createBranch(workspace, branchName);

    await docker.startContainer(runId, workspace);

    // run tests
    const testResult = await docker.execInContainer(runId, "pytest");

    if (testResult.exitCode !== 0) {
    console.log("Tests failed. Parsing failures...");
    console.log(testResult.stdout);

    const data = {
      name: runId,
      result: testResult,
      timestamp: new Date().toISOString()
    };

    fs.writeFileSync(
      path.join(workspace, "results.json"),
      JSON.stringify(data, null, 2)
    );


    // TEMPORARY: mark as failed (until AI loop is added)
    await docker.stopContainer(runId);

    db.prepare(`
        UPDATE runs SET status='FAILED', finished_at=?
        WHERE run_id=?
    `).run(new Date().toISOString(), runId);

    return;
    }

    console.log("All tests passed.");


    // TODO:
    // parse failures
    // call AI agent
    // apply fixes
    // commit + push

    await docker.stopContainer(runId);

    db.prepare(`
      UPDATE runs SET status='PASSED', finished_at=?
      WHERE run_id=?
    `).run(new Date().toISOString(), runId);

  } catch (err) {
    console.error(err);
    db.prepare(`
      UPDATE runs SET status='FAILED', finished_at=?
      WHERE run_id=?
    `).run(new Date().toISOString(), runId);
  }
}
