import React, { CSSProperties } from "react";
import "@/sass/molecule/card-title-text.scss";

interface CardTitleTextProps {
    title: string;
    text: string;
    bgColor?: CSSProperties["color"];
    textColor?: CSSProperties["color"];
}

export default function CardTitleText({ title, text, bgColor, textColor }: CardTitleTextProps): React.ReactNode {
    return (
        <div className="card-title-text h-100 rounded-5 p-lg-5 p-4 pb-5" style={{ backgroundColor: bgColor }}>
            <h3 className="title mb-3 pe-5 fs-4 lh-sm" style={{ color: textColor }}>
                {title}
            </h3>
            <p className="text mb-0 pe-4 fs-5 lh-sm" style={{ color: textColor }}>
                {text}
            </p>
        </div>
    );
}
