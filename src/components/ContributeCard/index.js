import AirportCard from "../AirportCard";
import React, { Component } from "react";
import "./index.styl";

class ContributeCard extends Component {
  render() {
    return (
      <AirportCard
        className="card-contribute"
        href="/contribute"
        label="contribute an airport"
      />
    );
  }
}

export default ContributeCard;
