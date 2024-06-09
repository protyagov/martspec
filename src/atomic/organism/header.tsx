import React from "react";
import _, { Locale } from "@/i18n/locale";
import ButtonApple from "@/atomic/atom/button-apple";
import ImageI18N from "@/atomic/atom/img-i18n";

type HeaderProps = {
    title: string;
    appId?: number;
    appDownloadTitle?: string;
    content?: React.ReactNode;
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

export default function Header(props: WithImage<HeaderProps> | WithoutImage<HeaderProps>) {
    const { title, imgSrc, imgH, imgW, imgAlt, appId, appDownloadTitle, content } = props;

    return (
        <section className="new-page-header">
            <div className="row">
                <div className="col">
                    <div className="headings">
                        <h1>{title}</h1>
                        {content}
                        {appId && <ButtonApple appId={appId} appDownloadTitle={appDownloadTitle} />}
                    </div>
                    {imgSrc && <ImageI18N src={imgSrc} h={imgH} w={imgW} cls="header-image" alt={imgAlt} />}
                </div>
            </div>
        </section>
    );
}
