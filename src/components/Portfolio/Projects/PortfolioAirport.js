import React from "react";
import "../Portfolio.css";
import backgroundAirport from "../../../assets/images/airport_routes_app.png";
import { Link } from "react-router-dom";
import link from "../../../assets/images/link.png";
import github from "../../../assets/images/github.png";

export default function PortfolioAirports() {
  const cardStyle = {
    "--i": `url(${backgroundAirport})`,
  };

  return (
    <div class="card-portfolio" style={cardStyle}>
      <div class="content">
        <div className="title-box">
          <h2>Airport Routes App</h2>
          <h4>Airways Information | Web Page</h4>
          <p>HTML 5 - CSS 3 - React Js - Bootstrap - Fetch API</p>
        </div>
        <div className="button-box">
          <Link to="https://emanuelpps.github.io/AirportRoutesAPP/" target="_blank">
            <img className="button-img" src={link} alt="Portfolio" title="Demo"/>
          </Link>
          <Link to="https://github.com/emanuelpps/AirportRoutesAPP" target="_blank">
            <img className="button-img" src={github} alt="Portfolio" title="Code"/>
          </Link>
        </div>
      </div>
    </div>
  );
}
