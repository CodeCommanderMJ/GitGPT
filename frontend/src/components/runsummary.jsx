import { useContext } from "react";
import { AgentContext } from "../context/AgentContext";

const RunSummary = () => {
  const { summary } = useContext(AgentContext);

  if (!summary) return null;

  return (
    <div className="card">
      <h2>Run Summary</h2>
      <p>Repository: {summary.repo}</p>
      <p>Branch: {summary.branch}</p>
      <p>Failures: {summary.failures}</p>
      <p>Fixes Applied: {summary.fixes}</p>
      <p>
        Status:
        <span className={summary.status === "PASSED" ? "green" : "red"}>
          {summary.status}
        </span>
      </p>
    </div>
  );
};

export default RunSummary;
