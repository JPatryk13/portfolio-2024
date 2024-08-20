import React from "react";

const HeroText: React.FC<{ header: string, aboveHeader: string }> = ({ header, aboveHeader }) => {
  return (
    <div className={"flex flex-col self-end mt-16"}>
      <div className="text-xl pl-3 opacity-60 text-white">
        {aboveHeader}
      </div>
      <h1 className={"mt-2 text-teal-deer text-9xl font-bold tracking-wider"}>
        {header}
      </h1>
    </div>
  );
};

const ProjectTitle: React.FC<{ title: string, date: string | null }> = ({ title, date }) => {
  if (date === null)
    return (
      <div className={"flex flex-col self-end w-[50vw]"}>
        <h1 className={"mt-[2.25rem] text-teal-deer text-7xl"}>
          {title}
        </h1>
      </div>
    );
  else
    return (
      <div className={"flex flex-col self-end w-[50vw]"}>
        <div className="text-xl pl-1 opacity-60 text-white">
          {date}
        </div>
        <h1 className={"mt-2 text-teal-deer text-7xl"}>
          {title}
        </h1>
      </div>
    );
};

export {HeroText,ProjectTitle};