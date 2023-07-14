import React, { useState } from "react";
import "./ProjectsContainer.css";
import { VscGithub, VscLinkExternal } from "react-icons/vsc";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  const [isShown, setIsShown] = useState(false);

  return (
    <div
      className="projects-card text-center"
      style={{ backgroundImage: `url(${project.img})` }}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      {isShown && (
        <div className="content">
          <h2>{project.name}</h2>
          <h4>
            {project.class} | {project.type}
          </h4>
          <p className="text-card">{project.lenguage}</p>
          <div className="buttons-card">
            <button
              type="button"
              class="btn btn-outline-light btn-sm mx-3"
              title="Code"
            >
              <Link className="button-link" to={`${project.code}`} target="_blank">
                <VscGithub />
              </Link>
            </button>
            <button
              type="button"
              class="btn btn-outline-light btn-sm mx-3"
              title="Demo"
            >
              <Link className="button-link" to={`${project.demo}`} target="_blank">
                <VscLinkExternal />
              </Link>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
