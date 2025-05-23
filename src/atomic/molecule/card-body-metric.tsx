import React, { CSSProperties } from "react";
import TextLinkArrow from "@/atomic/molecule/text-link-arrow";
import RightArrowIcon from "../atom/right-arrow-icon";
import "@/sass/molecule/card-body-metric.scss";

interface ActionLink {
    text: string;
    href: string;
}

export interface BackgroundImage {
    src: string;
    width: number;
    height: number;
}

interface CardBodyMetricProps {
    title: string;
    actionLink: ActionLink;
    bgImg: BackgroundImage;
    primaryColor: CSSProperties["color"];
    linkHoverColor: CSSProperties["color"];
    hasUnderlineHover?: boolean;
}

export default function CardBodyMetric({
    title,
    actionLink,
    bgImg,
    primaryColor,
    linkHoverColor,
    hasUnderlineHover=false,
}: CardBodyMetricProps): React.ReactNode {

    return (
        <div className="card-body-metric d-flex flex-column h-100 position-relative rounded-5 shadow">
            <p className="title lh-1 mb-0 z-2">
                {title}
            </p>
            <div className="card-action">
                <TextLinkArrow
                    rightIcon={<RightArrowIcon />}
                    {...actionLink}
                    color={primaryColor}
                    hoverColor={linkHoverColor}
                    hasUnderlineHover={hasUnderlineHover}
                />
            </div>
            {bgImg && (
                <img
                    className="position-absolute top-0 end-0 z-1"
                    src={bgImg.src}
                    alt=""
                    width={bgImg.width}
                    height={bgImg.height}
                />
            )}
        </div>
    );
}
