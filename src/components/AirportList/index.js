import AirportCard from "../AirportCard";
import ContributeCard from "../ContributeCard";
import React, { Component } from "react";

const AirportList = ({ airports }) => {
  return (
    <ul>
      {airports.map(airport => (
        <AirportCard
          key={airport.node.id}
          href={airport.node.fields.canonical}
          label={airport.node.id}
        />
      ))}
      <ContributeCard />
    </ul>
  );
};

export default AirportList;
