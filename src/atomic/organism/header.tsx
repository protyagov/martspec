import React from "react";
import _, { Locale } from "@/i18n/locale";
import ButtonApple from "@/atomic/atom/button-apple";
import ImageI18N from "@/atomic/atom/img-i18n";

interface HeaderProps {
    title: string;
    appId?: number;
    appDownloadTitle?: string;
    content?: React.ReactNode;
    rowItems?: React.ReactNode;
    contentClassName?: string;
}

interface WithImageProps extends HeaderProps {
    imgSrc: string;
    imgH: number;
    imgW: number;
    imgAlt: string;
}

interface WithoutImageProps extends HeaderProps {
    imgSrc?: never;
    imgH?: never;
    imgW?: never;
    imgAlt?: never;
}

export default function Header(props: WithImageProps | WithoutImageProps) {
    const { title, imgSrc, imgH, imgW, imgAlt, appId, appDownloadTitle, content, rowItems, contentClassName } = props;

    return (
        <section className="new-page-header">
            <div className="row">
                <div className="col">
                    <div className={`headings ${rowItems ? "spaced" : ""}`}>
                        <h1>{title}</h1>
                        <div className={contentClassName}>
                            {content}
                        </div>
                        {rowItems != null ? (
                            <div className="row-items">{rowItems}</div>
                        ) : (
                            appId && <ButtonApple appId={appId} appDownloadTitle={appDownloadTitle || ""} />
                        )}
                    </div>
                    {imgSrc && <ImageI18N src={imgSrc} h={imgH} w={imgW} cls={`header-image ${rowItems ? "mid-position" : ""}`} alt={imgAlt} />}
                </div>
            </div>
        </section>
    );
}


