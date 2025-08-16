import React, { CSSProperties } from "react";
import "@/sass/molecule/card-title-text-image-custom.scss";

interface CardTitleTextImageCustomProps {
    title: string;
    text: string;
    bgColor?: CSSProperties["color"];
    titleColor?: CSSProperties["color"];
    textColor?: CSSProperties["color"];
    titleFontSize?: CSSProperties["fontSize"];
    textFontSize?: CSSProperties["fontSize"];
    titleFontFam?: CSSProperties["fontFamily"];
    textFontFam?: CSSProperties["fontFamily"];
    imgSrc?: string;
    imgPosition?: "left-bottom" | "right-bottom";
    shadow?: boolean;
    cardHeight?: string;
    cardWidht?: string;
    imgH: string;
}

export default function CardTitleTextImageCustom({
    title,
    text,
    bgColor,
    titleColor = "#212529",
    textColor = "#595959",
    titleFontSize = "1.5rem",
    textFontSize = "1.25rem",
    titleFontFam = "",
    textFontFam = "",
    imgSrc,
    imgPosition = "right-bottom",
    shadow = true,
    cardHeight = "100%",
    cardWidht = "100%",
    imgH = "100%",
}: CardTitleTextImageCustomProps): React.ReactNode {
    return (
        <div
            className={`card-title-text h-100 rounded-5 p-lg-5 p-4 pb-5 position-relative ${shadow ? "shadow" : ""}`}
            style={{ 
                backgroundColor: bgColor,
                maxHeight: cardHeight,
                maxWidth: cardWidht,
                
            }}
        >
            <div className="position-relative" style={{ zIndex: 2 }}>
            <h3
                className="mb-3 mt-0 pe-5 lh-sm"
                style={{
                    color: titleColor,
                    fontSize: titleFontSize,
                    fontFamily: titleFontFam,
                }}
            >
                {title}
            </h3>
            <p
                className="text mb-0 pe-4 lh-sm"
                style={{
                    color: textColor,
                    fontSize: textFontSize,
                    fontFamily: textFontFam,
                }}
            >
                {text}
            </p>
            </div>
            {imgSrc && (
                <div 
                    className="position-absolute "
                    style={{
                        bottom: 0,
                        [imgPosition === "right-bottom" ? "right" : "left"]: 0,
                        width: "auto",
                        height: imgH,
                        overflow: "hidden"
                    }}
                >
                    <img 
                        src={imgSrc}
                        className="h-100"
                        style={{
                            objectFit: "cover",
                            transition: "transform 3s ease"
                        }}
                    />
                </div>
            )}
        </div>
    );
}