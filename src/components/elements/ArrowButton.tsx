import React, { useState } from "react";
import { HorizontalLine } from "./Line";
import { Link } from "react-router-dom";

enum HorizontalDirection {
    Left = "LEFT",
    Right = "RIGHT"
}

enum VerticalDirection {
    Up = "UP",
    Down = "DOWN"
}

interface HorizontalArrowButtonProps {
    text: string,
    goTo?: string,
    className?: string,
    widthClass?: string,
    direction?: HorizontalDirection,
    textJustify?: HorizontalDirection,
}

const HorizontalButton: React.FC<HorizontalArrowButtonProps> = ({
    text,
    goTo = "",
    className = "",
    widthClass = "w-56",
    direction = HorizontalDirection.Right,
    textJustify = HorizontalDirection.Left
}) => {
    let mainLineStyle = widthClass + " border-opacity-100";
    let pointerLineStyle = "border-opacity-100 w-10 translate-y-[0.8rem]";
    let textStyle = "flex flex-row";

    const [hovered, setHovered] = useState(false);

    if (direction === HorizontalDirection.Left)
        pointerLineStyle += " rotate-45 -translate-x-[0.4rem]";
    else
        pointerLineStyle += " -rotate-45 ml-[100%] -translate-x-[2.1rem]";

    if (textJustify === HorizontalDirection.Left)
        textStyle += " justify-start"
    else
        textStyle += " justify-end"


    return (
        // `place-items-start` - to reset any `place-items-*` styles pre-imposed when creating grid layout 
        <div className={"flex flex-col place-items-start " + className}>
            <Link to={goTo} className={"my-1 text-white " + (hovered ? "" : "opacity-60")}>
                <div
                    className={textStyle}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    {hovered ? "/ " : ""}{text}
                </div>
                <HorizontalLine className={mainLineStyle} />
                <HorizontalLine className={pointerLineStyle} />
            </Link>
        </div>
    );
};

export { HorizontalButton, HorizontalDirection, VerticalDirection };