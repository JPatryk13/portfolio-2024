import React from "react";
import Landing from "../components/sections/Landing";
import Projects from "../components/sections/Projects";
import Footer from "../components/sections/Footer";

const Home: React.FC = () => {
  return (
    <main className="flex overflow-hidden flex-col bg-neutral-900">
      <Landing />
      <Projects />
      <Footer />
    </main>
  );
};

export default Home;