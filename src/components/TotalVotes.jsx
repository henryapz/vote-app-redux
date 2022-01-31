import React from "react";
import { useSelector } from "react-redux";

export default function TotalVotes() {
  const totalVotes = useSelector((state) => state.totalVotes);

  return (
    <div className="title" style={{ fontWeight: "600", fontSize: "1.5rem" }}>
      Votos Totales: {totalVotes}
    </div>
  );
}
