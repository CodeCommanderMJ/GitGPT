import { createContext, useState } from "react";

export const AgentContext = createContext();

export const AgentProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [summary, setSummary] = useState(null);
  const [fixes, setFixes] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [score, setScore] = useState(null);

  return (
    <AgentContext.Provider
      value={{
        loading,
        setLoading,
        summary,
        setSummary,
        fixes,
        setFixes,
        timeline,
        setTimeline,
        score,
        setScore,
      }}
    >
      {children}
    </AgentContext.Provider>
  );
};
