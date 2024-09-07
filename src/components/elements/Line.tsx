import React from "react";

const HorizontalLine: React.FC<{ color?: string, opacity?: string, className?: string }> = ({ color = "white", opacity = "60", className = "" }) => (
    // <hr className={`h-px border border-${color} border-opacity-60 ${className}`} />
    <div className={`h-px border border-${color} opacity-${opacity} ${className}`} />
);
const VerticalLine: React.FC<{ color?: string, opacity?: string, className?: string }> = ({ color = "white", opacity = "60", className = "" }) => (
    <hr className={`w-px border border-${color} opacity-${opacity} ${className}`} />
);

export {HorizontalLine, VerticalLine};

