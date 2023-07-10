import React from "react";
import "../Portfolio.css";
import backgroundLaboratorioBeitia from "../../../assets/images/laboratioribeitia.jpg";
import { Link } from "react-router-dom";
import link from "../../../assets/images/link.png";

export default function PortfolioBeitia() {
  const cardStyle = {
    "--i": `url(${backgroundLaboratorioBeitia})`,
  };
  return (
    <div class="card-portfolio" style={cardStyle}>
      <div class="content">
        <div className="title-box">
          <h2>Laboratorio Beitía</h2>
          <h4>Clinical Laboratory | Web Page</h4>
          <p>Wordpress - Elementor</p>
        </div>
        <div className="button-box">
          <Link
            to="https://laboratoriobeitia.com.ar/"
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
