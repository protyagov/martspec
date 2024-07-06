import React from "react";
import ImageI18N from "@/atomic/atom/img-i18n";

interface CardImageProps {
    imgSrc: string;
    imgH: number;
    imgW: number;
    imgAlt?: string;
    bgColor?: string;
    alignItems?: "start" | "center" | "end";
    justifyContent?: "start" | "center" | "end";
}

export default function CardImage({
    imgSrc,
    imgH,
    imgW,
    imgAlt,
    bgColor,
    alignItems = "center",
    justifyContent = "center",
}: CardImageProps) {
    return (
        <div
            className={`d-flex h-100 rounded-5 align-items-${alignItems} justify-content-${justifyContent}`}
            {...(bgColor && { style: { backgroundColor: bgColor } })}
        >
            <ImageI18N src={imgSrc} w={imgW} h={imgH} alt={imgAlt} cls="img-fluid m-0" />
        </div>
    );
}
