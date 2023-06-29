import React from "react";
import "../Portfolio.css";
import backgroundEmbe from "../../../assets/images/Embe-ecommerce.png";
import { Link } from "react-router-dom";
import link from "../../../assets/images/link.png";
import github from "../../../assets/images/github.png";

export default function PortfolioEmbe() {
  const cardStyle = {
    "--i": `url(${backgroundEmbe})`,
  };

  return (
    <div class="card-portfolio" style={cardStyle}>
      <div class="content">
        <div className="title-box">
          <h2>Embé Home & Deco</h2>
          <h4>Ecommerce | Web Page</h4>
          <p>HTML 5 - CSS 3 - React Js - Bootstrap - Firebase</p>
        </div>
        <div className="button-box">
          <Link to="https://emanuelpps.github.io/embe-ecommerce/" target="_blank">
            <img className="button-img" src={link} alt="Portfolio" title="Demo"/>
          </Link>
          <Link to="https://github.com/emanuelpps/embe-ecommerce" target="_blank">
            <img className="button-img" src={github} alt="Portfolio" title="Code"/>
          </Link>
        </div>
      </div>
    </div>
  );
}
