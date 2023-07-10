import React from "react";
import "./Portfolio.css";
import PortfolioEmbe from "./Projects/PortfolioEmbe";
import PortfolioFalcon from "./Projects/PortfolioFalcon";
import PortfolioRemolo from "./Projects/PortfolioRemolo";
import PortfolioAirports from "./Projects/PortfolioAirport";
import PortfolioTicTacToe from "./Projects/PortfolioTicTacToe";
import PortfolioEpWeather from "./Projects/PortfolioEpWeather";
import PortfolioBeitia from "./Projects/PortfolioBeitia";
import PortfolioTgl from "./Projects/PortfolioTgl";
import PortfolioTodo from "./Projects/PortfolioTodo";

export default function PortfolioContainer() {
  return (
    <div className="portfolio-container">
      <h1 id="Portfolio" className="portfolio-title">Projects</h1>
      <div className="portfolio-cards">
        <PortfolioRemolo />
        <PortfolioEpWeather />
        <PortfolioEmbe />
        <PortfolioTodo/>
        <PortfolioFalcon/>
        <PortfolioAirports/>
        <PortfolioTicTacToe/>
        <PortfolioBeitia/>
        <PortfolioTgl/>
      </div>
    </div>
  );
}
