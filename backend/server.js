const express = require("express");
const app = express();
app.use(express.json());

app.post("/api/run-agent", async (req, res) => {
  res.json({ message: "Agent started" });
});

app.listen(5000, () => console.log("Server running"));
