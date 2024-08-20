import React from "react";
import { ReactComponent as EmailIcon } from "../../assets/icons/email.svg"
import { ReactComponent as GithubIcon } from "../../assets/icons/github.svg"
import { ReactComponent as LinkedinIcon } from "../../assets/icons/linkedin.svg"
const MediaIcons: React.FC<{ orientation?: string }> = ({ orientation = "horizontal" }) => {
    var cls = ""
  
    if (orientation === "vertical") {
      cls = "flex-col space-y-4";
    } else {
      cls = "flex-row space-x-4";
    }
      
    return (
      <div className={`flex ${cls}`}>
        <a href="mailto:jesionka.patryk13@gmail.com"><EmailIcon /></a>
        <a href="https://www.linkedin.com/in/jpatryk13/"><LinkedinIcon /></a>
        <a href="https://github.com/JPatryk13"><GithubIcon /></a>
      </div>
    );
  };
  export default MediaIcons;