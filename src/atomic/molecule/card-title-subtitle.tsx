import React, { CSSProperties } from "react";
import "@/sass/molecule/card-title-subtitle.scss";

type Alignment = "start" | "center" | "end";

interface BackgroundImage {
    src: string;
    widthPerc?: CSSProperties["scale"];
    alignX?: Alignment;
    alignY?: Alignment;
    translateX?: CSSProperties["translate"];
    translateY?: CSSProperties["translate"];
}

export interface CardTitleSubtitleProps {
    title: string;
    subtitle: string;
    bgImg?: BackgroundImage;
    titleColor?: CSSProperties["color"];
    subtitleColor?: CSSProperties["color"];
}

const defaultBgSettings: Omit<BackgroundImage, "src"> = {
    alignX: "end",
    alignY: "end",
};

const alignToOrigin = (align: Alignment, axis: "x" | "y"): string => {
    switch (align) {
        case "start":
            return axis === "x" ? "left" : "top";
        case "end":
            return axis === "x" ? "right" : "bottom";
        case "center":
        default:
            return align;
    }
};

export default function CardTitleSubtitle({
    title,
    subtitle,
    bgImg,
    titleColor = "#1686FF",
    subtitleColor = "#151515b3",
}: CardTitleSubtitleProps): React.ReactNode {
    const bgImage = bgImg && { ...defaultBgSettings, ...bgImg };

    const { src: imgSrc, widthPerc: scale, alignX, alignY, translateX, translateY } = bgImage ?? {};

    const transform: CSSProperties["transform"] = [
        scale && `scale(${scale})`,
        translateX && `translateX(${translateX})`,
        translateY && `translateY(${translateY})`,
    ]
        .filter((val) => val)
        .join(" ");

    const transformOrigin: CSSProperties["transformOrigin"] =
        transform && `${alignToOrigin(alignX, "x")} ${alignToOrigin(alignY, "y")}`;

    return (
        <div
            className={`card-title-subtitle d-inline-block position-relative overflow-hidden h-100 w-100
            p-lg-5 px-md-5 px-sm-4 px-3 pt-4 pb-5 rounded-5 shadow text-md-start text-center`}
        >
            <h3 className="title mb-0 lh-sm" style={{ color: titleColor }}>
                {title}
            </h3>
            <p className="subtitle mb-0 lh-sm text-lowercase" style={{ color: subtitleColor }}>
                {subtitle}
            </p>
            {bgImg && (
                <div
                    className={`position-absolute top-0 start-0 z-n1 h-100 w-100 d-flex justify-content-${alignX} align-items-${alignY}`}
                >
                    <img className="w-100 m-0" src={imgSrc} alt="" style={{ transform, transformOrigin }} />
                </div>
            )}
        </div>
    );
}
