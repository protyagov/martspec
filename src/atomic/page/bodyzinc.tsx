import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import ImageI18N from "@/atomic/atom/img-i18n";
import PageHeader from "@/atomic/molecule/page-header";
import TitleTextCard from "@/atomic/molecule/title-text-card";
import { IconTitleText } from "@/atomic/molecule/icon-title-text-elem";
import IconTitleTextList from "@/atomic/organism/icon-title-text-list";
import CallToAction from "@/atomic/organism/call-to-action";
import Review from "@/atomic/prototype/review";
import { TLanguageCode } from "@/model/TCodes";
import { getAppId } from "@/service/AppleService";

export default function BodyZinc() {
    const appId = getAppId();
    const iconTitleTextListItems: Array<IconTitleText> = [
        {
            icon: {
                src: "/img/atom/icons/icon-defense.svg",
                alt: _("ZINC.ALT3_1"),
            },
            title: _("ZINC.LIST2.LI1_HEAD"),
            subtitle: _("ZINC.LIST2.LI1_TEXT"),
        },
        {
            icon: {
                src: "/img/atom/icons/icon-no-auth.svg",
                alt: _("ZINC.ALT3_2"),
            },
            title: _("ZINC.LIST2.LI2_HEAD"),
            subtitle: _("ZINC.LIST2.LI2_TEXT"),
        },
        {
            icon: {
                src: "/img/atom/icons/icon-no-ads.svg",
                alt: _("ZINC.ALT3_3"),
            },
            title: _("ZINC.LIST2.LI3_HEAD"),
            subtitle: _("ZINC.LIST2.LI3_TEXT"),
        },
        {
            icon: {
                src: "/img/atom/icons/icon-apple-health.svg",
                alt: _("ZINC.ALT3_4"),
            },
            title: _("ZINC.LIST2.LI4_HEAD"),
            subtitle: _("ZINC.LIST2.LI4_TEXT"),
        },
    ];
    return (
        <>
            <NavigationBar />

            <div className="ms-base-page ms-base-new zinc">
                <PageHeader
                    title={_("ZINC.HEAD")}
                    subtitleLevel1={_("ZINC.ABOUT_1")}
                    subtitleLevel2={_("ZINC.ABOUT_2")}
                    appId={appId}
                    appDownloadTitle={_("ZINC.DWN")}
                    imgSrc="/img/page/zinc/body_zinc.svg"
                    imgAlt="ZINC.IMG"
                    imgW={443}
                    imgH={421.27}
                />

                <section>
                    <div className="row g-4">
                        <TitleTextCard
                            title={_("ZINC.LIST1.LI1_HEAD")}
                            text={_("ZINC.LIST1.LI1_TEXT")}
                            bgColor="#AAF1CF"
                        />
                        <TitleTextCard
                            title={_("ZINC.LIST1.LI2_HEAD")}
                            text={_("ZINC.LIST1.LI2_TEXT")}
                            bgColor="#94EAEE"
                        />
                        <TitleTextCard
                            title={_("ZINC.LIST1.LI3_HEAD")}
                            text={_("ZINC.LIST1.LI3_TEXT")}
                            bgColor="#AAF1CF"
                        />
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>{_("ZINC.HEAD1")}</h2>
                            <ul>
                                <li className="mb-4">{_("ZINC.DESC1")}</li>
                                <li className="mb-4">{_("ZINC.DESC2")}</li>
                                <li className="mb-4">{_("ZINC.DESC3")}</li>
                                <li className="mb-4">{_("ZINC.DESC4")}</li>
                            </ul>
                            <div className="btn-container">
                                <a href={Locale.i18nLink(`vitamin/zinc`)} className="btn">
                                    {_("ZINC.BTN_MORE")}
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <ImageI18N
                                src="/img/page/zinc/middle-pic-en.webp"
                                w={438}
                                h={438}
                                cls="ms-base-image mt-mob-xs"
                                alt={_("ZINC.ALT1")}
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-12 mb-2">
                            <h2>{_("ZINC.HEAD4")}</h2>
                        </div>
                        <div className="col-12">
                            <IconTitleTextList items={iconTitleTextListItems} />
                        </div>
                    </div>
                </section>

                <Review
                    appId={appId}
                    codes={{
                        countryCode: Locale.countryCode,
                        languageCode: Locale.language as TLanguageCode,
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
                            bgColor={{ backgroundColor: "#AAF1CF" }}
                            title={_("ZINC.HEAD5")}
                            subtitle={_("ZINC.DESC5")}
                            appId={appId}
                            appDownloadTitle={_("ZINC.DWN")}
                            imgSrc="/img/page/zinc/bottom-pic-en.webp"
                            imgAlt={_("ZINC.ALT2")}
                        />
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
