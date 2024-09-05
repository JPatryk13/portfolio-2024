import React from "react";

const BadgeTeplate: React.FC<{ className: string, text: string }> = ({ className, text }) => (
    <span className={"inline-block w-fit items-center rounded-full px-2 py-1 text-xs font-medium ring-1 ring-inset " + className}>
        {text}
    </span>
)
const ProjectStatusBadge: React.FC<{ status: string }> = ({ status }) => {
    
    switch (status.toLowerCase()) {
        case "completed": {
            return <BadgeTeplate className="bg-green-400/10 text-green-400/60 ring-green-600/20" text="Completed" />
        }
        case "ci/cd": {
            return <BadgeTeplate className="bg-purple-400/10 text-purple-400/60 ring-purple-600/20" text="CI/CD" />
        }
        case "wip": {
            return <BadgeTeplate className="bg-blue-400/10 text-blue-400/60 ring-blue-600/20" text="WIP" />
        }
        default: {
            return <BadgeTeplate className="bg-slate-400/10 text-slate-400/60 ring-slate-600/20" text={status} />
        }
    }
};

export default ProjectStatusBadge;