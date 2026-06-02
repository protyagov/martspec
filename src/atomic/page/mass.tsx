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
import { Breadcrumb } from "@/atomic/organism/breadcrumb";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs"
import CardTitleTextImageCustom from "@/atomic/molecule/card-title-text-image-custom";

export default function Bodymass() {
    const appId = getAppId();
    const items = useBreadcrumbs();
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

            <div className="ms-base-page">
                <div className="row">
                    <Breadcrumb items={items} />
                </div>
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

                <section>
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

                <section>
                    <div className="row d-flex align-items-center justify-content-between g-4">
                        <div className="col-12 col-xxl-6">
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

                <section>
                    <div className="row mb-4 mt-5">
                        <h2 className="adaptive-padding bodysize__h3">{_("MASS.HEAD5")} </h2>
                    </div>
                    <div className="row mb-5">
                        <p className="adaptive-padding fs-4">{_("MASS.DESC5")} </p>
                    </div>
                    <div className="row g-4 mb-4">
                        <div className="col-12 col-lg-6">
                            <CardTitleTextImageCustom
                                title={_("MASS.LIST4.LI1_HEAD")}
                                text={_("MASS.LIST4.LI1_TEXT")}
                                bgColor="#FFF1D2"
                                shadow={false}
                                cardHeight="10rem"
                                responsive={true}
                            />
                        </div>
                        <div className="col-12 col-lg-6 custom-card-padding">
                            <CardTitleTextImageCustom
                                title={_("MASS.LIST4.LI2_HEAD")}
                                text={_("MASS.LIST4.LI2_TEXT")}
                                bgColor="#FFFFFF"
                                imgSrc="/img/page/body-mass/avocado.svg"
                                imgPosition="right-bottom"
                                shadow={true}
                                cardHeight="10rem"
                                imgH="12rem"
                                responsive={true}
                            />
                        </div>
                    </div>

                    <div className="row g-4 mb-4 bodymass">
                        <div className="col-12 col-lg-4 custom-card-padding-b">
                            <CardTitleTextImageCustom
                                title={_("MASS.LIST4.LI3_HEAD")}
                                text={_("MASS.LIST4.LI3_TEXT")}
                                bgColor="#FFFFFF"
                                imgSrc="/img/page/body-mass/gloves.svg"
                                imgPosition="right-bottom"
                                shadow={true}
                                cardHeight="20rem"
                                imgH="12rem"
                                imgMobileH="15rem"
                                mobileBreakpoint={1380}
                                responsive={true}
                            />
                        </div>
                        <div className="col-12 col-lg-4 order-2 bodymass">
                            <div className="d-flex flex-column h-100 gap-4 custom-card-padding-b">
                                <CardTitleTextImageCustom
                                    title={_("MASS.LIST4.LI4_HEAD")}
                                    text={_("MASS.LIST4.LI4_TEXT")}
                                    bgColor="#FFFFFF"
                                    imgSrc="/img/page/body-mass/watch.svg"
                                    imgPosition="right-bottom"
                                    shadow={true}
                                    cardHeight="20rem"
                                    imgH="12rem"
                                    responsive={true}
                                />
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 order-4">
                            <div className="d-flex flex-column h-100 gap-4">
                                <CardTitleTextImageCustom
                                    title={_("MASS.LIST4.LI5_HEAD")}
                                    text={_("MASS.LIST4.LI5_TEXT")}
                                    bgColor="#F4F5F8"
                                    shadow={false}
                                    cardHeight="20rem"
                                    cardMobileHeight="16rem"
                                    responsive={true}
                                    mobileBreakpoint={991}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-12 mb-2">
                            <h2>{_("MASS.HEAD3")}</h2>
                        </div>
                        <div className="col-12">
                            <IconTitleTextList items={advantages} />
                        </div>
                    </div>
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

                <section>
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
