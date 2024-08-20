import React from "react";
import Landing from "../components/sections/Landing";
import Projects from "../components/sections/Projects";
import Footer from "../components/sections/Footer";
import {FlexWrapper} from "../components/elements/MainWrapper";

const Home: React.FC = () => {
  return (
    <FlexWrapper>
      <Landing />
      <Projects />
      <Footer />
    </FlexWrapper>
  );
};

export default Home;