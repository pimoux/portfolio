import React, { useState } from "react";
import { useParams } from "react-router-dom";
import projectList from "../utils/projectList";
import { NavLink } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project] = useState(projectList[id - 1]);

  return (
    <div className="project-details">
      <NavLink exact to="/portfolio" className="quit-details">
        Retour
      </NavLink>
      <h1 className="mainTitle">Projet "{project.title}"</h1>
      <img src={project.image} alt="" className="project-details-image resize"/>
      <a href={project.codeUrl} className="project-details-link" target="_blank" rel="noreferrer">Code</a>
      <a href={project.demoUrl} className="project-details-link" target="_blank" rel="noreferrer">Résultat</a>
    </div>
  );
};

export default ProjectDetails;
