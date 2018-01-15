import AirportCard from "../AirportCard";
import ContributeCard from "../ContributeCard";
import React, { Component } from "react";

const AirportList = ({ airports, thumbnails }) => {
  const thumbnailsMap = thumbnails.reduce((acc, edge) => {
    const filename = edge.node.id.split(" ")[0];
    acc[filename.slice(-7, -4)] = edge.node.sizes.base64;
    return acc;
  }, {});
  return (
    <ul>
      {airports.map(airport => (
        <AirportCard
          key={airport.node.id}
          href={airport.node.fields.canonical}
          label={airport.node.id}
          thumbnail={thumbnailsMap[airport.node.id]}
        />
      ))}
      <ContributeCard />
    </ul>
  );
};

export default AirportList;
