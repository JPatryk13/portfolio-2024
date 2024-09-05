import React from "react";
import { useParams } from "react-router-dom";
import PyValidify from "./projects/PyValidify";
import PageNotFound from "./PageNotFound";
import { scrollToTop } from "../Utils";
import BudgeThing from "./projects/BudgeThing";

const ProjectDetailRelay: React.FC = () => {
    const { projectName } = useParams();
    scrollToTop();
    switch (projectName) {
        case "pyvalidify": {
            return <PyValidify/>
        }
        case "budgething": {
            return <BudgeThing />
        }
        default: {
            return <PageNotFound/>
        }
    }
};

export default ProjectDetailRelay;