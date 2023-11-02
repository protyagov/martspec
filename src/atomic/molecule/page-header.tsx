import React from "react";
import _, { Locale } from "src/i18n/locale";

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
                        <h1>{ _(title) }</h1>
                        { subtitleLevel1 && <h3>{ _(subtitleLevel1) }</h3> }
                        { subtitleLevel2 && <p>{ _(subtitleLevel2) }</p> }
                    </div>

                    {appId && (
                        <a
                            href={`https://apps.apple.com/${_(
                                "COUNTRY_CODE"
                            )}/app/id${appId}?l=${Locale.language}`}
                            target="_blank"
                            title={_(appDownloadTitle)}
                            className="ms-btn-apple"
                            style={{
                                backgroundImage:
                                    "url(/img/apple_btn/" +
                                    Locale.language +
                                    ".svg)",
                            }}
                        ></a>
                    )}
                </div>
            </div>
        </section>
        </div>
    );
}
