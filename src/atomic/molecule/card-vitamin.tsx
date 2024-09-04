import React, { CSSProperties } from "react";
import TextLinkArrow from "@/atomic/molecule/text-link-arrow";
import "@/sass/molecule/card-vitamin.scss";
import RightArrowIcon from "../atom/right-arrow-icon";

interface ActionLink {
    text: string;
    href: string;
}

export interface BackgroundImage {
    src: string;
    width: number;
    height: number;
}

interface CardVitaminProps {
    title: string;
    subtitle: string;
    description: string;
    actionLink: ActionLink;
    bgImg: BackgroundImage;
    bgColor: CSSProperties["color"];
    primaryColor: CSSProperties["color"];
    linkColor: CSSProperties["color"];
}

export default function CardVitamin({
    title,
    subtitle,
    description,
    actionLink,
    bgImg,
    bgColor,
    primaryColor,
    linkColor,
}: CardVitaminProps): React.ReactNode {
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
            <div className="card-header rounded-top-5" style={{ backgroundColor: bgColor }}>
                <div className="d-flex flex-column align-items-center gap-2">
                    <p className="title lh-1 mb-0 z-2" style={{ color: primaryColor }}>
                        {titleText}
                        {titleSubscript && <span className="title-subscript">{titleSubscript}</span>}
                    </p>
                    <p
                        className="subtitle d-flex justify-content-center text-center mb-0 lh-sm z-2"
                        style={{ color: subtitleColor }}
                    >
                        {subtitle}
                    </p>
                </div>
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
                    color={linkColor}
                    hoverColor={primaryColor}
                />
            </div>
            {bgImg && (
                <img
                    className="position-absolute top-0 start-0 z-1"
                    src={bgImg.src}
                    alt=""
                    width={bgImg.width}
                    height={bgImg.height}
                />
            )}
        </div>
    );
}
