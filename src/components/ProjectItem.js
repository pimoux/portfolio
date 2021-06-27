import React from "react";
import { NavLink } from "react-router-dom";

const ProjectItem = ({ id, image, title, description }) => {
  return (
    <div className="project-card">
      <NavLink to={`portfolio/project/${id}`}>
        <img src={image} alt="" className='project-card-img'/>
      </NavLink>
      <div className="project-card-body">
        <p className="project-card-title">{title}</p>
        <p className="project-card-description">{description}</p>
      </div>
    </div>
  );
};

export default ProjectItem;
