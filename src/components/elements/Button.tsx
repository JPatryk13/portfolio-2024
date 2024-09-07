import React, { useState } from "react";
import { HorizontalLine } from "./Line";
import { Link } from "react-router-dom";

enum HorizontalDirection {
    None = "NONE",
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
    color?: string,
    opacity?: string
}

const HorizontalButton: React.FC<HorizontalArrowButtonProps> = ({
    text,
    goTo = "",
    className = "",
    widthClass = "w-56",
    direction = HorizontalDirection.Right,
    textJustify = HorizontalDirection.Left,
    color = "white",
    opacity = "60"
}) => {
    // opacity stays @ 100% cause I decrease it globally later
    let mainLineStyle = widthClass + " opacity-100";
    let pointerLineStyle = "opacity-100 w-10 translate-y-[0.8rem]";
    let textStyle = "flex flex-row";

    const [hovered, setHovered] = useState(false);

    if (direction === HorizontalDirection.Left)
        pointerLineStyle += " rotate-45 -translate-x-[0.4rem]";
    else if (direction === HorizontalDirection.Right)
        pointerLineStyle += " -rotate-45 ml-[100%] -translate-x-[2.1rem]";

    if (textJustify === HorizontalDirection.Left)
        textStyle += " justify-start"
    else
        textStyle += " justify-end"

    const button = (
        direction === HorizontalDirection.None
        ? <HorizontalLine className={mainLineStyle} color={color}/>
        : <>
            <HorizontalLine className={mainLineStyle} color={color}/>
            <HorizontalLine className={pointerLineStyle} color={color}/>
        </>)

    return (
        // `place-items-start` - to reset any `place-items-*` styles pre-imposed when creating grid layout 
        <div className={"flex flex-col place-items-start" + className}>
            <Link to={goTo} className={`my-1 text-${color} ` + (hovered ? "" : `opacity-${opacity}`)}>
                <div
                    className={textStyle}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    {hovered ? "/ " : ""}{text}
                </div>
                {button}
            </Link>
        </div>
    );
};

export { HorizontalButton, HorizontalDirection, VerticalDirection };