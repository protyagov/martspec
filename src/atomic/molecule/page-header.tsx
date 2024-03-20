import React from "react";
import ButtonApple from "../atom/button-apple";

type PageHeaderProps = {
    title: string;
    subtitleLevel1?: string;
    subtitleLevel2?: string;
    appId?: number;
    appDownloadTitle?: string;
};

type WithImage<Props> = Props & {
    imgSrc: string;
    imgH: number;
    imgW: number;
    imgAlt: string;
};

type WithoutImage<Props> = Props & {
    imgSrc?: never;
    imgH?: never;
    imgW?: never;
    imgAlt?: never;
};

export default function PageHeader(props: (
    | WithImage<PageHeaderProps>
    | WithoutImage<PageHeaderProps>
)) {
    const {
        title,
        subtitleLevel1,
        subtitleLevel2,
        imgSrc,
        imgH,
        imgW,
        imgAlt,
        appId,
        appDownloadTitle,
    } = props;

    return (
        <div className="ms-base-new">
        <section className="page-header text-center">
            <div className="row">
                <div className="col">
                    {imgSrc && (
                        <img
                            src={imgSrc}
                            height={imgH}
                            width={imgW}
                            className="ms-base-image"
                            alt={imgAlt}
                        />
                    )}

                    <div className="headings">
                        <h1>{title}</h1>
                        {subtitleLevel1 && <h2>{subtitleLevel1}</h2>}
                        {subtitleLevel2 && <h6>{subtitleLevel2}</h6>}
                    </div>

                    {appId && (
                       <ButtonApple appId={appId} appDownloadTitle={appDownloadTitle}/>
                    )}
                </div>
            </div>
        </section>
        </div>
    );
}
