// db.js
import Database from "better-sqlite3";
import fs from "fs";

fs.mkdirSync("data", { recursive: true });

const db = new Database("data/runs.db");

db.exec(`
  CREATE TABLE IF NOT EXISTS runs (
    run_id TEXT PRIMARY KEY,
    repo_url TEXT,
    branch_name TEXT,
    status TEXT,
    total_failures INTEGER,
    total_fixes INTEGER,
    score INTEGER,
    started_at TEXT,
    finished_at TEXT
  );
`);

export default db;
