import React, { CSSProperties, ReactNode } from "react";
import _ from "@/i18n/locale";
import ButtonApple from "@/atomic/atom/button-apple";
import ImageI18N from "@/atomic/atom/img-i18n";

type CallToActionProps = {
    title: string;
    subtitle?: string;
    textList?: ReactNode[];
    textListTitle?: string;
    button?: ReactNode;
    bgColor?: CSSProperties["color"];
    appId?: number;
    appDownloadTitle?: string;
    imgSrc?: string;
    imgAlt?: string;
    imgW?: number;
    imgH?: number;
    imgPosition?: "left" | "right";
};

export default function CallToAction(props: CallToActionProps) {
    const { title, subtitle, textList, textListTitle, button, bgColor = "#FFFFFF",
        imgSrc, imgAlt, imgW = 590, imgH = 585, appId, appDownloadTitle } = props;

    return (
        <div className="container my-4" style={{ backgroundColor: bgColor }}>
            <div className="row align-items-center justify-content-center">
                <div className="col-12 text-start col-lg-6 text-lg-start">
                    <h2 className="fs-1 fw-medium mb-3">{_(title)}</h2>

                    {subtitle && <p className="fs-5 mb-4">{_(subtitle)}</p>}

                    {textListTitle && <h3>{_(textListTitle)}</h3>}

                    {textList && (
                        <ul className="list-unstyled">
                            {textList.map((item, index) => (
                                <li key={index} className="mb-2">{item}</li>
                            ))}
                        </ul>
                    )}

                    {appId && appDownloadTitle && (
                        <div className="mb-3 d-flex justify-content-start">
                            <ButtonApple appId={appId} appDownloadTitle={appDownloadTitle} />
                        </div>
                    )}

                    {button}
                </div>

                {imgSrc && (
                    <div className="col-12 col-lg-6 mt-4 mt-lg-0 text-center">
                        <ImageI18N
                            src={imgSrc}
                            h={imgH}
                            w={imgW}
                            cls="img-fluid mx-auto d-block"
                            alt={imgAlt}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}
