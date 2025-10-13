import * as React from "react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import _, { Locale } from "@/i18n/locale";
import { getAppId } from "@/service/AppleService";
import { IArticleModel } from "./interfaces";
import NavigationBar from "@/atomic/organism/navbar";
import { Footer } from "@/atomic/organism/footer";
import ScrollButton from "@/atomic/atom/scroll-button";
import CallToAction from "@/atomic/organism/call-to-action-new";
import Header from "@/atomic/organism/header";

const Article = ({ emotion }: { emotion: string }) => {
    const [articleData, setArticleData] = useState<IArticleModel | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/data/article/emotion/${emotion}/${emotion}-${Locale.language}.json`);
                if (!response.ok) throw new Error("Failed to load article");
                const emotionData: IArticleModel = await response.json();
                setArticleData(emotionData);
            } catch (error) {
                console.error("Error", error);
            }
        };
        fetchData();
    }, [emotion]);

    const appId = getAppId();

    return (
        <div>
            <NavigationBar />
            <div className="article__container">
                <Header
                    title={articleData?.HEADER.TITLE ?? ""}
                    appId={appId}
                    imgSrc={articleData?.HEADER.IMG_URL ?? ""}
                    imgAlt={articleData?.HEADER.ALT ?? ""}
                    imgH={405}
                    imgW={505}
                >
                    <div
                        className="article"
                        style={{
                            ["--marker-color" as any]: articleData?.HEADER.ACCENT_COLOR,
                        }}
                    >
                        <ul className="header-content-list article__header-list">
                            <li>{articleData?.HEADER.HEADER_BODY.LI_1}</li>
                            <li>{articleData?.HEADER.HEADER_BODY.LI_2}</li>
                            <li>{articleData?.HEADER.HEADER_BODY.LI_3}</li>
                        </ul>
                    </div>
                </Header>
            </div>

            <div className="article__container">
                <h2 className="article-title">{articleData?.TITLE}</h2>
                <img
                    className="img-fluid"
                    src={articleData?.IMG_URL ?? ""}
                    alt={articleData?.IMG_ALT}
                    width={1300}
                    height={420}
                />
                {articleData?.BODY.map((item, index) => {
                    const hasBg = !!item.BG_COLOR;
                    const markerColor = item.ACCENT_COLOR;

                    return (
                        <section key={index} className="article-content">
                            <div
                                style={{
                                    backgroundColor: item.BG_COLOR ?? "transparent",
                                    ["--marker-color" as any]: markerColor,
                                }}
                                className={`article-section ${hasBg ? "article-section--with-bg" : ""}`}
                            >
                                <ReactMarkdown>{item.TITLE}</ReactMarkdown>
                                {item.IMG_SRC ? (
                                    <img
                                        className="img-fluid"
                                        src={item.IMG_SRC}
                                        alt={item.IMG_ALT}
                                        width={1300}
                                        height={700}
                                    />
                                ) : null}
                                <div>
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
                    appDownloadTitle={_("ANXIETY.DWN")}
                    imgSrc="/img/page/article/call-to-action/call-to-action-en.webp"
                    imgAlt={articleData?.CALL_TO_ACTION.ALT}
                />
            </section>
            <Footer />
            <ScrollButton />
        </div>
    );
};

export default Article;
