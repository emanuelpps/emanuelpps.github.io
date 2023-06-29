import React from "react";
import "../Portfolio.css";
import backgroundFalcon from "../../../assets/images/falcon_aviation_shop.png";
import { Link } from "react-router-dom";
import link from "../../../assets/images/link.png";
import github from "../../../assets/images/github.png";

export default function PortfolioFalcon() {
  const cardStyle = {
    "--i": `url(${backgroundFalcon})`,
  };

  return (
    <div class="card-portfolio" style={cardStyle}>
      <div class="content">
        <div className="title-box">
          <h2>Falcon Aviation Shop</h2>
          <h4>Ecommerce | Web Page</h4>
          <p>HTML 5 - CSS 3 - Javascript - Bootstrap</p>
        </div>
        <div className="button-box">
          <Link to="https://emanuelpps.github.io/Falcon-Aviation-Shop/" target="_blank">
            <img className="button-img" src={link} alt="Portfolio" title="Demo"/>
          </Link>
          <Link to="https://github.com/emanuelpps/Falcon-Aviation-Shop" target="_blank">
            <img className="button-img" src={github} alt="Portfolio" title="Code"/>
          </Link>
        </div>
      </div>
    </div>
  );
}
