import React, { useEffect, useState } from "react";
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
    const { title, imgSrc, imgH, imgW, imgAlt, appId, appDownloadTitle, content, whichContent = "apple-button", tripleRowContent } = props;

    const [isDesktop, setIsDesktop] = useState<boolean>(window.innerWidth >= 992);

    useEffect(() => {
        const handleResize = () => setIsDesktop(window.innerWidth >= 992);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="new-page-header">
            <div className="row">
                <div className="col">
                    <div className="headings">
                        <h1>{title}</h1>
                        {content}
                        {whichContent === "row-items" && isDesktop && (
                            <div className="triple-row-content">
                                {tripleRowContent}
                            </div>
                        )}
                        {whichContent === "apple-button" && appId && (
                            <ButtonApple appId={appId} appDownloadTitle={appDownloadTitle} />
                        )}
                    </div>
                    {imgSrc && (
                        <ImageI18N 
                            src={imgSrc} 
                            h={imgH} 
                            w={imgW} 
                            cls="header-image"
                            alt={imgAlt} 
                        />
                    )}
                </div>
            </div>
            {!isDesktop && whichContent === "row-items" && tripleRowContent && (
                <div className="triple-row-content mobile">
                    {tripleRowContent}
                </div>
            )}
        </section>
    );
}
