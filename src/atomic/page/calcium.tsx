import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import CallToAction from "@/atomic/organism/call-to-action-new";
import ImageI18N from "@/atomic/atom/img-i18n";
import Review from "@/atomic/prototype/review";
import { getAppId } from "@/service/AppleService";
import ScrollButton from "@/atomic/atom/scroll-button";
import Header from "@/atomic/organism/header";
import CardTitleTextImageCustom from "@/atomic/molecule/card-title-text-image-custom";
import BulletList from "@/atomic/molecule/bullet-list";
import IconTitleTextList from "@/atomic/organism/icon-title-text-list";
import { IconTitleText } from "@/atomic/molecule/icon-title-text-elem";
import CardIconTitleText from "../molecule/card-icon-title-text";
import CardTitleTextButton from "@/atomic/molecule/card-title-text-button";
import Accordion, * as MetricAccordion from "@/atomic/molecule/accordion";
import CardBodyMetric, * as CardBody from "@/atomic/molecule/card-body-metric";
import { Breadcrumb } from "@/atomic/organism/breadcrumb";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";



export default function Calcium() {
    const items = useBreadcrumbs();
    const iconTitleTextListItems: Array<IconTitleText> = [
    {
        icon: {
            src: "/img/bodysize-icon-data-protection.png",
            alt: _("SIZE.IMG1_ALT"),
        },
        title: _("SIZE.LIST3.LI3_1_TITLE"),
        subtitle: _("SIZE.LIST3.LI3_1_TEXT"),
    },
    {
        icon: {
            src: "/img/bodysize-icon-data-sync.png",
            alt: _("SIZE.IMG4_ALT"),
        },
        title: _("SIZE.LIST3.LI3_4_TITLE"),
        subtitle: _("SIZE.LIST3.LI3_4_TEXT"),
    },
    {
        icon: {
            src: "/img/bodysize-icon-no-ads.png",
            alt: _("SIZE.IMG3_ALT"),
        },
        title: _("SIZE.LIST3.LI3_3_TITLE"),
        subtitle: _("SIZE.LIST3.LI3_3_TEXT"),
    },
    {
        icon: {
            src: "/img/bodysize-icon-no-sign-up.png",
            alt: _("SIZE.IMG2_ALT"),
        },
        title: _("SIZE.LIST3.LI3_2_TITLE"),
        subtitle: _("SIZE.LIST3.LI3_2_TEXT"),
    }
];
    const appId = getAppId();

    return (
        <>
            <NavigationBar />

            <div className="container-xl ms-s-offset fs-3 pt-lg-5">
                {/* Breadcrumbs */}
                <section className="pt-4">
                    <div className="row">
                        <Breadcrumb items={items} />
                    </div>
                </section>
                <Header
                    title={_("CALCIUM.HEAD")}
                    appId={appId}
                    appDownloadTitle={_("CALCIUM.DWN")}
                    imgSrc="/img/page/calcium/calcium-header.webp"
                    imgAlt={_("CALCIUM.IMG")}
                    imgH={305}
                    imgW={450}
                >
                    <div className="bodysize">
                        <ul className="header-content-list">
                            <li className="font-normal">{_("CALCIUM.ABOUT_1")}</li>
                            <li>{_("CALCIUM.ABOUT_2")}</li>
                            <li>{_("CALCIUM.ABOUT_3")}</li>
                        </ul>
                    </div>
                </Header>

                {/*<div className="row g-4">
                    <div className="col-12 col-lg-4">
                        <CardTitleTextImageCustom
                            title={_("SIZE.LIST1.LI1_HEAD")}
                            text={_("SIZE.LIST1.DESC1")}
                            imgSrc={`/img/page/body-size/section-left-${Locale.language}.webp`}
                            cardHeight="37rem"
                            imgPosition="center-bottom"
                            imgH="19rem"
                            imgMobileH="18rem"
                            shadow={true}
                            mobileBreakpoint={1040}
                            responsive={true}
                        />
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="d-flex flex-column h-100 gap-4">
                            <CardTitleTextImageCustom
                                title={_("SIZE.LIST1.LI2_HEAD")}
                                text={_("SIZE.LIST1.DESC2")}
                                bgColor="#E5F4D9"
                                cardHeight="17rem"
                                shadow={false}
                            />
                            <CardTitleTextImageCustom
                                title={_("SIZE.LIST1.LI3_HEAD")}
                                text={_("SIZE.LIST1.DESC3")}
                                bgColor="#FFECDB"
                                cardHeight="17rem"
                                shadow={false}
                            />
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <CardTitleTextImageCustom
                            title={_("SIZE.LIST1.LI4_HEAD")}
                            text={_("SIZE.LIST1.DESC4")}
                            imgSrc="/img/page/body-size/section-right.webp"
                            bgColor="#F4F5F8"
                            cardHeight="37rem"
                            imgPosition="center-bottom"
                            imgH="20rem"
                            imgMobileH="18rem"
                            shadow={false}
                            mobileBreakpoint={1040}
                            responsive={true}
                        />
                    </div>
                </div>*/}


           



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
                    themeColor="#7EB762"
                    hasUnderlineHover={false}
                />

                <div className="pb-5 text-center">
                    <CallToAction
                        title={_("IRON.ABOUT_4")}
                        subtitle={_("IRON.ABOUT_5")}
                        appId={appId}
                        appDownloadTitle={_("CALCIUM.DWN")}
                        imgSrc="/img/page/calcium/calcium-header.webp"
                        imgAlt={_("CALCIUM.IMG")}
                    />
                </div>
            </div>
            <Footer />
            <ScrollButton />
        </>
    );
}
