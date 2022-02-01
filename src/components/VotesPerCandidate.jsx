import React from "react";
import { useSelector } from "react-redux";
import "./VotesPerCandidate.css";

export default function VotesPerCandidate() {
  const candidates = useSelector((state) => state.candidates);
  const viewValue = useSelector((state) => state.viewValue);
  const totalVotes = useSelector((state) => state.totalVotes);

  const selectedCandidates = candidates.filter((elem) => elem.display);

  const getPorcentage = (votes) => {
    if (totalVotes > 0) {
      return Math.round((votes * 100 * 100) / totalVotes) / 100;
    }
    return 0;
  };
  
  return (
    <div>
      <ul className="c_list">
        {selectedCandidates.map((candidate) => (
          <li key={candidate.id} className="c_list_item">
            {candidate.name}:
            <span className="c_list_item_value">
              {" "}
              {viewValue === "porcentage"
                ? getPorcentage(candidate.votes) + "%"
                : candidate.votes + " votos"}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
