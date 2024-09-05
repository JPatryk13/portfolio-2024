import React from "react";
import { HorizontalLine } from "./Line";
import { ProjectTitle } from "./HeroText";
import Menu from "./Menu";
import MediaIcons from "./MediaIcons";
import { HorizontalArrowButton, HorizontalDirection } from "./ArrowButton";
import { getPreviousPublicProject, getNextPublicProject } from "../../Utils"

interface ProjectDetailHeaderProps {
    title: string,
    name: string,
    date?: string | null
}
const ProjectDetailHeader: React.FC<ProjectDetailHeaderProps> = ({
    title,
    name,
    date = null
}) => {
    const prevProject = getPreviousPublicProject(name)
    const nextProject = getNextPublicProject(name)

    const arrowsDivClassName = "mr-[15vw] gap-2"
    let justifyBottomRow = "justify-between";
    let arrowsNav;

    if (prevProject === null && nextProject === null) {

        arrowsNav = (<></>);

    } else if (prevProject !== null && nextProject !== null) {

        arrowsNav = (
            <div className={arrowsDivClassName}>
                <HorizontalArrowButton text="previous" goTo={`/project/${prevProject.name}`} widthClass="w-[10rem] lg:w-[14rem]" className="ml-[10vw] lg:ml-[20vw]" direction={HorizontalDirection.Left} textJustify={HorizontalDirection.Right} />
                <HorizontalArrowButton text="next" goTo={`/project/${nextProject.name}`} widthClass="w-[10rem] lg:w-[14rem]" className="ml-[10vw] lg:ml-[20vw]" />
            </div>
        );

    } else if (nextProject !== null) {

        // onl next project available
        arrowsNav = (
            <div className={arrowsDivClassName}>
                <HorizontalArrowButton text="next" goTo={`/project/${nextProject.name}`} widthClass="w-[10rem] lg:w-[14rem]" className="ml-[10vw] lg:ml-[20vw]" />
            </div>
        );

    } else if (prevProject !== null) {

        // only previous project available
        arrowsNav = (
            <div className={arrowsDivClassName}>
                <HorizontalArrowButton text="previous" goTo={`/project/${prevProject.name}`} widthClass="w-[10rem] lg:w-[14rem]" className="ml-[10vw] lg:ml-[20vw]" direction={HorizontalDirection.Left} textJustify={HorizontalDirection.Right} />
            </div>
        );

    }

    return (
        <header id="pyvalidifyProjectHeader" className="flex flex-col w-full h-dvh">
            <HorizontalLine className="mt-[40vh] ml-[70vw] w-[30vw]" />
            <div className="flex flex-col ml-[15vw] w-[70vw] h-[50vh]">
                <div className="flex flex-wrap justify-between leading-tight w-[63vw]">
                    <ProjectTitle date={date} title={title} />
                    <Menu isHomePage={false} className="mt-[5vh]" />
                </div>
                <div className={`flex flex-wrap mt-[15vh] w-[80vw] justify-end`}>
                    {arrowsNav}
                    <MediaIcons orientation="vertical" />
                </div>
            </div>
        </header>
    );
};

export default ProjectDetailHeader;