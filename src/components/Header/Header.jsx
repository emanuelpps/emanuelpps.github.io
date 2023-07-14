import React from "react";
import "./Header.css";
import BottomBar from "./BottomBar";
import { HashLink } from "react-router-hash-link";

export default function Header() {
  return (
    <div className="header">
      <div className="portada">
        <div className="title-box">
          <div className="title text-focus-in">
            <h1 className="text-truncate">Emanuel Pagés</h1>
            <h2 className="text-truncate">Front-End Developer</h2>
          </div>
          <div className="button-box">
            <button type="button" class="btn btn-outline-light">
              <HashLink className="button-link" to="#contactId">Contact</HashLink>
            </button>
            <button type="button" class="btn btn-outline-light">
              <HashLink className="button-link"  to="#AboutMe">More About Me</HashLink>
            </button>
          </div>
        </div>
      </div>
      <BottomBar />
    </div>
  );
}
