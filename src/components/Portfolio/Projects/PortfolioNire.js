import React from "react";
import "../Portfolio.css";
import backgroundNire from "../../../assets/images/nire.png";
import { Link } from "react-router-dom";
import link from "../../../assets/images/link.png";
import github from "../../../assets/images/github.png";

export default function PortfolioNire() {
  const cardStyle = {
    "--i": `url(${backgroundNire})`,
  };

  return (
    <div class="card-portfolio" style={cardStyle}>
      <div class="content">
        <div className="title-box">
          <h2>Ñire - Boutique de Pan</h2>
          <h4>Bakery | Web Page</h4>
          <p>HTML 5 - CSS 3 - React Js - Bootstrap - Framer Motion</p>
        </div>
        <div className="button-box">
          <Link to="https://emanuelpps.github.io/Nire-Panaderia/"  target="_blank">
          <img className="button-img" src={link} alt="Portfolio" title="Demo"/>
          </Link>
          <Link to="https://github.com/emanuelpps/Nire-Panaderia"  target="_blank">
            <img className="button-img" src={github} alt="Portfolio" title="Code"/>
          </Link>
        </div>
      </div>
    </div>
  );
}
