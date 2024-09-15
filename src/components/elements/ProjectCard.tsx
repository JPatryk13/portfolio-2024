import React from "react";
import ProjectStatusBadge from "./ProjectStatusBadge"
import { Link } from "react-router-dom";
import { HorizontalButton, HorizontalDirection } from "./Button";
import projects from "../../assets/json/projects.json";

import AnkiImg from "../../assets/img/anki.png";
import JobSearch from "../../assets/img/ijustwanttogetajob.png";
import Portfolio2024 from "../../assets/img/portfolio2024.png";
import PortfolioOld from "../../assets/img/portfolio-old.png";
import WebDevSite from "../../assets/img/web-dev-site.png";
import PyValidify from "../../assets/img/pyvalidify.png";
import TriangleGame from "../../assets/img/triangle-game.png";
import Budgething from "../../assets/img/budgething.png"

function getImage(projectName: string) {
  switch (projectName) {
    case ("anki-share-and-collaborate"):
      return AnkiImg;
    case ("just-want-to-get-a-job"):
      return JobSearch;
    case ("portfolio-2024"):
      return Portfolio2024;
    case ("portfolio-2019"):
      return PortfolioOld;
    case ("webdev-site-2021"):
      return WebDevSite;
    case ("pyvalidify"):
      return PyValidify;
    case ("triangle-game"):
      return TriangleGame;
    case ("budgething"):
      return Budgething;
    default:
      return "chuj2";
  }
}

const ProjectCard: React.FC<{ projectData: typeof projects[0], reverse: boolean }> = ({
  projectData, reverse
}) => {

  let titleStyle = "flex flex-col text-3xl text-teal-deer";
  let imageStyle = "object-cover absolute inset-0 size-full";
  let descriptionStyle = "mt-3 text-white opacity-80 line-clamp-3";

  // all these have links attached to them
  let projectTitleElement;
  let projectImageElement;
  let readMoreButton;

  if (projectData.publicDescription) {
    projectTitleElement = (
      <Link to={"/project/" + projectData.name}>
        <h3 className={titleStyle}>
          {projectData.title}
        </h3>
      </Link>
    );
    projectImageElement = (
      <Link to={"/project/" + projectData.name}>
        <img
          loading="lazy"
          alt=""
          src={getImage(projectData.name)}
          className={imageStyle}
        />
      </Link>
    );
    readMoreButton = (
      <HorizontalButton
        text="Read more"
        goTo={"/project/" + projectData.name}
        direction={HorizontalDirection.None}
        textJustify={HorizontalDirection.Left}
        widthClass="w-[15rem]"
        color="teal-deer"
        opacity="100"
      />
    );
  } else {
    projectTitleElement = (
      <h3 className={titleStyle}>
        {projectData.title}
      </h3>
    );
    projectImageElement = (
      <img
        loading="lazy"
        alt=""
        src={getImage(projectData.name)}
        className={imageStyle}
      />
    );
  }

  return (
    <div className={`flex gap-10 ${reverse ? "flex-row-reverse" : "flex-row"} h-64`}>
      <div id="cardDescription" className={`flex flex-col justify-between w-[60%] ${reverse ? "pr-7" : "pl-7"}`}>
        <div className="flex flex-row">
          {/* Title and main description */}
          <div className="flex flex-col pt-5">
            {projectTitleElement}
            <div className="flex flex-row mt-3 gap-1">
              {projectData.status.map((status) => (<ProjectStatusBadge status={status}/>))}
            </div>
            <p className={descriptionStyle}>
              {projectData.shortDescription}
            </p>
          </div>
        </div>
        <div className={`flex flex-row` + (!reverse ? ` self-end` : ``)}>
          {
            /* Button that snaps to the bottom */
            readMoreButton
          }
        </div>
      </div>
      <div id="cardImage" className="flex flex-col w-[40%]">
        <div className="flex flex-col relative grow justify-center opacity-[80%]">
          {projectImageElement}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
