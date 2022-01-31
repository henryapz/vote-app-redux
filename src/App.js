import "./App.css";
import React from "react";
import Candidates from "./components/Candidates";
import TotalVotes from "./components/TotalVotes";
import VotesPerCandidate from "./components/VotesPerCandidate";
import FilterComponent from "./components/FilterComponent";

function App() {
  return (
    <div>
      <h1 className="title">Election's Day</h1>
      <Candidates />
      <div style={{ display: "flex" }}>
        <FilterComponent />
        <div className="vote-counter">
          <TotalVotes />
          <VotesPerCandidate />
        </div>
      </div>
    </div>
  );
}

export default App;
