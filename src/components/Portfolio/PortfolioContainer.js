import React from "react";
import "./Portfolio.css";
import PortfolioEmbe from "./Projects/PortfolioEmbe";
import PortfolioFalcon from "./Projects/PortfolioFalcon";
import PortfolioRemolo from "./Projects/PortfolioRemolo";
import PortfolioAirports from "./Projects/PortfolioAirport";
import PortfolioNire from "./Projects/PortfolioNire";

export default function PortfolioContainer() {
  return (
    <div className="portfolio-container">
      <h1 id="Portfolio" className="portfolio-title">Portfolio</h1>
      <div className="portfolio">
        <PortfolioEmbe />
        <PortfolioFalcon />
        <PortfolioRemolo />
        <PortfolioAirports />
        <PortfolioNire />
      </div>
    </div>
  );
}
