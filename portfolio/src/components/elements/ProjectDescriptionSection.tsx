import React from "react";
import { HorizontalLine } from "./Line";

const Section: React.FC<{ children: React.ReactNode, title?: string | null }> = ({ children, title = null }) => {
    if (title === null)
        return (
            <div className="flex flex-col gap-4 w-[50vw] ml-[25vw] text-white">
                {children}
            </div>
        );
    else
        return (
            <div className="flex flex-col w-[60vw] ml-[20vw] text-white">
                <div className="flex flex-row my-12 gap-4 w-[45vw]">
                    <h2 className="text-3xl">{title}</h2>
                    <HorizontalLine className="mt-7 w-full"/>
                </div>
                <div className="flex flex-col w-[50vw] ml-[5vw] gap-4">
                    {children}
                </div>
            </div>
        );
}

export { Section }