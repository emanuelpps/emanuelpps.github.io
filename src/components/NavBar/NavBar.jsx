import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Popover } from "react-tiny-popover";

export default function NavBar() {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const getMailCopy = () => {
    navigator.clipboard.writeText('emanuelpages.ps@gmail.com');
    setIsPopoverOpen(!isPopoverOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPopoverOpen(false);
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, [isPopoverOpen]);

  return (
    <div className="navBar-container sticky-top">
      <nav className="navbar navbar-expand-lg container">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link
            className="navbar-brand"
            to={"https://github.com/emanuelpps"}
            title="Github"
            target="_blank"
          >
            <FaGithub style={{ color: "white" }} />
          </Link>
          <Link
            className="navbar-brand"
            to={"https://www.linkedin.com/in/emanuel-ps"}
            title="Linkedin"
            target="_blank"
          >
            <FaLinkedinIn style={{ color: "white" }} />
          </Link>
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
            <Popover isOpen={isPopoverOpen} positions={["bottom"]} content={<div className="popover text-center">Mail Copiado!</div>}>
              <button
                id="Mail"
                onClick={() => getMailCopy()}
                className="text-white bg-transparent"
                type="button"
              >
                emanuelpages.ps@gmail.com
              </button>
            </Popover>
          </div>
        </div>
      </nav>
    </div>
  );
}
