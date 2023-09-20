import React from "react";
import ProjectsCards from "../../assets/data/Projects.json";
import ProjectCard from "./ProjectCard";
import "./ProjectsContainer.css";

export default function ProjectList() {
  return (
    <div className="project-list">
      {ProjectsCards.map((project, index) => (
        <ProjectCard className="projects-card" key={index} project={project} />
      ))}
    </div>
  );
}
