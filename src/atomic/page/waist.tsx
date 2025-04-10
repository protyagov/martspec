import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import Header from "@/atomic/organism/header";
import { IconTitleText } from "@/atomic/molecule/icon-title-text-elem";
import CardTitleText from "@/atomic/molecule/card-title-text";
import CardTitleTextImage from "@/atomic/molecule/card-title-text-image";
import CardImage from "@/atomic/molecule/card-image";
import IconTitleTextList from "@/atomic/organism/icon-title-text-list";
import CallToAction from "@/atomic/organism/call-to-action-new";
import ButtonApple from "../atom/button-apple";
import Review from "@/atomic/prototype/review";
import { getAppId } from "@/service/AppleService";
import ScrollButton from "@/atomic/atom/scroll-button";
import CardIconTitleText from "../molecule/card-icon-title-text";

export default function WaistLine() {
    const appId = getAppId();
    const advantages: Array<IconTitleText> = [
        {
            icon: {
                src: "/img/atom/icons/icon-defense.svg",
                alt: _("MASS.ALT5_1"),
            },
            title: _("WAIST.LIST2.LI1_HEAD"),
            subtitle: _("WAIST.LIST2.LI1_TEXT"),
        },
        {
            icon: {
                src: "/img/atom/icons/icon-no-auth.svg",
                alt: _("MASS.ALT5_3"),
            },
            title: _("WAIST.LIST2.LI2_HEAD"),
            subtitle: _("WAIST.LIST2.LI2_TEXT"),
        },
        {
            icon: {
                src: "/img/atom/icons/icon-no-ads.svg",
                alt: _("MASS.ALT5_4"),
            },
            title: _("WAIST.LIST2.LI3_HEAD"),
            subtitle: _("WAIST.LIST2.LI3_TEXT"),
        },
        {
            icon: {
                src: "/img/atom/icons/icon-apple-health.svg",
                alt: _("MASS.ALT5_5"),
            },
            title: _("WAIST.LIST2.LI4_HEAD"),
            subtitle: _("WAIST.LIST2.LI4_HEAD"),
        },
    ];
    return (
        <>
            <NavigationBar />

            <div className="ms-base-page ms-base-new waist">
                <Header
                    title={_("WAIST.HEAD")}
                    appId={appId}
                    appDownloadTitle={_("WAIST.DWN")}
                    imgSrc="/img/page/waistline/waistline-header-en.webp"
                    imgAlt={_("WAIST.IMG")}
                    imgH={531}
                    imgW={722}
                    content={
                        <ul className="header-content-list">
                            <li>{_("WAIST.ABOUT_1")}</li>
                            <li>{_("WAIST.ABOUT_2")}</li>
                            <li>{_("WAIST.ABOUT_3")}</li>
                        </ul>
                    }
                />

                <section>
                    <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 g-4">
                        <div className="col no-mx-5">
                            <CardTitleTextImage
                                title={_("WAIST.LIST1.LI1_HEAD")}
                                text={_("WAIST.LIST1.LI1_TEXT")}
                                imgSrc="/img/page/waistline/middle-section-pic-apple.png"
                                imgH={239}
                                imgW={400}
                                imgAlt={_("WAIST.ALT3_1")}
                            />
                        </div>
                        <div className="col p-0">
                            <div className="row row-cols-1 h-100 p-0">
                                <div className="col py-0">
                                    <CardTitleText
                                        title={_("WAIST.LIST1.LI2_HEAD")}
                                        text={_("WAIST.LIST1.LI2_TEXT")}
                                        bgColor="#FFF3E9"
                                    />
                                </div>
                                <div className="col py-0 mt-4">
                                    <CardTitleText
                                        title={_("WAIST.LIST1.LI3_HEAD")}
                                        text={_("WAIST.LIST1.LI3_TEXT")}
                                        bgColor="#DDE9FF"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-12">
                            <CardImage
                                imgSrc="/img/page/waistline/middle-section-pic-statistics.png"
                                imgH={720}
                                imgW={664}
                                imgAlt={_("WAIST.ALT3_2")}
                                bgColor="#F4F5F8"
                            />
                        </div>
                    </div>
                </section>

                <div className="ms-base-page ms-base-new row waist call-to-action why-waist-section">
                    <CallToAction
                        title={_("WAIST.HEAD1")}
                        subtitle={_("WAIST.DESC1")}
                        textList={[
                            <>
                                <strong>{_("WAIST.LINK2")}</strong> {_("WAIST.DESC2")}
                            </>,
                            <>
                                <strong>{_("WAIST.LINK3")}</strong> {_("WAIST.DESC3")}
                            </>,
                        ]}
                        textListTitle={_("WAIST.HEAD3")}
                        imgSrc="/img/page/waistline/waist-whywaist-en.webp"
                        imgH={390}
                        imgW={620}
                        imgAlt={_("WAIST.ALT1")}
                        imgPosition="left"
                        bgColor={"#FFFFFF"}
                    />
                </div>

                <section>
                    <div className="ms-base-new row waist-info-section">
                        <h2>{_("WAIST.HEAD6")}</h2>
                        <p>{_("WAIST.DESC6")}</p>
                        <div className="info-list row g-4">
                            <div className="col-lg-4 d-flex">
                                <CardIconTitleText
                                    iconProps={{
                                        icon: {
                                            src: "/img/atom/icons/icon-patient.svg",
                                            alt: _("WAIST.ALT4_1"),
                                        },
                                        title: _("WAIST.LIST3.LI1_HEAD"),
                                    }}
                                    text={_("WAIST.LIST3.LI1_TEXT")}
                                    bgColor="#DDE9FF"
                                />
                            </div>
                            <div className="col-lg-4 d-flex">
                                <CardIconTitleText
                                    iconProps={{
                                        icon: {
                                            src: "/img/atom/icons/icon-performance.svg",
                                            alt: _("WAIST.ALT4_2"),
                                        },
                                        title: _("WAIST.LIST3.LI2_HEAD"),
                                    }}
                                    text={_("WAIST.LIST3.LI2_TEXT")}
                                />
                            </div>
                            <div className="col-lg-4 d-flex">
                                <CardIconTitleText
                                    iconProps={{
                                        icon: {
                                            src: "/img/atom/icons/icon-rehabilitation.svg",
                                            alt: _("WAIST.ALT4_3"),
                                        },
                                        title: _("WAIST.LIST3.LI3_HEAD"),
                                    }}
                                    text={_("WAIST.LIST3.LI3_TEXT")}
                                    bgColor="#DDE9FF"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row our-advantages-section">
                        <div className="col-12">
                            <h2>{_("WAIST.HEAD4")}</h2>
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

                <section>
                    <div className="row call-to-action">
                        <CallToAction
                            bgColor={"#FFFFFF"}
                            title={_("MASS.HEAD4")}
                            subtitle={_("WAIST.DESC5")}
                            button={<ButtonApple appId={appId} appDownloadTitle={_("WAIST.DWN")} />}
                            imgSrc="/img/page/waistline/waist-banner-en.webp"
                            imgAlt={_("WAIST.ALT2")}
                            imgH={585}
                            imgW={590}
                        />
                    </div>
                </section>
            </div>

            <Footer />
            <ScrollButton />
        </>
    );
}
