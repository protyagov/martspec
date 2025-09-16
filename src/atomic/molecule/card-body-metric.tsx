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
    {/* Контент */}
    <div className="position-relative z-2" style={{ flex: 1 }}>
        <p className="title lh-1 mb-0">
            {title}
        </p>
        <div className="card-action pt-4">
            <TextLinkArrow
                rightIcon={<RightArrowIcon />}
                {...actionLink}
                color={primaryColor}
                hoverColor={linkHoverColor}
                hasUnderlineHover={hasUnderlineHover}
            />
        </div>
    </div>
    {bgImg && (
        <div 
            className="position-absolute"
            style={{
                top: 0,
                right: 0,
                width: "auto",
                height: "70%",
                overflow: "hidden",
                zIndex: 1
            }}
        >
            <img 
                src={bgImg.src}
                className="h-100"
                style={{
                    objectFit: "contain", // меняем на contain чтобы вся картинка была видна
                    objectPosition: "right top",
                    transition: "transform 0.3s ease"
                }}
                alt=""
            />
        </div>
    )}
</div>
    );
}
