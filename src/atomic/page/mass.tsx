import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import PageHeader from "@/atomic/molecule/page-header";
import TitleTextCard from "@/atomic/molecule/title-text-card";
import ImageI18N from "@/atomic/atom/img-i18n";
import IconTitleTextList from "@/atomic/organism/icon-title-text-list";
import { IconTitleText } from "@/atomic/molecule/icon-title-text-elem";
import CallToAction from "@/atomic/organism/call-to-action";
import Review from "@/atomic/prototype/review";
import { TLanguageCode } from "@/model/TCodes";
import { getAppId } from "@/service/AppleService";

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
    ];
    return (
        <>
            <NavigationBar />

            <div className="ms-base-page ms-base-new bodymass">
                <PageHeader
                    title={_("MASS.HEAD")}
                    subtitleLevel1={_("MASS.ABOUT_1")}
                    subtitleLevel2={_("MASS.ABOUT_2")}
                    appId={1507588203}
                    appDownloadTitle={_("MASS.DWN")}
                    imgSrc="/img/page/body-mass/mass.webp"
                    imgAlt={_("MASS.IMG")}
                    imgH={428}
                    imgW={428}
                />

                <section>
                    <div className="row g-4">
                        <TitleTextCard
                            title={_("MASS.LIST1.LI1_HEAD")}
                            text={_("MASS.LIST1.LI1_TEXT")}
                            bgColor="#E8FAE0"
                        />
                        <TitleTextCard
                            title={_("MASS.LIST1.LI2_HEAD")}
                            text={_("MASS.LIST1.LI2_TEXT")}
                            bgColor="#D6E3FC"
                        />
                        <TitleTextCard
                            title={_("MASS.LIST1.LI3_HEAD")}
                            text={_("MASS.LIST1.LI3_TEXT")}
                            bgColor="#E8FAE0"
                        />
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>{_("MASS.HEAD2")}</h2>
                            <p className="mb-4">{_("MASS.DESC2")}</p>
                        </div>
                        <div className="col-lg-6">
                            <ImageI18N
                                src="/img/page/body-mass/main-pic-en.webp"
                                w={379}
                                h={440}
                                cls="ms-base-image mt-mob-xs"
                                alt={_("MASS.ALT1")}
                            />
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
                    <CallToAction
                        bgColor={{ backgroundColor: "#E8FAE0" }}
                        title={_("MASS.HEAD4")}
                        subtitle={_("MASS.DESC4")}
                        appId={1507588203}
                        appDownloadTitle={_("MASS.DWN")}
                        imgSrc="/img/org/call-to-action/bodymass/call-to-action-en.webp"
                        imgAlt={_("MASS.ALT2")}
                    />
                </section>
            </div>

            <Footer />
        </>
    );
}
