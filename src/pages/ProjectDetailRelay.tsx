import React from "react";
import { useParams } from "react-router-dom";
import PyValidify from "./projects/PyValidify";
import PageNotFound from "./PageNotFound";

const ProjectDetailRelay: React.FC = () => {
    const { projectName } = useParams();

    switch (projectName) {
        case "pyvalidify": {
            return <PyValidify/>
        }
        default: {
            return <PageNotFound/>
        }
    }
};

export default ProjectDetailRelay;