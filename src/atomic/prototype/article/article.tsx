import * as React from "react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import _, { Locale } from "@/i18n/locale";
import { getAppId } from "@/service/AppleService";
import appIds from "@/data/app-ids.json";
import { IArticleModel } from "./interfaces";
import NavigationBar from "@/atomic/organism/navbar";
import { Footer } from "@/atomic/organism/footer";
import ScrollButton from "@/atomic/atom/scroll-button";
import CallToAction from "@/atomic/organism/call-to-action-new";
import ButtonApple from "@/atomic/atom/button-apple";
import { Breadcrumb } from "@/atomic/organism/breadcrumb";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";

interface ArticleProps {
  articleType: "emotion" | "vitamin"  | "bodysize";
  articleId: string;
}

const CALL_TO_ACTION_IMGS: Record<ArticleProps['articleType'], string> = {
  emotion: "/img/page/article/call-to-action/call-to-action-en.webp",
  vitamin: "/img/org/call-to-action/vitamin/Img-CallToAction-en.webp",
  bodysize: "/img/page/body-size/img-cta-en.webp",
};

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
                    aspectRatio: "800 / 400",
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
            const hasLeftColumn = !!item.LEFT_COLUMN;
            return (
              <section key={index} className="article-content">
                <div className={hasLeftColumn ? "article-section--audio-layout" : ""}>
                {hasLeftColumn && (
                  <aside
                      className="article-section__left-audio"
                      style={{ backgroundImage: `url(${item.LEFT_COLUMN?.BG_IMAGE})` }}
                  >
                      {item.LEFT_COLUMN?.ICON && (
                          <img src={item.LEFT_COLUMN.ICON} alt={item.LEFT_COLUMN.IMG_ALT ?? ""} />
                      )}
                      {item.LEFT_COLUMN?.CONTENT && (
                          <ReactMarkdown>{item.LEFT_COLUMN.CONTENT}</ReactMarkdown>
                      )}
                      {item.LEFT_COLUMN?.AUDIO_URL && (
                          <audio controls src={item.LEFT_COLUMN.AUDIO_URL}>
                              Your browser does not support the audio element.
                          </audio>
                      )}
                  </aside>
                )}
                  <div
                    style={{
                      backgroundColor: item.BG_COLOR ?? "transparent",
                      ["--marker-color" as any]: markerColor,
                    }}
                  className={`article-section ${
                        hasBg ? "article-section--with-bg" : ""
                    }${hasRightColumn ? " article-section--two-column" : ""}`}
                  >
                    <div className="article-section__inner">
                      <div className="article-section__left">
                        <div className="article__section-title">
                          <ReactMarkdown>{item.TITLE}</ReactMarkdown>
                        </div>
                        {item.IMG_SRC && (
                          <img
                            className={`img-fluid ${item.IS_SMALL ? 'article__image--small' : 'article__image--content'}`}
                            src={item.IMG_SRC}
                            alt={item.IMG_ALT}
                            width={item.IS_SMALL ? 1300 : 1170} 
                            height={item.IS_SMALL ? 420 : 700}
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
                              className={`img-fluid article-section__right-img ${item.RIGHT_COLUMN.IS_HIGH ? 'article-section__right-img--high' : ''}`}
                              src={item.RIGHT_COLUMN.IMG_SRC}
                              alt={item.RIGHT_COLUMN.IMG_ALT}
                              width={400}
                              height={item.RIGHT_COLUMN.IS_HIGH ? 600 : 400}
                            />
                          )}
                        </aside>
                      )}
                    </div>
                  </div>
                </div>
                {item.MEDIA_PANEL && (
                  <div
                    className={`article-media-panel article-media-panel--img-${item.MEDIA_PANEL.IMG_POSITION}${
                      item.MEDIA_PANEL.BG_COLOR ? " article-media-panel--with-bg" : ""
                    }${item.MEDIA_PANEL.IMG_FIRST_ON_MOBILE ? " article-media-panel--img-first" : ""}${
                      item.MEDIA_PANEL.DECOR_SRC ? " article-media-panel--decor" : ""
                    }${item.MEDIA_PANEL.WIDE_CONTENT ? " article-media-panel--wide-content" : ""}`}
                    style={{
                      backgroundColor: item.MEDIA_PANEL.BG_COLOR ?? "transparent",
                      ["--marker-color" as any]: markerColor,
                    }}
                  >
                    {item.MEDIA_PANEL.TITLE && (
                      <div className="article__section-title article-media-panel__title">
                        <ReactMarkdown>{item.MEDIA_PANEL.TITLE}</ReactMarkdown>
                      </div>
                    )}
                    <div
                      className={`article-media-panel__content${
                        item.MEDIA_PANEL.CARD_COLOR ? " article-media-panel__content--card" : ""
                      }${item.MEDIA_PANEL.LIST_STYLE === "check" ? " article-list--check" : ""}`}
                      style={{ backgroundColor: item.MEDIA_PANEL.CARD_COLOR ?? "transparent" }}
                    >
                      <ReactMarkdown>{item.MEDIA_PANEL.CONTENT}</ReactMarkdown>
                    </div>
                    <div className="article-media-panel__media d-flex align-items-center justify-content-center">
                      {item.MEDIA_PANEL.DECOR_SRC && (
                        <div className="article-media-panel__decor position-absolute z-n1 pe-none" aria-hidden="true">
                          <img className="d-block w-100 h-100" src={item.MEDIA_PANEL.DECOR_SRC} alt="" />
                        </div>
                      )}
                      <img
                        className="img-fluid w-100"
                        src={item.MEDIA_PANEL.IMG_SRC}
                        alt={item.MEDIA_PANEL.IMG_ALT}
                      />
                    </div>
                  </div>
                )}
                {item.COMPARISON_CARDS && (
                  <div
                    className={`article-comparison${
                      item.COMPARISON_CARDS.some((card) => card.IMG_SRC) ? " article-comparison--with-img" : ""
                    }`}
                  >
                    {item.COMPARISON_CARDS.map((card, index) => (
                      <div
                        key={index}
                        className={`article-comparison__card${
                          card.LIST_STYLE === "check" ? " article-list--check" : ""
                        }${card.IMG_SRC ? " article-comparison__card--with-img d-flex flex-column overflow-hidden" : ""}`}
                        style={{
                          backgroundColor: card.BG_COLOR ?? "transparent",
                        }}
                      >
                        <ReactMarkdown>{card.TITLE}</ReactMarkdown>
                        <ReactMarkdown>{card.CONTENT}</ReactMarkdown>
                        {(card.APP || card.IMG_SRC) && (
                          <div className="article-comparison__footer position-relative d-flex flex-column align-items-start">
                            {card.APP && (
                              <ButtonApple appId={appIds[card.APP]} appDownloadTitle={_("ANXIETY.DWN")} />
                            )}
                            {card.IMG_SRC && (
                              <div className="position-relative w-100">
                                {card.BG_IMAGE && (
                                  <>
                                    <img className="article-comparison__bg-mobile w-100" src={card.BG_IMAGE_MOBILE ?? card.BG_IMAGE} alt="" />
                                    <img className="article-comparison__bg-desktop w-100" src={card.BG_IMAGE} alt="" />
                                  </>
                                )}
                                <img
                                  className="article-comparison__phone position-absolute"
                                  src={card.IMG_SRC}
                                  alt={card.IMG_ALT ?? ""}
                                />
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      )}

      {(isLoading || articleData?.CALL_TO_ACTION) && (
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
              title={articleData?.CALL_TO_ACTION?.TITLE ?? ""}
              subtitle={articleData?.CALL_TO_ACTION?.SUBTITLE}
              appId={appId}
              appDownloadTitle={_("ANXIETY.DWN")}
              imgSrc={CALL_TO_ACTION_IMGS[articleType]}
              imgAlt={articleData?.CALL_TO_ACTION?.ALT}
            />
          )}
        </section>
      )}

      <Footer />
      <ScrollButton />
    </div>
  );
};

export default Article;