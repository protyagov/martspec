import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import PageHeader from "@/atomic/molecule/page-header";
import { IconTitleText } from "@/atomic/molecule/icon-title-text-elem";
import CardTitleText from "../molecule/card-title-text";
import CardTitleTextImage from "../molecule/card-title-text-image";
import CardImage from "../molecule/card-image";
import ImageI18N from "@/atomic/atom/img-i18n";
import IconTitleTextList from "@/atomic/organism/icon-title-text-list";
import CallToAction from "@/atomic/organism/call-to-action";
import Review from "@/atomic/prototype/review";
import { getAppId } from "@/service/AppleService";
import ScrollButton from "../atom/scroll-button";

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
            subtitle: _("WAIST.LIST2.LI4_TEXT"),
        },
    ];
    return (
        <>
            <NavigationBar />

            <div className="ms-base-page ms-base-new waist">
                <PageHeader
                    title={_("WAIST.HEAD")}
                    subtitleLevel1={_("WAIST.ABOUT_1")}
                    subtitleLevel2={_("WAIST.ABOUT_2")}
                    appId={appId}
                    appDownloadTitle={_("WAIST.DWN")}
                    imgSrc="/img/page/waistline/waist.svg"
                    imgAlt={_("WAIST.IMG")}
                    imgH={468}
                    imgW={430}
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

                <section>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>{_("WAIST.HEAD1")}</h2>
                            <p className="mb-4">{_("WAIST.DESC1")}</p>
                            <h4>{_("WAIST.HEAD2")}</h4>

                            {/* Better than BMI */}
                            <p className="mb-4">
                                <a
                                    href="https://www.heart.org/en/news/2019/03/19/waist-size-predicts-heart-attacks-better-than-bmi-especially-in-women"
                                    target="_blank"
                                >
                                    {_("WAIST.LINK2")}
                                </a>
                                {_("WAIST.DESC2")}
                            </p>
                            <h4>{_("WAIST.HEAD3")}</h4>

                            {/* Medical Fact */}
                            <p className="mb-4">
                                <a href="https://www.nhlbi.nih.gov/health/educational/lose_wt/risk.htm" target="_blank">
                                    {_("WAIST.LINK3")}
                                </a>
                                {_("WAIST.DESC3")}
                            </p>
                        </div>

                        <div className="col-lg-6">
                            <ImageI18N
                                src="/img/page/waistline/main-pic-en.webp"
                                w={435}
                                h={397}
                                cls="ms-base-image mt-mob-xs"
                                alt={_("WAIST.ALT1")}
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-12 mb-2">
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
                    <div className="row">
                        <CallToAction
                            bgColor={{ backgroundColor: "#FFB34066" }}
                            title={_("WAIST.HEAD5")}
                            subtitle={_("WAIST.DESC5")}
                            appId={appId}
                            appDownloadTitle={_("WAIST.DWN")}
                            imgSrc="/img/page/waistline/call-to-action-en.webp"
                            imgAlt={_("WAIST.ALT2")}
                        />
                    </div>
                </section>
            </div>

            <Footer />
            <ScrollButton />
        </>
    );
}
