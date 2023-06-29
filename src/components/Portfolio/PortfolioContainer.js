import React from "react";
import "./Portfolio.css";
import PortfolioEmbe from "./Projects/PortfolioEmbe";
import PortfolioFalcon from "./Projects/PortfolioFalcon";
import PortfolioRemolo from "./Projects/PortfolioRemolo";
import PortfolioAirports from "./Projects/PortfolioAirport";
import PortfolioTicTacToe from "./Projects/PortfolioTicTacToe";
import PortfolioEpWeather from "./Projects/PortfolioEpWeather";

export default function PortfolioContainer() {
  return (
    <div className="portfolio-container">
      <h1 id="Portfolio" className="portfolio-title">Projects</h1>
      <div className="portfolio-cards">
        <PortfolioRemolo />
        <PortfolioEpWeather />
        <PortfolioEmbe />
        <PortfolioTicTacToe/>
        <PortfolioFalcon/>
        <PortfolioAirports/>
      </div>
    </div>
  );
}
