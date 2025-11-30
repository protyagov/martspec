import * as React from "react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import _, { Locale } from "@/i18n/locale";
import { getAppId } from "@/service/AppleService";
import { IArticleModel } from "./interfaces";
import NavigationBar from "@/atomic/organism/navbar";
import { Footer } from "@/atomic/organism/footer";
import ScrollButton from "@/atomic/atom/scroll-button";
import Header from "@/atomic/organism/header";
import { Breadcrumb } from "@/atomic/organism/breadcrumb";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";

const ArticleVitamin = ({ vitamin }: { vitamin: string }) => {
    const [articleData, setArticleData] = useState<IArticleModel | null>(null);
    const items = useBreadcrumbs();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/data/article/vitamin/${vitamin}/${vitamin}-${Locale.language}.json`);
                if (!response.ok) throw new Error("Failed to load article");
                const emotionData: IArticleModel = await response.json();
                setArticleData(emotionData);
            } catch (error) {
                console.error("Error", error);
            }
    };
        fetchData();
    }, [vitamin]);


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
                <h1 className="article-title">{articleData?.TITLE}</h1>
                {articleData?.IMG_URL && (
                    <img
                        className="img-fluid article__image"
                        src={articleData?.IMG_URL ?? ""}
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
                                    {hasRightColumn && (
                                        <aside className="article-section__right">
                                            {item.RIGHT_COLUMN?.CONTENT && (
                                                <ReactMarkdown>
                                                    {item.RIGHT_COLUMN.CONTENT}
                                                </ReactMarkdown>
                                            )}
                                            {item.RIGHT_COLUMN?.IMG_SRC && (
                                                <img
                                                    className="img-fluid"
                                                    src={item.RIGHT_COLUMN.IMG_SRC}
                                                    alt={item.RIGHT_COLUMN.IMG_ALT}
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



            <Footer />
            <ScrollButton />
        </div>
    );
};

export default ArticleVitamin;