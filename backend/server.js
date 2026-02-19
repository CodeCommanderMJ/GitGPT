import express from "express";
import cors from "cors";
import { randomUUID } from "crypto";
import db from "./db.js";
import { startRun } from "./agent/orchestrator.js";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000

app.post("/api/run-agent", async (req, res) => {
  const { repoUrl, teamName, leaderName } = req.body;
  const runId = randomUUID();

  db.prepare(`
    INSERT INTO runs (run_id, repo_url, status, started_at)
    VALUES (?, ?, 'RUNNING', ?)
  `).run(runId, repoUrl, new Date().toISOString());

  // async fire-and-forget
  startRun({ runId, repoUrl, teamName, leaderName });

  res.json({ run_id: runId });
});

app.listen(5000, () => console.log(`Backend Server running at ${PORT}`));
