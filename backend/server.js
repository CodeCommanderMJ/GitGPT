import express from 'express'
import db from "./data/db.js";
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'


const app = express()
const PORT = process.env.PORT || 5000

app.post("/api/run-agent", async (req, res) => {
  res.json({ message: "Agent started" });
});

app.listen(5000, () => console.log(`Server running at ${PORT}`));
