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
import { Breadcrumb } from "@/atomic/organism/breadcrumb";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";

interface ArticleProps {
  articleType: "emotion" | "vitamin";
  articleId: string;
}

const ArticleSkeleton = () => (
  <div className="article__container">
    {/* Hero title placeholder */}
    <div
      className="article-title skeleton-title"
      style={{ height: "60px", width: "80%", borderRadius: "8px" }}
    />

    <div
      className="img-fluid article__image skeleton-image"
      style={{
        aspectRatio: "1300 / 420",
        backgroundColor: "#e5e7eb",
        animation: "pulse 1.5s infinite ease-in-out",
        borderRadius: "20px",
      }}
    />

    {Array.from({ length: 6 }).map((_, index) => (
      <section key={index} className="article-content">
        <div className="article-section article-section--with-bg">
          <div className="article-section__inner">
            <div className="article-section__left">
              <div
                className="article__section-title skeleton-title"
                style={{ height: "32px", width: "60%", borderRadius: "4px" }}
              />

              <div
                className="img-fluid skeleton-image"
                style={{
                  aspectRatio: "1300 / 700",
                  backgroundColor: "#e5e7eb",
                  animation: "pulse 1.5s infinite ease-in-out",
                  marginBottom: "24px",
                  borderRadius: "20px",
                }}
              />

              <div
                className="skeleton-text"
                style={{
                  height: "20px",
                  width: "100%",
                  marginBottom: "12px",
                  borderRadius: "4px",
                }}
              />
              <div
                className="skeleton-text"
                style={{
                  height: "20px",
                  width: "95%",
                  marginBottom: "12px",
                  borderRadius: "4px",
                }}
              />
              <div
                className="skeleton-text"
                style={{
                  height: "20px",
                  width: "100%",
                  marginBottom: "12px",
                  borderRadius: "4px",
                }}
              />
              <div
                className="skeleton-text"
                style={{
                  height: "20px",
                  width: "70%",
                  borderRadius: "4px",
                }}
              />
            </div>

            {index % 2 === 0 && (
              <aside className="article-section__right">
                <div
                  className="skeleton-text"
                  style={{
                    height: "140px",
                    width: "100%",
                    marginBottom: "16px",
                    borderRadius: "4px",
                  }}
                />
                <div
                  className="img-fluid skeleton-image"
                  style={{
                    aspectRatio: "400 / 400",
                    backgroundColor: "#e5e7eb",
                    animation: "pulse 1.5s infinite ease-in-out",
                    borderRadius: "20px",
                  }}
                />
              </aside>
            )}
          </div>
        </div>
      </section>
    ))}
  </div>
);

const Article = ({ articleType, articleId }: ArticleProps) => {
  const [articleData, setArticleData] = useState<IArticleModel | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const items = useBreadcrumbs();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `/data/article/${articleType}/${articleId}/${articleId}-${Locale.language}.json`
        );
        if (!response.ok) throw new Error("Failed to load article");
        const Data: IArticleModel = await response.json();
        setArticleData(Data);
      } catch (error) {
        console.error("Error", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [articleType, articleId]);

  const appId = getAppId();

  return (
    <div>
      <NavigationBar />

      <div className="article__container">
        <div className="row">
          <Breadcrumb items={items} />
        </div>
      </div>

      {isLoading ? (
        <ArticleSkeleton />
      ) : (
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
                  className={`article-section ${
                    hasBg ? "article-section--with-bg" : ""
                  }${hasRightColumn ? "article-section--two-column" : ""}`}
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
      )}

      <section className="article__container article__text">
        {isLoading ? (
          <div
            className="skeleton-cta"
            style={{
              height: "420px",
              backgroundColor: "#e5e7eb",
              animation: "pulse 1.5s infinite ease-in-out",
              borderRadius: "12px",
            }}
          />
        ) : (
          <CallToAction
            title={articleData?.CALL_TO_ACTION.TITLE ?? ""}
            subtitle={articleData?.CALL_TO_ACTION.SUBTITLE}
            appId={appId}
            appDownloadTitle={_("ANXIETY.DWN")}
            imgSrc={
              articleType === "emotion"
                ? "/img/page/article/call-to-action/call-to-action-en.webp"
                : "/img/org/call-to-action/vitamin/Img-CallToAction-en.webp"
            }
            imgAlt={articleData?.CALL_TO_ACTION.ALT}
          />
        )}
      </section>

      <Footer />
      <ScrollButton />
    </div>
  );
};

export default Article;