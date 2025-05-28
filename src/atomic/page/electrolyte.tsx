import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { Footer } from "@/atomic/organism/footer";
import ImageI18N from "../atom/img-i18n";
import NavigationBar from "@/atomic/organism/navbar";
import Header from "@/atomic/organism/header";
import CardTitleTextButton from "@/atomic/molecule/card-title-text-button";
import TitleTextLinkCard from "@/atomic/molecule/title-text-link-card";
import Review from "@/atomic/prototype/review";
import { getAppId } from "@/service/AppleService";
import ScrollButton from "../atom/scroll-button";
import IconTitleTextList from "@/atomic/organism/icon-title-text-list";
import { IconTitleText } from "@/atomic/molecule/icon-title-text-elem";
import CallToAction from "@/atomic/organism/call-to-action-new";

export default function Electrolyte() {
    const appId = getAppId();
    const advantages: Array<IconTitleText> = [
        {
            icon: {
                src: "/img/atom/icons/icon-minerals.svg",
                alt: _("MASS.ALT5_1"),
            },
            title: _("ELECTROLYTE.LIST.LI1_HEAD"),
            subtitle: _("ELECTROLYTE.LIST.LI1_TEXT"),
        },
        {
            icon: {
                src: "/img/atom/icons/icon-sync.svg",
                alt: _("MASS.ALT5_3"),
            },
            title: _("ELECTROLYTE.LIST.LI2_HEAD"),
            subtitle: _("ELECTROLYTE.LIST.LI2_TEXT"),
        },
        {
            icon: {
                src: "/img/atom/icons/icon-defense.svg",
                alt: _("MASS.ALT5_4"),
            },
            title: _("ELECTROLYTE.LIST.LI3_HEAD"),
            subtitle: _("ELECTROLYTE.LIST.LI3_TEXT"),
        },
        {
            icon: {
                src: "/img/atom/icons/icon-watch-widget.svg",
                alt: _("MASS.ALT5_5"),
            },
            title: _("ELECTROLYTE.LIST.LI4_HEAD"),
            subtitle: _("ELECTROLYTE.LIST.LI4_HEAD"),
        },
    ];
    return (
        <>
            <NavigationBar />

            <div className="ms-base-page ms-base-new">
                <Header
                    title={_("ELECTROLYTE.HEAD")}
                    appId={appId}
                    appDownloadTitle={_("ELECTROLYTE.DWN")}
                    imgSrc="/img/page/electrolyte/Img-Header-en.webp"
                    imgAlt={_("ELECTROLYTE.IMG")}
                    imgH={405}
                    imgW={550}
                >
                    <div className="electrolyte">
                        <ul className="header-content-list">
                            <li>{_("ELECTROLYTE.ABOUT_1")}</li>
                            <li>{_("ELECTROLYTE.ABOUT_2")}</li>
                            <li>{_("ELECTROLYTE.ABOUT_3")}</li>
                        </ul>
                    </div>
                </Header>

                <section>
                    <div className="row d-flex justify-content-between g-4">
                        <div className="col-12 col-xxl-6">
                            <ImageI18N
                                src="/img/page/electrolyte/Img-WhyElectrolit-en.webp"
                                w={487}
                                h={515}
                                cls="ms-base-image mt-mob-xs mb-6"
                                alt={_("ELECTROLYTE.IMG")}
                            />
                        </div>
                        <div className="col-12 col-xxl-6">
                            <CardTitleTextButton
                                title={_("ELECTROLYTE.HEAD2")}
                                textContent={[_("ELECTROLYTE.DESC2_1"), _("ELECTROLYTE.DESC2_2")]}
                                buttonText={_("ELECTROLYTE.BTN_MORE")}
                                buttonLink={Locale.i18nLink(`coming-soon`)}
                                buttonColor="#8079CC"
                            />
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="row mb-0">
                        <div className="col-12 mb-2">
                            <h2>{_("ELECTROLYTE.MINERALS_H2")}</h2>
                            <p>{_("ELECTROLYTE.MINERALS_P")}</p>
                        </div>

                        <div className="row g-4 p-0">
                            <TitleTextLinkCard
                                title={_("ELECTROLYTE.HEAD3")}
                                text={_("ELECTROLYTE.DESC3_1")}
                                link={{
                                    text: _("ELECTROLYTE.BTN_LINK"),
                                    href: Locale.i18nLink(`vitamin/magnesium`),
                                }}
                                gridColumnClass="col-xxl-6"
                                bgColor="#E5EEFF"
                                additionalCardClass="electrolyte-card-style"
                                arrowImage={<img src="/img/page/electrolyte/arrow-icon.webp" width={19} />}
                                color="#8079CC"
                                hoverColor="#6760b7"
                            />

                            <TitleTextLinkCard
                                title={_("ELECTROLYTE.HEAD4")}
                                text={_("ELECTROLYTE.DESC4_1")}
                                link={{
                                    text: _("ELECTROLYTE.BTN_LINK"),
                                    href: Locale.i18nLink(`vitamin/calcium`),
                                }}
                                image="/img/page/electrolyte/calcium.webp"
                                alt="calcium"
                                gridColumnClass="col-xxl-6"
                                additionalCardClass="electrolyte-card-style"
                                hasShadow={true}
                                bgColor="transparent"
                                imageZIndex={-1}
                                arrowImage={<img src="/img/page/electrolyte/arrow-icon.webp" width={19} />}
                                color="#8079CC"
                                hoverColor="#6760b7"
                            />

                            <TitleTextLinkCard
                                title={_("ELECTROLYTE.HEAD5")}
                                text={_("ELECTROLYTE.DESC5_1")}
                                link={{
                                    text: _("ELECTROLYTE.BTN_LINK"),
                                    href: Locale.i18nLink(`vitamin/potassium`),
                                }}
                                image="/img/page/electrolyte/potassium.webp"
                                alt="potassium"
                                gridColumnClass="col-xxl-6"
                                hasShadow={true}
                                bgColor="transparent"
                                additionalCardClass="electrolyte-card-style"
                                imageZIndex={-1}
                                arrowImage={<img src="/img/page/electrolyte/arrow-icon.webp" width={19} />}
                                color="#8079CC"
                                hoverColor="#6760b7"
                            />

                            <TitleTextLinkCard
                                title={_("ELECTROLYTE.HEAD6")}
                                text={_("ELECTROLYTE.DESC6_1")}
                                link={{
                                    text: _("ELECTROLYTE.BTN_LINK"),
                                    href: Locale.i18nLink(`vitamin/iron`),
                                }}
                                gridColumnClass="col-xxl-6"
                                bgColor="#F4F5F8"
                                additionalCardClass="electrolyte-card-style"
                                arrowImage={<img src="/img/page/electrolyte/arrow-icon.webp" width={19} />}
                                color="#8079CC"
                                hoverColor="#6760b7"
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row our-advantages-section">
                        <div className="col-12">
                            <h2>{_("ELECTROLYTE.HEAD8")}</h2>
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
                    <CallToAction
                        title="ELECTROLYTE.HEAD9"
                        subtitle="ELECTROLYTE.DESC9"
                        appId={appId}
                        appDownloadTitle={_("EMOTION.DWN")}
                        imgSrc="/img/page/electrolyte/img-banner-en.webp"
                        imgAlt={_("ZINC.ALT2")}
                    />
                </section>
            </div>
            <Footer />
            <ScrollButton color="#8079CC" />
        </>
    );
}
