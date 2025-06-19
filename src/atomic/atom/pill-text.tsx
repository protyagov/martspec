import React from "react";

interface Props {
    textColor?: string;
    backgroundColor?: string;
    text?: string;
    isOpened?: boolean;
}

export default function PillText({ text, backgroundColor, textColor }: Props) {
    return (
        <div
            style={{
                color: textColor,
                backgroundColor: backgroundColor,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "20rem",
                height: "3rem",
                borderRadius: "60px",
            }}
        >
            <span style={{
                fontSize: "medium",
                fontWeight: "400",
                whiteSpace: "nowrap"
            }}
            >
                {text}
            </span>
        </div>
    );
}
