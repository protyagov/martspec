import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import ImageI18N from "@/atomic/atom/img-i18n";
import TitleTextCard from "@/atomic/molecule/title-text-card";
import { IconTitleText } from "@/atomic/molecule/icon-title-text-elem";
import IconTitleTextList from "@/atomic/organism/icon-title-text-list";
import CallToAction from "@/atomic/organism/call-to-action-new";
import Review from "@/atomic/prototype/review";
import { getAppId } from "@/service/AppleService";
import ScrollButton from "../atom/scroll-button";
import Header from "@/atomic/organism/header";
import { Breadcrumb } from "@/atomic/organism/breadcrumb";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";
import CardTitleTextImageCustom from "@/atomic/molecule/card-title-text-image-custom";
import BulletList from "@/atomic/molecule/bullet-list";
import CardTitleTextButton from "../molecule/card-title-text-button";

export default function BodyZinc() {
    const appId = getAppId();
    const items = useBreadcrumbs();
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

            <div className="ms-base-page zinc">
                <div className="row">
                    <Breadcrumb items={items} />
                </div>
                <Header
                    title={_("ZINC.HEAD")}
                    appId={appId}
                    appDownloadTitle={_("ZINC.DWN")}
                    imgSrc="/img/page/zinc/img-header-en.webp"
                    imgAlt={_("ZINC.IMG")}
                    imgH={405}
                    imgW={550}
                >
                    <div className="zinc">
                        <ul className="header-content-list">
                            <li>{_("ZINC.ABOUT_1")}</li>
                            <li>{_("ZINC.ABOUT_2")}</li>
                            <li>{_("ZINC.ABOUT_3")}</li>
                        </ul>
                    </div>
                </Header>

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
                            <ImageI18N
                                src="/img/page/zinc/middle-pic-new-en.webp"
                                w={620}
                                h={390}
                                cls="ms-base-image mt-mob-xs ms-lg-0 me-lg-auto"
                                alt={_("ZINC.ALT1")}
                            />
                        </div>

                        <div className="mt-5 pt-5 calcium col-lg-6 offset-xxl-1 col-xxl-5 order-1 ps-5 pb-2">
                            <div className="card-title-text-button fs-4">
                                <div className="card-title-text-button">
                                    <CardTitleTextButton
                                        title={_("ZINC.HEAD1")}
                                        textContent={[
                                            _("ZINC.DESC1"),
                                            _("ZINC.DESC2"),
                                            _("ZINC.DESC3"),
                                            _("ZINC.DESC4"),
                                        ]}
                                        buttonText={_("ZINC.BTN_MORE")}
                                        buttonLink={Locale.i18nLink(`vitamin/zinc`)}
                                        buttonColor="#6EAD4F"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section>
                    <div className="row">
                        <div className="row block p-0" style={{backgroundColor: "#F8FDEA", overflow: "hidden"}}>
                            
                            <div className="col-lg-6 ps-5 py-5 pr-0">
                                <h1 className="fs-1">{_("ZINC.HEAD6")}</h1>
                                <p>{_("ZINC.DESC6")}</p>
                                <h3 className="fs-4">{_("ZINC.HEAD7")}</h3>

                                <BulletList items={[_("ZINC.LIST3.LI1_HEAD"),]} iconColor="#71B520" className="col-bullet-list fw-bold text-muted m-0"/>
                                <p className="m-0 ps-5 mb-3">{_("ZINC.LIST3.LI1_TEXT")}</p>

                                <BulletList items={[_("ZINC.LIST3.LI2_HEAD"),]} iconColor="#71B520" className="col-bullet-list fw-bold text-muted m-0"/>
                                <p className="m-0 ps-5 mb-3">{_("ZINC.LIST3.LI2_TEXT")}</p>

                                <BulletList items={[_("ZINC.LIST3.LI3_HEAD"),]} iconColor="#71B520" className="col-bullet-list fw-bold text-muted m-0"/>
                                <p className="m-0 ps-5 mb-3">{_("ZINC.LIST3.LI3_TEXT")}</p>

                                <BulletList items={[_("ZINC.LIST3.LI4_HEAD"),]} iconColor="#71B520" className="col-bullet-list fw-bold text-muted m-0"/>
                                <p className="m-0 ps-5 mb-3">{_("ZINC.LIST3.LI4_TEXT")}</p>

                                <p className="mt-1">{_("ZINC.DESC7")}</p>
                            </div>

                            <div className="col-lg-6 d-flex justify-content-end align-items-end p-0">
                                <ImageI18N
                                    src="/img/page/zinc/tasks.svg"
                                    w={600}
                                    h={450}
                                    cls="m-0 img-fluid"
                                    alt={_("ZINC.ALT1")}
                                />
                            </div>
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
                    themeColor="#71B520"
                    hasUnderlineHover={false}
                />

                <section>
                    <div className="row">
                        <CallToAction
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
            <ScrollButton color="#72E796" />
        </>
    );
}
