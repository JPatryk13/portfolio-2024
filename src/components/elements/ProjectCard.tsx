import React from "react";
import ProjectStatusBadge from "./ProjectStatusBadge"
import { Link } from "react-router-dom";
import { HorizontalButton, HorizontalDirection } from "./Button";

interface ProjectCardProps {
  title: string,
  name: string,
  status: string[],
  shortDescription: string,
  imgSource: string,
  linked: boolean,
  reverse?: boolean,
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  name,
  status,
  shortDescription,
  imgSource,
  linked,
  reverse = false,
}) => {

  let titleStyle = "flex flex-col text-3xl text-teal-deer";
  let imageStyle = "object-cover absolute inset-0 size-full";
  let descriptionStyle = "mt-3 text-white opacity-80 line-clamp-3";

  // all these have links attached to them
  let projectTitleElement;
  let projectImageElement;
  let projectDescriptionElement;

  if (linked) {
    projectTitleElement = (
      <Link to={"/project/" + name}>
        <h3 className={titleStyle}>
          {title}
        </h3>
      </Link>
    );
    projectImageElement = (
      <Link to={"/project/" + name}>
        <img
          loading="lazy"
          alt=""
          src={imgSource}
          className={imageStyle}
        />
      </Link>
    );
    projectDescriptionElement = (
      <>
        <p className={descriptionStyle}>
          {shortDescription}
        </p>
        {/* <HorizontalButton 
            text="Read more"
            goTo={"/project/" + name}
            direction={HorizontalDirection.None}
            textJustify={HorizontalDirection.Left}
            widthClass="w-[20rem]"
            color="teal-deer"
            opacity="100"
        /> */}
      </>
    );
  } else {
    projectTitleElement = (
      <h3 className={titleStyle}>
        {title}
      </h3>
    );
    projectImageElement = (
      <img
        loading="lazy"
        alt=""
        src={imgSource}
        className={imageStyle}
      />
    );
    projectDescriptionElement = (
      <p className={descriptionStyle}>
        {shortDescription}
      </p>
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
              {status.map((status) => (<ProjectStatusBadge status={status}/>))}
            </div>
            {projectDescriptionElement}
          </div>
        </div>
        <div className="flex flex-row">
          {/* Button that snaps to the bottom */}
          <HorizontalButton
            text="Read more"
            goTo={"/project/" + name}
            direction={HorizontalDirection.None}
            textJustify={HorizontalDirection.Left}
            widthClass="w-[15rem]"
            color="teal-deer"
            opacity="100"
          />
        </div>
      </div>
      <div id="cardImage" className="flex flex-col w-[40%]">
        <div className="flex overflow-hidden relative flex-col grow justify-center">
          {projectImageElement}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
