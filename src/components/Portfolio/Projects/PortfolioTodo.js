import React from "react";
import "../Portfolio.css";
import backgroundAirport from "../../../assets/images/todolist.jpg";
import { Link } from "react-router-dom";
import link from "../../../assets/images/link.png";
import github from "../../../assets/images/github.png";

export default function PortfolioTodo() {
  const cardStyle = {
    "--i": `url(${backgroundAirport})`,
  };

  return (
    <div class="card-portfolio" style={cardStyle}>
      <div class="content">
        <div className="title-box">
          <h2>Todo List App</h2>
          <h4>Task List | Web App</h4>
          <p>HTML 5 - CSS 3 - React Js - Bootstrap</p>
        </div>
        <div className="button-box">
          <Link to="https://emanuelpps.github.io/todoListEP/" target="_blank">
            <img className="button-img" src={link} alt="Portfolio" title="Demo"/>
          </Link>
          <Link to="https://github.com/emanuelpps/todoListEP" target="_blank">
            <img className="button-img" src={github} alt="Portfolio" title="Code"/>
          </Link>
        </div>
      </div>
    </div>
  );
}
