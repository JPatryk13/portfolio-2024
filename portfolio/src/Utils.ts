import projects from "./assets/json/projects.json"

function getProjectByName(name: string): typeof projects[0] {
    let targetProjectDetails = null;
    projects.forEach(projectDetails => {
        if (projectDetails.name === name)
            targetProjectDetails = projectDetails;
    });
    if (targetProjectDetails === null)
        throw Error(`No such project with name '${name}'.`);
    else
        return targetProjectDetails;
}

function getNextPublicProject(currentProjectName: string): typeof projects[0] | null {
    let targetProjectDetails = null;
    projects.forEach((projectDetails, index, array) => {
        if (projectDetails.name === currentProjectName)
            if (array.length > index)
                if (array[index + 1].publicDescription)
                    targetProjectDetails = array[index + 1];
    });
    return targetProjectDetails;
}

function getPreviousPublicProject(currentProjectName: string): typeof projects[0] | null {
    let targetProjectDetails = null;
    projects.forEach((projectDetails, index, array) => {
        if (projectDetails.name === currentProjectName)
            if (index !== 0)
                if (array[index - 1].publicDescription)
                    targetProjectDetails = array[index - 1];
    });
    return targetProjectDetails;
}


export { getProjectByName, getNextPublicProject, getPreviousPublicProject }