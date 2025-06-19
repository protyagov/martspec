import React from "react";

interface Props {
    className?: string;
    textColor?: string;
    backgroundColor?: string;
    text?: string;
    isOpened?: boolean;
}

export default function PillText({ text, backgroundColor, textColor, className }: Props) {
    return (
        <div
            className={className}
            style={{
                color: textColor,
                backgroundColor: backgroundColor,
            }}
        >
            <span className="text">{text}</span>
        </div>
    );
}
