import React, { useState, useEffect } from "react";
import ButtonApple from "@/atomic/atom/button-apple";
import ImageI18N from "@/atomic/atom/img-i18n";

type HeaderProps = {
    title: string;
    appId?: number;
    appDownloadTitle?: string;
    content?: React.ReactNode;
    whichContent?: "apple-button" | "row-items"; 
    tripleRowContent?: React.ReactNode;
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
    const { 
        title, 
        imgSrc, 
        imgH, 
        imgW, 
        imgAlt, 
        appId, 
        appDownloadTitle, 
        content, 
        whichContent = "apple-button", 
        tripleRowContent 
    } = props;

    const [isDesktop, setIsDesktop] = useState<boolean>(typeof window !== "undefined" ? window.innerWidth > 991 : false);

    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 991);
        };

        window.addEventListener("resize", handleResize);
        handleResize(); 

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <>
            {whichContent === "apple-button" ? (
                <section className="new-page-header">
                    <div className="row">
                        <div className="col">
                            <div className="headings">
                                <h1>{title}</h1>
                                {content}
                                {appId && <ButtonApple appId={appId} appDownloadTitle={appDownloadTitle} />}
                            </div>
                            {imgSrc && (
                                <ImageI18N src={imgSrc} h={imgH} w={imgW} cls="header-image" alt={imgAlt} />
                            )}
                        </div>
                    </div>
                </section>
            ) : (
                <section className="new-page-header">
                    <div className="row">
                        <div className="col">
                            <div className="headings">
                                <h1>{title}</h1>
                                {content}
                                {isDesktop && tripleRowContent && (
                                    <div className="triple-row-content">{tripleRowContent}</div>
                                )}
                            </div>
                            {isDesktop && imgSrc && (
                                <ImageI18N src={imgSrc} h={imgH} w={imgW} cls="header-image" alt={imgAlt} />
                            )}
                            {!isDesktop && (
                                <div className="content-container">
                                    {tripleRowContent && <div className="triple-row-content">{tripleRowContent}</div>}
                                    {imgSrc && (
                                        <ImageI18N src={imgSrc} h={imgH} w={imgW} cls="header-image-lg-sm" alt={imgAlt} />
                                    )}
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
}
