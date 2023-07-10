import React from "react";
import "../Portfolio.css";
import backgroundLaboratorioBeitia from "../../../assets/images/tglobras.jpg";
import { Link } from "react-router-dom";
import link from "../../../assets/images/link.png";

export default function PortfolioTgl() {
  const cardStyle = {
    "--i": `url(${backgroundLaboratorioBeitia})`,
  };
  return (
    <div class="card-portfolio" style={cardStyle}>
      <div class="content">
        <div className="title-box">
          <h2>TGL Obras</h2>
          <h4>Building Contractor | Web Page</h4>
          <p>Wordpress - Elementor</p>
        </div>
        <div className="button-box">
          <Link
            to="https://tglobras.com.ar/"
            target="_blank"
          >
            <img
              className="button-img"
              src={link}
              alt="Portfolio"
              title="Demo"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
