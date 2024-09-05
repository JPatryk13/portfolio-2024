import React from "react";
import { HorizontalLine } from "./Line";
import { scrollToElement } from "../../Utils";

const Section: React.FC<{ children: React.ReactNode, title?: string, num?: number | string, id?: string }> = ({ children, title, num, id }) => {
    const definedId = id === undefined ? "noIdSection" : id;
    if (title === undefined)
        return (
            <div id={definedId} className="flex flex-col gap-4 w-[50vw] ml-[25vw] text-white">
                {children}
            </div>
        );
    else
        return (
            <div id={definedId} className="flex flex-col w-[60vw] ml-[20vw] text-white">
                <div className="flex flex-row my-12 gap-4 w-[45vw]">
                    <div className="flex flex-col inline-block m-1 w-fit max-w-[22.5vw]">
                        {
                            num === undefined
                            ? <h2 className="text-3xl">{title}</h2>
                            : (
                                <div className="flex flex-row gap-4">
                                    <h2 className="flex flex-col text-3xl">{num}</h2>
                                    <h2 className="flex flex-col text-3xl">{title}</h2>
                                </div>
                            )
                        }
                    </div>
                    <div className="flex flex-col m-1 grow"><HorizontalLine className="mt-7"/></div>
                </div>
                <div className="flex flex-col w-[50vw] ml-[5vw] gap-4">
                    {children}
                </div>
            </div>
        );
}

const Subsection: React.FC<{ children: React.ReactNode, title: string, num: string, id?: string }> = ({ children, title, num, id }) => {
    const definedId = id === undefined ? "noIdSection" : id;
    return (
        <div id={definedId} className="flex flex-col w-[60vw] text-white">
            <div className="flex flex-row my-6 gap-3 w-[40vw]">
                <div className="flex flex-col inline-block m-1 w-fit max-w-[22.5vw]">
                    <div className="flex flex-row gap-4">
                        <h2 className="flex flex-col text-2xl">{num}</h2>
                        <h2 className="flex flex-col text-2xl">{title}</h2>
                    </div>
                </div>
                <div className="flex flex-col m-1 grow"><HorizontalLine className="mt-6"/></div>
            </div>
            <div className="flex flex-col w-[45vw] ml-[2vw] gap-4">
                {children}
            </div>
        </div>
    );
}

type SectionMap = { name: string, ref: string, sub?: Array<SectionMap> }

const ListOfSections: React.FC<{ contentsJSON: Array<SectionMap>, superSectionNumber?: string }> = ({ contentsJSON, superSectionNumber }) => {
    let indent: string;
    const subListLevel = (superSectionNumber === undefined ? 0 : superSectionNumber.split(".").length);

    switch (subListLevel) {
        case 1:
            indent = "indent-8";
            break;
        case 2:
            indent = "indent-16";
            break;
        case 3:
            indent = "indent-24";
            break;
        case 4:
            indent = "indent-32";
            break;
        case 5:
            indent = "indent-40";
            break;
        default:
            indent = "";
            break;
    }
    
    return (
        <ul className={`list-none ${indent}`}>
            {contentsJSON.map((section, index) => (
                <li>
                    {superSectionNumber !== undefined && superSectionNumber + "."}{index + 1} <span className="cursor-pointer underline text-teal-deer decoration-teal-deer" onClick={() => scrollToElement(section.ref)}>{section.name}</span>
                    {
                        section.sub !== undefined
                        && <ListOfSections
                            contentsJSON={section.sub}
                            superSectionNumber={
                                superSectionNumber === undefined
                                ? (index + 1).toString()
                                : superSectionNumber + "." + (index + 1).toString()
                            }
                        />
                    }
                </li>
            ))}
        </ul>
    );
}

const ContentsSection: React.FC<{ contentsJSON: Array<SectionMap> }> = ({ contentsJSON }) => {
    return (
        <Section title="Contents">
            <ListOfSections contentsJSON={contentsJSON} />
        </Section>
    );
}

export { Section, Subsection, ContentsSection }