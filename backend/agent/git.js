import { exec } from "child_process";
import util from "util";
const run = util.promisify(exec);

export async function cloneRepo(repoUrl, workspace) {
  await run(`git clone ${repoUrl} repo`, { cwd: workspace });
}

export async function createBranch(workspace, branch) {
  await run(`git checkout -b ${branch}`, {
    cwd: `${workspace}/repo`,
  });
}

export async function commitAll(workspace, msg) {
  await run(`git add .`, { cwd: `${workspace}/repo` });
  await run(`git commit -m "[AI-AGENT] ${msg}"`, {
    cwd: `${workspace}/repo`,
  });
}

export async function push(workspace, branch) {
  await run(`git push origin ${branch}`, {
    cwd: `${workspace}/repo`,
  });
}
