import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeCandidateDisplay, setViewData } from "../store/actions";
import "./FilterComponent.css"

export default function FilterComponent() {
  const dispatch = useDispatch();
  const view = useSelector((state) => state.viewValue);
  const candidates = useSelector((state) => state.candidates);

  let allSelected = true;
  candidates.forEach((element) => {
    if (!element.display) {
      allSelected = false;
    }
  });

  const handleChangeSelectCandidate = (id, allSelected) => {
    dispatch(changeCandidateDisplay(id, allSelected))
  };

  const handleChangeRadio = (event) => {
    const { value } = event.target;
    dispatch(setViewData(value));
  };
  return (
    <div className="f-cnt">
      <div className="f-cnt-view">
        <input
          type="radio"
          id="porcentage"
          name="viewValue"
          checked={view === "porcentage"}
          value={"porcentage"}
          onChange={handleChangeRadio}
        />
        <label htmlFor="porcentage">Porcentaje %</label>
        <br />
        <input
          type="radio"
          id="numberValue"
          name="viewValue"
          checked={view === "numberValue"}
          value={"numberValue"}
          onChange={handleChangeRadio}
        />
        <label htmlFor="numberValue">Total</label>
      </div>
      <hr />
      <div className="f-cnt-view">
        <input
          type="checkbox"
          id="Todos"
          name="Todos"
          value="Todos"
          checked={allSelected}
          onChange={() => handleChangeSelectCandidate("todos", allSelected)}
        />
        <label htmlFor="Todos">Todos</label>
        {candidates.map((candidate) => (
          <div key={candidate.id}>
            <input
              type="checkbox"
              id={candidate.id}
              name={candidate.name}
              value={candidate.id}
              checked={candidate.display}
              onChange={() => handleChangeSelectCandidate(candidate.id, allSelected)}
            />
            <label htmlFor={candidate.id}> {candidate.name} </label>
          </div>
        ))}
      </div>
    </div>
  );
}
