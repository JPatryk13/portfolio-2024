import React from "react";

const HorizontalLine: React.FC<{ className?: string }> = ({ className = "" }) => (
    <hr className={`h-px border border-white border-opacity-60 ${className}`} />
);
const VerticalLine: React.FC<{ className?: string }> = ({ className = "" }) => (
    <hr className={`w-px border border-white border-opacity-60 ${className}`} />
);

export {HorizontalLine, VerticalLine};

