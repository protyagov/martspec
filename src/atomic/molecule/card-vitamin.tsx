import React, { CSSProperties, useState } from "react";
import TextLinkArrow from "@/atomic/molecule/text-link-arrow";
import RightArrowIcon from "../atom/right-arrow-icon";
import "@/sass/molecule/card-vitamin.scss";

interface ActionLink {
    text: string;
    href: string;
}

export interface BackgroundImage {
    src: string;
    width: number;
    height: number;
    position?: "top" | "bottom";
}

interface CardVitaminProps {
    title: string;
    subtitle: string;
    category?: string;
    iconSrc?: string;
    description: string;
    actionLink: ActionLink;
    bgImg: BackgroundImage;
    bgColor: CSSProperties["color"];
    primaryColor: CSSProperties["color"];
    linkHoverColor: CSSProperties["color"];
    hasUnderlineHover?: boolean;
}

export default function CardVitamin({
    title,
    subtitle,
    category,
    iconSrc,
    description,
    actionLink,
    bgImg,
    bgColor,
    primaryColor,
    linkHoverColor,
    hasUnderlineHover=false,
}: CardVitaminProps): React.ReactNode {
    const [iconError, setIconError] = useState(false);
    const subtitleColor: CSSProperties["color"] = "#151515b3";
    const descriptionColor: CSSProperties["color"] = "#15151599";

    const titleSubscript = title.match(/\d+$/g)?.[0];

    let titleText = title;

    if (titleSubscript) {
        const subscriptRegex = new RegExp(`${titleSubscript}$`);
        titleText = title.replace(subscriptRegex, "");
    }

    return (
        <div className="card-vitamin d-flex flex-column h-100 position-relative rounded-5 shadow">
            <div className="card-header rounded-top-5 position-relative" style={{ backgroundColor: bgColor }}>
                <div className="d-flex flex-column align-items-center gap-2">
                    <div className="title-circle z-2">
                        {iconSrc && !iconError ? (
                            <img
                                className="title-icon"
                                src={iconSrc}
                                alt={subtitle}
                                onError={() => setIconError(true)}
                            />
                        ) : (
                            <p className="title lh-1 mb-0" style={{ color: primaryColor }}>
                                {titleText}
                                {titleSubscript && <span className="title-subscript">{titleSubscript}</span>}
                            </p>
                        )}
                    </div>
                    <div className="subtitle-group z-2">
                    <p
                        className="subtitle d-flex justify-content-center text-center mb-0 lh-sm z-2"
                        style={{ color: subtitleColor }}
                    >
                        {subtitle}
                    </p>
                    {category && (
                        <p className="category text-center mb-0 z-2" style={{ color: subtitleColor }}>
                            {category}
                        </p>
                    )}
                    </div>
                </div>
                {bgImg && (
                    <img
                        className={`position-absolute ${bgImg.position === "bottom" ? "bottom-0" : "top-0"} start-0 z-1`}
                        src={bgImg.src}
                        alt=""
                        width={bgImg.width}
                        height={bgImg.height}
                    />
                )}
            </div>
            <div className="card-content flex-grow-1">
                <p className="description lh-sm mb-0" style={{ color: descriptionColor }}>
                    {description}
                </p>
            </div>
            <div className="card-action">
                <TextLinkArrow
                    rightIcon={<RightArrowIcon />}
                    {...actionLink}
                    color={primaryColor}
                    hoverColor={linkHoverColor}
                    hasUnderlineHover={hasUnderlineHover}
                />
            </div>
        </div>
    );
}
