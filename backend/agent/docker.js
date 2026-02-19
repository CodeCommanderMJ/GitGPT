import { exec as childExec } from "child_process";
import util from "util";

const run = util.promisify(childExec);

export async function startContainer(runId, workspace) {
  await run(`
    docker run -d --rm \
      --name agent_${runId} \
      -v ${workspace}/repo:/workspace \
      agent-runner sleep infinity
  `);
}

export function execInContainer(runId, cmd) {
  return new Promise((resolve) => {
    childExec(
      `docker exec agent_${runId} ${cmd}`,
      (error, stdout, stderr) => {
        resolve({
          exitCode: error?.code ?? 0,
          stdout,
          stderr,
        });
      }
    );
  });
}

export async function stopContainer(runId) {
  await run(`docker stop agent_${runId}`);
}
