import React from 'react';
import "./ProjectsContainer.css";
import ProjectList from './ProjectList';

export default function ProjectsContainer() {
  return (
    <div id='ProjectId' className='project-container'>
        <h3 className='project-title'>Projects</h3>
        <ProjectList/>
    </div>
  )
}
