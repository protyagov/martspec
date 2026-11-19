import * as React from "react";
import TextLinkArrow from "./text-link-arrow";

interface Props {
    title: string;
    text: string;
    link: Link;

    gridColumnClass?: string; 
    bgColor?: string;
    image?: string;
    alt?: string;
    arrowImage?: React.ReactNode;
    hoverColor?: string;
    color?: string;
    hasShadow?: boolean; 
    borderClass?: string; 
    imageZIndex?: number; 
    imageOpacity?: number; 
    additionalCardClass?: string;
    fontFamily?: string;
    fontSize?: string
}

interface Link {
    text: string;
    href: string;
}

const TitleTextLinkCard: React.FC<Props> = ({
    title,
    text,
    link,
    gridColumnClass = "col-lg-4",
    bgColor = "#FFFFFF",
    image,
    alt = "Image",
    arrowImage = null,
    hoverColor = "",
    color = "",
    hasShadow = false,
    borderClass = "",
    imageZIndex = 1, 
    imageOpacity = 1,
    additionalCardClass = "",
    fontFamily = "",
    fontSize = ""
}) => {
    return (
        <div className={gridColumnClass}>
            <div className={`title-text-link-card ${additionalCardClass} ${hasShadow ? 'shadow' : ''} ${borderClass}`} style={{ backgroundColor: bgColor }}>
                {image && (
                    <img
                        className="card-image"
                        src={image}
                        alt={alt}
                        style={{ zIndex: imageZIndex, opacity: imageOpacity }} 
                    />
                )}
                <div>
                    <h3 style={{zIndex: 10, position: "relative"}}>{title}</h3>
                    <p style={{zIndex: 10, position: "relative"}}>{text}</p>
                    <TextLinkArrow
                        href={link.href}
                        rightIcon={arrowImage}
                        text={link.text}
                        isNewTab={true}
                        color={color}
                        hoverColor={hoverColor}
                        fontFamily={fontFamily}
                        fontSize={fontSize}
                    />
                </div>
            </div>
        </div>
    );
};

export default TitleTextLinkCard;
