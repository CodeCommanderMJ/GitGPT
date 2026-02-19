import { AgentProvider } from "./context/AgentContext";
import InputSection from "./components/InputSection";
import RunSummary from "./components/runsummary";
import ScorePanel from "./components/scorepannel";
import FixTable from "./components/fixtable";
import Timeline from "./components/timeline";
import "./App.css";

function App() {
  return (
    <AgentProvider>
      <div className="container">
        <h1>Autonomous DevOps Agent Dashboard</h1>
        <InputSection />
        <RunSummary />
        <ScorePanel />
        <FixTable />
        <Timeline />
      </div>
    </AgentProvider>
  );
}

export default App;
