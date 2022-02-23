import React, { useState, useEffect } from "react";
import Sorting from "../components/Sorting";
import projectList from "../utils/projectList";
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faSwift } from "@fortawesome/free-brands-svg-icons";
import WebProject from "../components/projects/WebProject";
import AppProject from "../components/projects/AppProject";

const Portfolio = () => {
    const [projects] = useState({ data: projectList });
    const [filteredProjects, setFilteredProjects] = useState({
        data: [],
        errorMessage: null,
    });
    const [sorts, setSorts] = useState([
        {
            title: "développement web",
            icon: faCode,
            selected: true
        },
        {
            title: "développement iOS",
            icon: faSwift,
            selected: false
        },
    ])
    const [search, setSearch] = useState("");

    const handleChange = (e) => {
        setSearch(e.target.value.toLowerCase());
    };

    useEffect(() => {
        setFilteredProjects({
            data: projects.data.filter((project) =>
                project.title.toLowerCase().includes(search) &&
                sorts.find(sort => sort.selected).title === project.type
            ),
            errorMessage: filteredProjects.errorMessage
        });
    }, [search, projects, filteredProjects.errorMessage, sorts]);

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
        <div className="portfolio" id="portfolio">
            <h1 className="mainTitle">PORTFOLIO</h1>
            <div className="w-full flex flex-col justify-center items-center">
                <input
                    id="search"
                    type="text"
                    className="text-turquoise rounded-xl pl-2 text-lg mt-4 outline-none focus:ring-turquoise focus:ring-2"
                    onChange={handleChange}
                    placeholder="Chercher un projet"
                />
                <Sorting sorts={sorts} setSorts={setSorts}/>
            </div>
            <div className="flex flex-wrap justify-center m-4">
                {filteredProjects.data.map((project, index) => {
                    return project.type === "développement web" ? (
                        <WebProject
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            href={project.href}
                            key={index}
                        />
                    ) : (
                        <AppProject
                            image={project.image}
                            title={project.title}
                            description={project.description}
                            href={project.href}
                            key={index}
                        />
                    )
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
