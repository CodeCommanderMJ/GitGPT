import { useContext } from "react";
import { AgentContext } from "../context/AgentContext";

const ScorePanel = () => {
  const { score } = useContext(AgentContext);

  if (!score) return null;

  return (
    <div className="card">
      <h2>Score Breakdown</h2>
      <p>Base Score: 100</p>
      <p>Speed Bonus: +{score.speedBonus}</p>
      <p>Efficiency Penalty: -{score.penalty}</p>
      <h3>Total Score: {score.total}</h3>
    </div>
  );
};

export default ScorePanel;
