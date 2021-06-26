import React, { useState, useEffect } from "react";
import ProjectItem from "../components/ProjectItem/ProjectItem";
import projectList from "../utils/projectList";

const Portfolio = () => {
  const [projects, setProjects] = useState({ data: [] });
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [search, setSearch] = useState("");
  
  const handleChange = (e) => {
    setSearch(e.target.value.toLowerCase());
  };

  useEffect(() => {
    setProjects({ data: projectList });
  }, []);

  useEffect(() => {
    setFilteredProjects(
      projects.data.filter((project) =>
        project.title.toLowerCase().includes(search)
      )
    );
  }, [search, projects]);

  return (
    <div>
      <h1 className="mainTitle">PORTFOLIO</h1>
      <p className="project-disclaimer">Je tiens a préciser que les projets que je vous montre ont tous été réalisé durant mon temps libre, en parallele de mes études. </p>
      <div className="search-project">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Chercher un projet"
        />
      </div>
      <div className="project-list">
        {filteredProjects.map((project, index) => {
            return (
              <ProjectItem
                id={project.id}
                image={project.image}
                title={project.title}
                description={project.description}
                key={index}
              />
            );
          })}
      </div>
    </div>
  );
};

export default Portfolio;
