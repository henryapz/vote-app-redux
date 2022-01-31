import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addVotes, fetchCandidates } from "../store/actions";
import "./Candidates.css";

export default function Candidates() {
  const dispatch = useDispatch();
  const candidates = useSelector((state) => state.candidates);
  const handleAddVote = (id) => {
    //console.log("recibi", id);
    dispatch(addVotes(id));
  };

  useEffect(() => {
    dispatch(fetchCandidates());
  }, [dispatch]);
  return (
    <div className="container">
      {candidates.map((candidate) => (
        <div key={candidate.id} className="container_candidate">
          <h2>{candidate.name}</h2>
          <img src={require("../" + candidate.image)} alt="" />
          <button
            className="container_candidate_button"
            type="button"
            onClick={() => handleAddVote(candidate.id)}
          >
            Votar
          </button>
        </div>
      ))}
    </div>
  );
}
