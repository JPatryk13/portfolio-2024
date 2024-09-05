import React from "react";
import MediaIcons from "../elements/MediaIcons";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col w-full max-md:max-w-full">
      <div className="flex gap-4 justify-center items-center min-h-[165px]">
        <MediaIcons orientation="horizontal" />
      </div>
    </footer>
  );
};

export default Footer;
