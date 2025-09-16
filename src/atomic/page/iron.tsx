import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { getAppId } from "@/service/AppleService";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import ScrollButton from "@/atomic/atom/scroll-button";
import Header from "@/atomic/organism/header";
import CardTitleTextImage from "@/atomic/molecule/card-title-text-image";
import CardTitleText from "@/atomic/molecule/card-title-text";
import CardImage from "@/atomic/molecule/card-image";
import ImageI18N from "@/atomic/atom/img-i18n";
import CardTitleTextButton from "@/atomic/molecule/card-title-text-button";
import TitleTextCard from "@/atomic/molecule/title-text-card";
import { IconTitleText } from "@/atomic/molecule/icon-title-text-elem";
import IconTitleTextList from "@/atomic/organism/icon-title-text-list";
import CallToAction from "@/atomic/organism/call-to-action-new";
import Review from "@/atomic/prototype/review";

export default function Iron() {
    const appId = getAppId();

    const iconTitleTextListItems: Array<IconTitleText> = [
        {
            icon: {
                src: "/img/icon_iron_1.png",
                alt: _("IRON.IMG1_ALT"),
            },
            title: _("IRON.LIST2.LI2_1_TITLE"),
            subtitle: _("IRON.LIST2.LI2_1_TEXT"),
        },
        {
            icon: {
                src: "/img/icon_iron_2.png",
                alt: _("IRON.IMG2_ALT"),
            },
            title: _("IRON.LIST2.LI2_2_TITLE"),
            subtitle: _("IRON.LIST2.LI2_2_TEXT"),
        },
        {
            icon: {
                src: "/img/icon_iron_3.png",
                alt: _("IRON.IMG3_ALT"),
            },
            title: _("IRON.LIST2.LI2_3_TITLE"),
            subtitle: _("IRON.LIST2.LI2_3_TEXT"),
        },
        {
            icon: {
                src: "/img/icon_iron_4.png",
                alt: _("IRON.IMG4_ALT"),
            },
            title: _("IRON.LIST2.LI2_4_TITLE"),
            subtitle: _("IRON.LIST2.LI2_4_TEXT"),
        },
    ];

    return (
        <>
            <NavigationBar />

            <div className="ms-base-page">
                <Header
                    title={_("IRON.HEAD")}
                    appId={appId}
                    appDownloadTitle={_("SIZE.DWN")}
                    imgSrc="/img/img-fe-header-en.webp"
                    imgAlt={_("SIZE.IMG")}
                    imgH={405}
                    imgW={550}
                >
                    <div className="iron">
                        <ul className="header-content-list">
                            <li>{_("IRON.ABOUT_1")}</li>
                            <li>{_("IRON.ABOUT_2")}</li>
                            <li>{_("IRON.ABOUT_3")}</li>
                        </ul>
                    </div>
                </Header>

                <section className="section">
                    <div className="row row-cols-xl-3 row-cols-md-3 row-cols-1 g-4">
                        <div className="col">
                            <CardTitleTextImage
                                title={_("IRON.LIST1.LI1_HEAD")}
                                text={_("IRON.LIST1.LI1_TEXT")}
                                imgSrc="/img/mid-pic-illustration.png"
                                imgH={239}
                                imgW={344}
                                imgAlt={_("IRON.LI1_IMG_ALT")}
                                imgPosition="default"
                            />
                        </div>
                        <div className="col p-0">
                            <div className="row row-cols-1 h-100 p-0">
                                <div className="col py-0">
                                    <CardTitleText
                                        title={_("IRON.LIST1.LI2_HEAD")}
                                        text={_("IRON.LIST1.LI2_TEXT")}
                                        bgColor="#ECE9FF"
                                    />
                                </div>
                                <div className="col py-0 mt-4">
                                    <CardTitleText
                                        title={_("IRON.LIST1.LI3_HEAD")}
                                        text={_("IRON.LIST1.LI3_TEXT")}
                                        bgColor="#FFDED5"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-4">
                            <CardImage
                                imgSrc="/img/mid-pic-girl-and-apple.png"
                                imgH={434}
                                imgW={400}
                                imgAlt={_("IRON.LI2_IMG_ALT")}
                                bgColor="#F4F7FA"
                                alignItems="center"
                                justifyContent="center"
                            />
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="row d-flex align-items-center justify-content-between iron__section">
                        <div className="col-12 col-xxl-6 order-2 order-xxl-1">
                            <ImageI18N
                                src="/img/img-whywaist-en.webp"
                                w={620}
                                h={390}
                                alt={_("IRON.IMG_ALT")}
                                cls="ms-base-image mt-mob-xs"
                            />
                        </div>
                        <div className="col-12 offset-xxl-1 col-xxl-5 order-1 order-xxl-2">
                            <CardTitleTextButton
                                title={_("IRON.HEAD2")}
                                textContent={[_("IRON.DESC2_1"), _("IRON.DESC2_2"), _("IRON.DESC2_3"), _("IRON.DESC2_4")]}
                                buttonText={_("IRON.BTN_MORE")}
                                buttonLink={Locale.i18nLink(`coming-soon`)}
                                buttonColor="#FE460A"
                            />
                        </div>
                    </div>
                </section>

                <section className="section iron__advantages">
                    <div className="row">
                        <div className="col-12 mb-2">
                            <h2>{_("IRON.HEAD1")}</h2>
                        </div>
                        <div className="col-12 row">
                            <IconTitleTextList items={iconTitleTextListItems} />
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

                <section className="iron__call-to-action">
                    <CallToAction
                        title="IRON.ABOUT_4"
                        subtitle="IRON.ABOUT_5"
                        appId={1}
                        appDownloadTitle="Download"
                        imgSrc="/img/img-fe-footer-en.webp"
                        imgAlt={_("ABOUT.IMG")}
                    />
                </section>

            </div>

            <Footer />
            <ScrollButton />
        </>
    );
}