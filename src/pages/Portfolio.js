import React, { useState, useEffect } from "react";
import ProjectItem from "../components/ProjectItem";
import projectList from "../utils/projectList";

const Portfolio = () => {
    const [projects] = useState({ data: projectList });
    const [filteredProjects, setFilteredProjects] = useState({
        data: [],
        errorMessage: null,
    });
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value.toLowerCase());
    };

    useEffect(() => {
        setFilteredProjects({
            data: projects.data.filter((project) =>
                project.title.toLowerCase().includes(search)
            ),
            errorMessage: filteredProjects.errorMessage
        });
    }, [search, projects, filteredProjects.errorMessage]);

    useEffect(() => {
        const error = filteredProjects.data.length < 1
        ? "Aucun projet trouvé :("
        : null;
        setFilteredProjects({
            data: filteredProjects.data,
            errorMessage: error,
        })
    }, [filteredProjects.data])

    return (
        <div>
            <h1 className="mainTitle">PORTFOLIO</h1>
            <div className="w-full flex justify-center">
                <input
                    id="search"
                    type="text"
                    className="text-turquoise rounded-xl pl-2 text-lg mt-4 outline-none focus:ring-turquoise focus:ring-2"
                    onChange={handleChange}
                    placeholder="Chercher un projet"
                />
            </div>
            <div className="flex flex-wrap justify-center m-4">
                {filteredProjects.data.map((project, index) => {
                    return (
                        <ProjectItem
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            href={project.href}
                            key={index}
                        />
                    );
                })}
                {filteredProjects.errorMessage && (
                    <p className="text-red-600 text-3xl">
                        {filteredProjects.errorMessage}
                    </p>
                )}
            </div>
        </div>
    );
};

export default Portfolio;
