import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import Header from "@/atomic/organism/header";
import ImageI18N from "@/atomic/atom/img-i18n";
import IconTitleTextList from "@/atomic/organism/icon-title-text-list";
import { IconTitleText } from "@/atomic/molecule/icon-title-text-elem";
import CallToAction from "@/atomic/organism/call-to-action-new";
import Review from "@/atomic/prototype/review";
import { getAppId } from "@/service/AppleService";
import CardImage from "@/atomic/molecule/card-image";
import CardTitleTextImage from "@/atomic/molecule/card-title-text-image";
import CardTitleText from "@/atomic/molecule/card-title-text";
import ScrollButton from "@/atomic/atom/scroll-button";

export default function Bodymass() {
    const appId = getAppId();
    const advantages: Array<IconTitleText> = [
        {
            icon: {
                src: "/img/atom/icons/icon-defense.svg",
                alt: _("MASS.ALT5_1"),
            },
            title: _("MASS.LIST3.LI1_HEAD"),
            subtitle: _("MASS.LIST3.LI1_TEXT"),
        },
        {
            icon: {
                src: "/img/atom/icons/icon-sync.svg",
                alt: _("MASS.ALT5_2"),
            },
            title: _("MASS.LIST3.LI2_HEAD"),
            subtitle: _("MASS.LIST3.LI2_TEXT"),
        },
        {
            icon: {
                src: "/img/atom/icons/icon-no-auth.svg",
                alt: _("MASS.ALT5_3"),
            },
            title: _("MASS.LIST3.LI3_HEAD"),
            subtitle: _("MASS.LIST3.LI3_TEXT"),
        },
        {
            icon: {
                src: "/img/atom/icons/icon-no-ads.svg",
                alt: _("MASS.ALT5_4"),
            },
            title: _("MASS.LIST3.LI4_HEAD"),
            subtitle: _("MASS.LIST3.LI4_TEXT"),
        },
        {
            icon: {
                src: "/img/atom/icons/icon-apple-health.svg",
                alt: _("MASS.ALT5_5"),
            },
            title: _("MASS.LIST3.LI5_HEAD"),
            subtitle: _("MASS.LIST3.LI5_TEXT"),
        },
        {
            icon: {
                src: "/img/atom/icons/icon-watch-widget.svg",
                alt: _("MASS.ALT5_6"),
            },
            title: _("MASS.LIST3.LI6_HEAD"),
            subtitle: _("MASS.LIST3.LI6_TEXT"),
        },
    ];
    return (
        <>
            <NavigationBar />

            <div className="ms-base-page ms-s-offset mass">
                <Header
                    title={_("MASS.HEAD")}
                    appId={appId}
                    appDownloadTitle={_("MASS.DWN")}
                    imgSrc="/img/page/body-mass/mass-header-en.webp"
                    imgAlt={_("MASS.IMG_HEAD_ALT")}
                    imgH={314}
                    imgW={425}
                >
                    <div className="bodymass">
                        <ul className="header-content-list">
                            <li>{_("MASS.ABOUT_1")}</li>
                            <li>{_("MASS.ABOUT_2")}</li>
                        </ul>
                    </div>
                </Header>
                {/* <div className="row row-cols-xl-3 row-cols-md-3 row-cols-1 g-4">
                        <div className="col"> */}
                <section className="section ms-base-page">
                    <div className="row row-cols-xl-3 row-cols-1 g-4">
                        <div className="col col-md-4">
                            <CardTitleTextImage
                                title={_("MASS.LIST1.LI1_HEAD")}
                                text={_("MASS.LIST1.LI1_TEXT")}
                                imgSrc="/img/page/body-mass/mid-pic-illustration.png"
                                imgH={405}
                                imgW={550}
                                imgAlt={_("MASS.LI1_IMG_ALT")}
                                imgPosition="default"
                            />
                        </div>
                        <div className="col col-md-4 p-0">
                            <div className="row row-cols-1 h-100 p-0">
                                <div className="col py-0">
                                    <CardTitleText
                                        title={_("MASS.LIST1.LI2_HEAD")}
                                        text={_("MASS.LIST1.LI2_TEXT")}
                                        bgColor="#FFE0DF"
                                    />
                                </div>
                                <div className="col py-0 mt-4">
                                    <CardTitleText
                                        title={_("MASS.LIST1.LI3_HEAD")}
                                        text={_("MASS.LIST1.LI3_TEXT")}
                                        bgColor="#FFEECB"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-4">
                            <CardImage
                                imgSrc="/img/page/body-mass/mid-pic-girl-and-apple.png"
                                imgH={720}
                                imgW={664}
                                imgAlt={_("MASS.IMG_LIST_ALT")}
                                bgColor="#F4F7FA"
                                alignItems="end"
                                justifyContent="end"
                            />
                        </div>
                    </div>
                </section>

                <section className="ms-base-page section">
                    <div className="row d-flex align-items-center justify-content-between g-4">
                        <div className="col-12 col-xxl-6" style={{ display: "flex", justifyContent: "center" }}>
                            <ImageI18N
                                src="/img/page/body-mass/why-mass-en.webp"
                                w={620}
                                h={390}
                                alt={_("MASS.IMG2_ALT")}
                                cls="ms-base-image mt-mob-xs"
                            />
                        </div>
                        <div className="col-12 col-xxl-6">
                            <CardTitleText
                                title={_("MASS.HEAD2")}
                                text={_("MASS.DESC2")}
                                titleFontSize="2.5rem"
                                textFontSize="1.5rem"
                                titleFontFam={"os5"}
                                textFontFam={"os3"}
                            />
                        </div>
                    </div>
                </section>

                <section className="ms-base-page section">
                    <div className="row">
                        <div className="col-12 mb-2">
                            <h2>{_("MASS.HEAD3")}</h2>
                        </div>
                        <div className="col-12 row">
                            <IconTitleTextList items={advantages} />
                        </div>
                    </div>
                </section>

                <section className="ms-base-page">
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
                            readMoreLink: _("REVIEW.READ_MORE_LINK"),
                            fillerCard: {
                                head: [
                                    _("REVIEW.FILLER_CARD.HEAD1"),
                                    _("REVIEW.FILLER_CARD.HEAD2"),
                                    _("REVIEW.FILLER_CARD.HEAD3"),
                                ],
                                link: _("REVIEW.FILLER_CARD.LINK"),
                            },
                        }}
                        themeColor="#F0606C"
                        hasUnderlineHover={false}
                    />
                </section>

                <section className="ms-base-page">
                    <CallToAction
                        title="MASS.HEAD4"
                        subtitle="MASS.DESC4"
                        appId={appId}
                        appDownloadTitle={_("MASS.DWN")}
                        imgSrc="/img/page/body-mass/Img-Banner-en.webp"
                        imgAlt={_("MASS.IMG_CTA_ALT2")}
                    />
                </section>
            </div>

            <Footer />
            <ScrollButton color="#FEB215" />
        </>
    );
}
