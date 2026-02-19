import { useState, useContext } from "react";
import { AgentContext } from "../context/AgentContext";

const InputSection = () => {
  const [repoUrl, setRepoUrl] = useState("");
  const [teamName, setTeamName] = useState("");
  const [leaderName, setLeaderName] = useState("");
  const { setLoading, setSummary } = useContext(AgentContext);

  const handleRun = async () => {
    setLoading(true);

    const res = await fetch("http://localhost:5000/api/run-agent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ repoUrl, teamName, leaderName }),
    });

    const data = await res.json();

    setSummary(data.summary);
    setLoading(false);
  };

  return (
    <div className="card">
      <h2>Run Agent</h2>
      <input
        type="text"
        placeholder="GitHub Repository URL"
        value={repoUrl}
        onChange={(e) => setRepoUrl(e.target.value)}
      />
      <input
        type="text"
        placeholder="Team Name"
        value={teamName}
        onChange={(e) => setTeamName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Team Leader Name"
        value={leaderName}
        onChange={(e) => setLeaderName(e.target.value)}
      />
      <button onClick={handleRun}>Run Agent</button>
    </div>
  );
};

export default InputSection;
