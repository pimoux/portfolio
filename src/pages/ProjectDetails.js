import React, { useState } from "react";
import { useParams } from "react-router-dom";
import projectList from "../utils/projectList";
import { NavLink } from "react-router-dom";

const ProjectDetails = () => {
  const { id } = useParams();
  const [project] = useState(projectList[id - 1]);

  return (
    <div className="project-details">
      <div className="project-details-header">
        <NavLink exact to="/portfolio">
          Retour
        </NavLink>
        <h1 className="mainTitle ">Projet "{project.title}"</h1>
      </div>
    </div>
  );
};

export default ProjectDetails;
