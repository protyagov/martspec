import * as React from "react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import _, { Locale } from "@/i18n/locale";
import { getAppId } from "@/service/AppleService";
import { IArticleModel } from "@/atomic/prototype/article/interfaces";
import NavigationBar from "@/atomic/organism/navbar";
import { Footer } from "@/atomic/organism/footer";
import ScrollButton from "@/atomic/atom/scroll-button";
import CallToAction from "@/atomic/organism/call-to-action-new";
import { Breadcrumb } from "@/atomic/organism/breadcrumb";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";

export default function AcaiPowder() {
    const [articleData, setArticleData] = useState<IArticleModel | null>(null);
    const items = useBreadcrumbs();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/data/article/vitamin/acai-powder/acai-powder-${Locale.language}.json`);
                if (!response.ok) throw new Error("Failed to load article");
                const vitaminData: IArticleModel = await response.json();
                setArticleData(vitaminData);
            } catch (error) {
                console.error("Error", error);
            }
        };
        fetchData();
    }, []);

    const appId = getAppId();

    return (
        <div>
            <NavigationBar />

            <div className="article__container">
                <div className="row">
                    <Breadcrumb items={items} />
                </div>
            </div>

            <div className="article__container">
                <h1 className="article-title">{articleData?.HEADER.TITLE}</h1>
                
                {articleData?.IMG_SRC && (
                    <img
                        className="img-fluid article__image"
                        src={articleData?.IMG_SRC ?? ""}
                        alt={articleData?.IMG_ALT}
                        width={1300}
                        height={420}
                    />
                )}
                
                {articleData?.BODY.map((item, index) => {
                    const hasBg = !!item.BG_COLOR;
                    const markerColor = item.ACCENT_COLOR;
                    const hasRightColumn = !!item.RIGHT_COLUMN;
                    
                    return (
                        <section key={index} className="article-content">
                            <div
                                style={{
                                    backgroundColor: item.BG_COLOR ?? "transparent",
                                    ["--marker-color" as any]: markerColor,
                                }}
                                className={`article-section ${hasBg ? "article-section--with-bg" : ""}${hasRightColumn ? "article-section--two-column" : ""}`}
                            >
                                <div className="article-section__inner">
                                    <div className="article-section__left">
                                        <div className="article__section-title">
                                            <ReactMarkdown>{item.TITLE}</ReactMarkdown>
                                        </div>
                                        
                                        {item.IMG_SRC && (
                                            <img
                                                className="img-fluid"
                                                src={item.IMG_SRC}
                                                alt={item.IMG_ALT}
                                                width={1300}
                                                height={700}
                                            />
                                        )}
                                        
                                        <ReactMarkdown
                                            components={{
                                                blockquote: ({ node, ...props }) => (
                                                    <blockquote
                                                        {...props}
                                                        style={{
                                                            borderLeft: `6px solid ${item.ACCENT_COLOR ?? "#ccc"}`,
                                                        }}
                                                        className="quotes"
                                                    />
                                                ),
                                            }}
                                        >
                                            {item.CONTENT}
                                        </ReactMarkdown>
                                    </div>
                                    
                                    {hasRightColumn && item.RIGHT_COLUMN && (
                                        <aside className="article-section__right">
                                            {item.RIGHT_COLUMN.CONTENT && (
                                                <ReactMarkdown>
                                                    {item.RIGHT_COLUMN.CONTENT}
                                                </ReactMarkdown>
                                            )}
                                            {item.RIGHT_COLUMN.IMG_SRC && (
                                                <img
                                                    className="img-fluid"
                                                    src={item.RIGHT_COLUMN.IMG_SRC}
                                                    alt={item.RIGHT_COLUMN.IMG_ALT || ""}
                                                    width={400}
                                                    height={400}
                                                />
                                            )}
                                        </aside>
                                    )}
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>

            <section className="article__container article__text">
                <CallToAction
                    title={articleData?.CALL_TO_ACTION.TITLE ?? ""}
                    subtitle={articleData?.CALL_TO_ACTION.SUBTITLE}
                    appId={appId}
                    appDownloadTitle={_("VITAMIN.DWN")}
                    imgSrc={articleData?.CALL_TO_ACTION.IMG_URL || "/img/page/vitamin/call-to-action/call-to-action-en.webp"}
                    imgAlt={articleData?.CALL_TO_ACTION.ALT}
                />
            </section>

            <Footer />
            <ScrollButton />
        </div>
    );
}