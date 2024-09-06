import React from "react";
import VisibleOnWindowSize from "../elements/VisibleOnWindowSize";
import {HorizontalLine} from "../elements/Line";
import MediaIcons from "../elements/MediaIcons";
import Menu from "../elements/Menu";
import {HeroText} from "../elements/HeroText";

const Landing: React.FC = () => {
  return (
    <header id="homeLandingSection" className="flex flex-col w-full h-dvh">
      <HorizontalLine className="mt-[10vh] w-[90vw]" />
      <HorizontalLine className="mt-[12vh] ml-[70vw] w-[30vw]" />
      <div className="flex flex-col mt-[5vh] ml-[15vw] w-[70vw] h-[50vh]">
        <div className="flex flex-wrap justify-between leading-tight w-[63vw]">
          <HeroText aboveHeader="Hi, my name is" header="Patryk"/>
          <Menu isHomePage={true} selectedId="homeMenuOption"/>
        </div>
        <div className="flex flex-wrap justify-between mt-2 leading-10 w-[80vw]">
          <ShortDescription />
          <MediaIcons orientation="vertical"/>
        </div>
      </div>
      <VisibleOnWindowSize minHeight={550}>
        <HorizontalLine className="w-[80vw] mt-[10vh] ml-[20vw]" />
      </VisibleOnWindowSize>
    </header>
  );
};

const ShortDescription: React.FC = () => {
  return (
    <p className="self-start pl-2 mt-12 text-3xl text-white opacity-60">
      Software engineer from London <br /> Building things that help
      people {':)'}
    </p>
  );
};


export default Landing;
