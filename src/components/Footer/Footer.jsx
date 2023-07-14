import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export default function Footer() {
  return (
    <footer>
      <div className="nav-footer">
        <nav className="navbar navbar-expand-lg container">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <HashLink
                    className="nav-link text-white"
                    aria-current="page"
                    to="#AboutMe"
                  >
                    About Me
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink className="nav-link text-white" to="#AboutMe">
                    Skills
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink className="nav-link text-white" to="#ProjectId">
                    Projects
                  </HashLink>
                </li>
                <li className="nav-item">
                  <HashLink className="nav-link text-white" to="#contactId">
                    Contact
                  </HashLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="name">
        <Link className="name-link" to={"https://github.com/emanuelpps"} target="_blank">
          {" "}
          © 2023 Emanuel Pagés
        </Link>
      </div>
    </footer>
  );
}
