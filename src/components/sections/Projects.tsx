import React from "react";
import ProjectCard from "../elements/ProjectCard";
import {HorizontalLine, VerticalLine} from "../elements/Line";
import projectsData from "../../assets/json/projects.json";


// (half-card height) - (3xl text line height) = (((64 / 2) / 4)rem - 2.25rem
const VerticalLineHalfHeightREM = `h-[5.5rem]`;
// (card height) + (spacing) - 2 * (3xl text line height) = ((64 + 36) / 4)rem - 4.5rem
const VerticalLineFullHeightREM = `h-[20rem]`;

const Projects: React.FC = () => {
  
  return (
    <section id="projectsSection" className="flex flex-col pt-10 pb-20 w-full">
      <div className="flex flex-wrap justify-between w-full pr-6">
        <div className="flex flex-wrap justify-between">
          <HorizontalLine className="w-[70vw] mt-7" />
          <h2 className="text-3xl text-white ml-1">
            Projects
          </h2>
        </div>
        <div className="flex flex-wrap mx-auto mt-36">
          <div id="projectCardsContainer" className="flex flex-col mx-auto px-24 w-[70vw] max-w-screen-xl">
            {projectsData.map((project, index) => {
              if (project.publicCard)
                return (
                  <div key={index} className={`${index !== 0 ? "mt-36" : ""}`}>
                    <ProjectCard
                      projectData={project}
                      reverse={index % 2 !== 0}
                    />
                  </div>
                );
              else
                return (<></>);
            })}
          </div>
          <div className="flex flex-col gap-1">
            {projectsData.map((project, index) => (
              <>
                <VerticalLine className={(index === 0 ? VerticalLineHalfHeightREM : VerticalLineFullHeightREM) + ` mx-auto`} />
                <h3 className="text-3xl text-white opacity-60">
                  {project.yearStarted.substring(0, 2)}<br />
                  {project.yearStarted.substring(2, 4)}
                </h3>
              </>
          ))}
          <VerticalLine className={VerticalLineHalfHeightREM + ` mx-auto`} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
