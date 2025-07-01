import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import CallToAction from "@/atomic/organism/call-to-action-new";
import ImageI18N from "@/atomic/atom/img-i18n";
import Review from "@/atomic/prototype/review";
import { getAppId } from "@/service/AppleService";
import ScrollButton from "../atom/scroll-button";
import Header from "@/atomic/organism/header";

export default function BodySize() {
    const appId = getAppId();

    const lang = Locale.language;

    const imgSrcMap: Record<string, string> = {
        en: "/img/page/body-size/img-cta-en.webp",
        ru: "/img/page/body-size/img-cta-ru.webp",
        fr: "/img/page/body-size/img-cta-fr.webp",
        de: "/img/page/body-size/img-cta-de.webp",
        es: "/img/page/body-size/img-cta-es.webp",
        pt: "/img/page/body-size/img-cta-pt.webp",
        uk: "/img/page/body-size/img-cta-uk.webp",
        ja: "/img/page/body-size/img-cta-ja.webp",
        hi: "/img/page/body-size/img-cta-hi.webp",
        ar: "/img/page/body-size/img-cta-ar.webp",
        zh: "/img/page/body-size/img-cta-zh.webp",
    };

    const fallbackImg = "/img/page/body-size/img-cta-en.webp";
    const imageSrc = imgSrcMap[lang] || fallbackImg;

    return (
        <>
            <NavigationBar />

            <div className="ms-base-page ms-base-new">
                <Header
                    title={_("SIZE.HEAD")}
                    appId={appId}
                    appDownloadTitle={_("SIZE.DWN")}
                    imgSrc="/img/page/body-size/img-header-en.png"
                    imgAlt={_("SIZE.IMG")}
                    imgH={305}
                    imgW={450}
                >
                    <div className="bodysize">
                        <ul className="header-content-list">
                            <li>{_("SIZE.ABOUT_1")}</li>
                            <li>{_("SIZE.ABOUT_2")}</li>
                            <li>{_("SIZE.ABOUT_3")}</li>
                        </ul>
                    </div>
                </Header>

                {/* Body compostion */}
                <section className="row">
                    <h4>{_("SIZE.HEAD1")}</h4>
                    <p className="mt-3">{_("SIZE.DESC1")}</p>
                </section>

                <ImageI18N
                    src="/img/page/body-size/size-middle-en.webp"
                    w={512}
                    h={512}
                    cls="mx-auto img-fluid"
                    alt={_("SIZE.IMG")}
                />

                {/* Chest and Bust */}
                <section className="row">
                    <h4>{_("SIZE.HEAD2")}</h4>
                    <p className="mt-3">{_("SIZE.DESC2")}</p>
                </section>

                {/* Waist Circumferance */}
                <section className="row">
                    <h4>{_("SIZE.HEAD3")}</h4>
                    <p className="mt-3">
                        <a
                            href="https://www.heart.org/en/news/2019/03/19/waist-size-predicts-heart-attacks-better-than-bmi-especially-in-women"
                            target="_blank"
                        >
                            {_("WAIST.LINK2")}
                        </a>
                        {_("WAIST.DESC2")}
                    </p>
                </section>

                {/* Hips Width */}
                <section className="row">
                    <h4>{_("SIZE.HEAD4")}</h4>
                    <p className="mt-3">{_("SIZE.DESC4")}</p>
                </section>

                <section className="row">
                    <h4>{_("WAIST.HEAD1")}</h4>
                    <p className="mt-3">
                        {_("WAIST.DESC1")}
                        <a href="https://www.nhlbi.nih.gov/health/educational/lose_wt/risk.htm" target="_blank">
                            <br />
                            <small>
                                <i>{_("WAIST.LINK1")}</i>
                            </small>
                        </a>
                    </p>
                </section>

                {/* Body Shape */}
                <section className="row">
                    <h4>{_("SIZE.HEAD5")}</h4>
                    <p className="mt-3">{_("SIZE.DESC5")}</p>
                </section>

                <Review
                    appId={appId}
                    codes={{
                        countryCode: Locale.countryCode,
                        languageCode: Locale.language,
                    }}
                    text={{
                        head: _("REVIEW.HEAD"),
                        description: _("REVIEW.DESCRIPTION"),
                        link: _("REVIEW.LINK_ALL_REVIEWS"),
                        fillerCard: {
                            head: [
                                _("REVIEW.FILLER_CARD.HEAD1"),
                                _("REVIEW.FILLER_CARD.HEAD2"),
                                _("REVIEW.FILLER_CARD.HEAD3"),
                            ],
                            link: _("REVIEW.FILLER_CARD.LINK"),
                        },
                    }}
                />
            </div>

            <div className="pb-5 text-center">
                <CallToAction
                    title={_("SIZE.CALL_TO_ACTION.HEAD")}
                    subtitle={_("SIZE.CALL_TO_ACTION.DESC")}
                    appId={appId}
                    appDownloadTitle={_("SIZE.DWN")}
                    imgSrc={imageSrc}
                    imgAlt={_("SIZE.IMG")}
                />
                {/* <img src="/img/size_bottom.512.webp" className="img-fluid mb-3 px-4" width={512} height={512} alt={_("SIZE.IMG")} /> */}
            </div>
            <Footer />
            <ScrollButton />
        </>
    );
}
