import React from "react";
import "../Portfolio.css";
import backgroundWeather from "../../../assets/images/weatherEP.jpg";
import { Link } from "react-router-dom";
import link from "../../../assets/images/link.png";
import github from "../../../assets/images/github.png";

export default function PortfolioEpWeather() {
  const cardStyle = {
    "--i": `url(${backgroundWeather})`,
  };

  return (
    <div class="card-portfolio" style={cardStyle}>
      <div class="content">
        <div className="title-box">
          <h2>EP Weather</h2>
          <h4>Weather Information | Web App</h4>
          <p>HTML 5 - CSS 3 - React Js - Bootstrap - Fetch API</p>
        </div>
        <div className="button-box">
          <Link to="https://emanuelpps.github.io/EP-WeatherAPP/" target="_blank">
            <img className="button-img" src={link} alt="Portfolio" title="Demo"/>
          </Link>
          <Link to="https://github.com/emanuelpps/EP-WeatherAPP" target="_blank">
            <img className="button-img" src={github} alt="Portfolio" title="Code"/>
          </Link>
        </div>
      </div>
    </div>
  );
}
