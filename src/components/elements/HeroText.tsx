import React from "react";

const HeroText: React.FC<{ header: string, aboveHeader?: string | null, heroTextSize?: string, className?: string }> = ({ header, aboveHeader = null, heroTextSize = "text-9xl", className = "" }) => {
  if (aboveHeader === null)
    return (
      <div className={"flex flex-col self-end " + className}>
        <h1 className={"mt-[2.25rem] text-teal-deer " + heroTextSize}>
          {header}
        </h1>
      </div>
    );
  else
    return (
      <div className={"flex flex-col self-end " + className}>
        <div className="text-xl pl-3 opacity-60 text-white">
          {aboveHeader}
        </div>
        <h1 className={"mt-2 text-teal-deer " + heroTextSize}>
          {header}
        </h1>
      </div>
    );
};

export default HeroText;