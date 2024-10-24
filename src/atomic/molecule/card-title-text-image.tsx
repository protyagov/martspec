import React, { CSSProperties } from "react";
import ImageI18N from "@/atomic/atom/img-i18n";
import "@/sass/molecule/card-title-text-image.scss";

interface CardTitleTextImageProps {
    title: string;
    text: string;
    imgSrc: string;
    imgH: number;
    imgW: number;
    imgAlt?: string;
    titleColor?: CSSProperties["color"];
    textColor?: CSSProperties["color"];
    imgPosition?: "default" | "bottom-right"
}

export default function CardTitleTextImage({
    title,
    text,
    imgSrc,
    imgH,
    imgW,
    imgAlt,
    titleColor = "#212529",
    textColor = "#595959",
    imgPosition="default"
}: CardTitleTextImageProps): React.ReactNode {
    return (
        <div className="card-title-text-image d-flex flex-column h-100 rounded-5 shadow">
            <div className="p-lg-5 p-4 mb-3">
                <h3 className="mb-3 pe-5 fs-4 lh-sm" style={{ color: titleColor }}>
                    {title}
                </h3>
                <p className="text mb-0 pe-5 fs-5 lh-sm" style={{ color: textColor }}>
                    {text}
                </p>
            </div>
            <div className={`mx-5 mt-auto align-self-center ${imgPosition === 'bottom-right' ? 'img-bottom-right' : ''}`}>
                <ImageI18N src={imgSrc} w={imgW} h={imgH} alt={imgAlt} cls="img-fluid m-0" />
            </div>
        </div>
    );
}
