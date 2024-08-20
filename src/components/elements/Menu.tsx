import React, { useState } from "react";
import { Link } from "react-router-dom";

const Menu: React.FC<{ isHomePage: boolean, selectedId?: string | null, className?: string }> = ({ isHomePage, selectedId = null, className = "" }) => {
    
    const [homeMenuOptionHovered, setHomeMenuOptionHovered] = useState(false);
    const [projectsMenuOptionHovered, setProjectsMenuOptionHovered] = useState(false);
    const [hireMeMenuOptionHovered, setHireMeMenuOptionHovered] = useState(false);

    let HomeMenuOption;
    if (selectedId === "homeMenuOption") {
        HomeMenuOption = <a id="homeMenuOption" className="font-bold text-teal-deer">// Home</a>
    } else {
        HomeMenuOption = (
            <Link
                id="homeMenuOption"
                to="/"
                className={homeMenuOptionHovered ? "" : "opacity-60"}
                onMouseEnter={() => setHomeMenuOptionHovered(true)}
                onMouseLeave={() => setHomeMenuOptionHovered(false)}
            >
                {homeMenuOptionHovered ? "/ " : ""}Home
            </Link>
        )
    }

    let ProjectsMenuOption;
    if (selectedId === "projectsMenuOption") {
        ProjectsMenuOption = <a id="projectsMenuOption" className="mt-3 font-bold text-teal-deer">// Projects</a>
    } else if (isHomePage) {
        ProjectsMenuOption = (
            <a
                id="projectsMenuOption"
                href="#projectsSection"
                className={"mt-3 " + (projectsMenuOptionHovered ? "" : "opacity-60")}
                onMouseEnter={() => setProjectsMenuOptionHovered(true)}
                onMouseLeave={() => setProjectsMenuOptionHovered(false)}
            >
                {projectsMenuOptionHovered ? "/ " : ""}Projects
            </a>
        )
    } else {
        ProjectsMenuOption = (
            <Link
                id="projectsMenuOption"
                to="/#projectsSection"
                className={"mt-3 " + (projectsMenuOptionHovered ? "" : "opacity-60")}
                onMouseEnter={() => setProjectsMenuOptionHovered(true)}
                onMouseLeave={() => setProjectsMenuOptionHovered(false)}
            >
                {projectsMenuOptionHovered ? "/ " : ""}Projects
            </Link>
        )
    }

    const HireMeMenuOption = (
        <Link
            id="hireMeMenuOption"
            to="mailto:jesionka.patryk13@gmail.com"
            className={"mt-3 " + (hireMeMenuOptionHovered ? "" : "opacity-60")}
            onMouseEnter={() => setHireMeMenuOptionHovered(true)}
            onMouseLeave={() => setHireMeMenuOptionHovered(false)}
        >
            {hireMeMenuOptionHovered ? "/ " : ""}Hire Me
        </Link>
    );

    return (
        <nav className={"flex flex-col text-white justify-items-start w-[8vw] " + className}>
            {HomeMenuOption}
            {ProjectsMenuOption}
            {HireMeMenuOption}
        </nav>
    );
};

export default Menu;