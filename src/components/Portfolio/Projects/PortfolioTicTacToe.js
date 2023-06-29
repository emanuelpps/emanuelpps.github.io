import React from "react";
import "../Portfolio.css";
import ticTacToe from "../../../assets/images/tic-tac-toe.jpg";
import { Link } from "react-router-dom";
import link from "../../../assets/images/link.png";
import github from "../../../assets/images/github.png";

export default function PortfolioTicTacToe() {
  const cardStyle = {
    "--i": `url(${ticTacToe})`,
  };

  return (
    <div class="card-portfolio" style={cardStyle}>
      <div class="content">
        <div className="title-box">
          <h2>Tic Tac Toe</h2>
          <h4>Game | Web Page</h4>
          <p>HTML 5 - CSS 3 - JavaScript</p>
        </div>
        <div className="button-box">
          <Link to="https://emanuelpps.github.io/Tic-Tac-Toe/" target="_blank">
            <img className="button-img" src={link} alt="Portfolio" title="Demo"/>
          </Link>
          <Link to="https://github.com/emanuelpps/Tic-Tac-Toe" target="_blank">
            <img className="button-img" src={github} alt="Portfolio" title="Code"/>
          </Link>
        </div>
      </div>
    </div>
  );
}
