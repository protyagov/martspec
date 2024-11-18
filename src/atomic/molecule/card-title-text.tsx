import React, { CSSProperties } from "react";
import "@/sass/molecule/card-title-text.scss";

interface CardTitleTextProps {
    title: string;
    text: string;
    bgColor?: CSSProperties["color"];
    titleColor?: CSSProperties["color"];
    textColor?: CSSProperties["color"];
    titleFS?: CSSProperties["fontSize"];
    textFS?: CSSProperties["fontSize"];
    titleFontFam?: CSSProperties["fontFamily"];
    textFontFam?: CSSProperties["fontFamily"];
}

export default function CardTitleText({
    title,
    text,
    bgColor,
    titleColor = "#212529",
    textColor = "#595959",
    titleFS = "1.5rem", // fs-4
    textFS = "1.25rem", // fs-5
    titleFontFam = "", 
    textFontFam = "", 
}: CardTitleTextProps): React.ReactNode {
    return (
        <div
            className="card-title-text h-100 rounded-5 p-lg-5 p-4 pb-5"
            style={{ backgroundColor: bgColor }}
        >
            <h3
                className="mb-3 pe-5 lh-sm"
                style={{
                    color: titleColor,
                    fontSize: titleFS,
                    fontFamily: titleFontFam,
                }}
            >
                {title}
            </h3>
            <p
                className="text mb-0 pe-4 lh-sm"
                style={{
                    color: textColor,
                    fontSize: textFS,
                    fontFamily: textFontFam,
                }}
            >
                {text}
            </p>
        </div>
    );
}
