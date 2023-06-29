import React from "react";
import "../Portfolio.css";
import { Link } from "react-router-dom";
import donremoloimg from "../../../assets/images/don-remolo-pizza.png";
import link from "../../../assets/images/link.png";
import github from "../../../assets/images/github.png";

export default function PortfolioRemolo() {
  const cardStyle = {
    "--i": `url(${donremoloimg})`,
  };

  return (
    <div class="card-portfolio" style={cardStyle}>
      <div class="content">
        <div className="title-box">
          <h2>Don Remolo Pizza</h2>
          <h4>Food Delivery | Web App</h4>
          <p>HTML 5 - CSS 3 - React Js - Bootstrap - Framer Motion - Firebase</p>
        </div>
        <div className="button-box">
          <Link to="https://emanuelpps.github.io/don-remolo-pizza/"  target="_blank">
          <img className="button-img" src={link} alt="Portfolio" title="Demo"/>
          </Link>
          <Link to="https://github.com/emanuelpps/don-remolo-pizza"  target="_blank">
            <img className="button-img" src={github} alt="Portfolio" title="Code"/>
          </Link>
        </div>
      </div>
    </div>
  );
}
