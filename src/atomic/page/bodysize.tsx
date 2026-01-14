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

interface DropdownList {
    groupName: string;
    header: {
        bgImg: MetricAccordion.BackgroundImage;
        mobileBgResized: boolean;
        defaultExpanded?: boolean;
    };
    bgImg: CardBody.BackgroundImage;
    bgColor: React.CSSProperties["color"];
    primaryColor: React.CSSProperties["color"];
    linkHoverColor: React.CSSProperties["color"];
    itemList: string[];
}

const dropdownlist: DropdownList[] = [
    {
        groupName: "BODY_GIRTHS",
        header: {
            bgImg: { src: "/img/page/body-size/bodysize-list-header-1.svg", width: 114, height: 132 },
            mobileBgResized: false,
            defaultExpanded: true,
        },
        bgImg: { src: "/img/page/body-size/body-circumferences.svg", width: 181, height: 87},
        bgColor: "#FFECDB",
        primaryColor: "#FD7E14",
        linkHoverColor: "#FD7E14",
        itemList: ["NECK", "SHOULDERS", "BREAST", "WAIST", "BUTTOCKS", "HAND", "HIP", "HEIGHT", "WEIGHT", "KNEE", "SHIN", "ELBOW"],
    },
    {
        groupName: "SKIN_FOLDS",
        header: {
            bgImg: { src: "/img/page/body-size/bodysize-list-header-2.svg", width: 134, height: 160 },
            mobileBgResized: true,
        },
        bgImg: { src: "/img/page/body-size/skinfold-measurement.svg", width: 69, height: 94},
        bgColor: "#E5F4D9",
        primaryColor: "#639C35",
        linkHoverColor: "#639C35",
        itemList: ["TRICEPS", "UNDER_SHOULDER", "STOMACH", "SHIN"],
    },
];

export default function BodySize() {
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
                    title={_("SIZE.HEAD")}
                    appId={appId}
                    appDownloadTitle={_("SIZE.DWN")}
                    imgSrc="/img/page/body-size/img-header-en.png"
                    imgAlt={_("SIZE.IMG")}
                    imgH={305}
                    imgW={450}
                >
                    <div className="bodysize">
                        <ul className="header-content-list">
                            <li className="font-normal">{_("SIZE.ABOUT_1")}</li>
                            <li>{_("SIZE.ABOUT_2")}</li>
                            <li>{_("SIZE.ABOUT_3")}</li>
                        </ul>
                    </div>
                </Header>

                <div className="row g-4">
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
                </div>

                <section className="mt-5">
                    <div className="row">
                        <div className="col-lg-6 how-head mt-4">
                            <h2 className="mb-5 bodysize__h2">{_("SIZE.HEAD2")}</h2>
                            <p>{_("SIZE.DESC2_1")}</p>
                            <ImageI18N
                                src="/img/page/body-size/img-howitworks-en.webp"
                                w={729}
                                h={675}
                                cls="ms-base-image d-none d-lg-block"
                            />
                        </div>
                        <div className="col-lg-6 how-head">
                            <h3 className="bodysize__h3">{_("SIZE.SUBHEAD2_1")}</h3>
                            <ul className="d-flex gap-4 list-unstyled how-list">
                                <li className="bg-green">{_("SIZE.LIST.LI1_TEXT")}</li>
                                <li className="bg-pink">{_("SIZE.LIST.LI2_TEXT")}</li>
                                <li className="bg-violet">{_("SIZE.LIST.LI3_TEXT")}</li>
                                <li className="bg-orange">{_("SIZE.LIST.LI4_TEXT")}</li>
                                <li className="bg-blue">{_("SIZE.LIST.LI5_TEXT")}</li>
                            </ul>
                            <p className="mt-4">{_("SIZE.DESC2_2")}</p>

                            <ImageI18N
                                src="/img/page/body-size/img-howitworks-en.webp"
                                w={487}
                                h={515}
                                cls="ms-base-image d-block d-lg-none mb-mob-xs"
                            />
                            <h3 className="bodysize__h3">{_("SIZE.SUBHEAD2_2")}</h3>
                            
                                <BulletList
                                    items={[
                                        _("SIZE.LIST2.LI1_TEXT"),
                                        _("SIZE.LIST2.LI2_TEXT"),
                                        _("SIZE.LIST2.LI3_TEXT"),
                                        _("SIZE.LIST2.LI4_TEXT"),
                                        _("SIZE.LIST2.LI5_TEXT"),
                                        _("SIZE.LIST2.LI6_TEXT"),
                                    ]}
                                    iconColor="#FD7E14"
                                    className="bullet-list ps-0"
                                />                       
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-12 mb-2 mt-5">
                            <h2 className="bodysize__h3">{_("SIZE.HEAD6")}</h2>
                        </div>
                        <div className="col-12">
                            <IconTitleTextList items={iconTitleTextListItems} />
                        </div>
                    </div>
                </section>

                <section className="complex-cards-section">
                    <div className="row mb-4 mt-5">
                        <h2 className="adaptive-padding bodysize__h3">{_("SIZE.INDICATORS_LIST.INDICATORS_HEAD")} </h2>
                    </div>
                    <div className="row mb-5">
                        <p className="adaptive-padding fs-4">{_("SIZE.INDICATORS_LIST.DESC")} </p>
                    </div>
                    <div className="row g-4 mb-4">
                        <div className="col-12 col-lg-4">
                            <CardTitleTextImageCustom
                                title={_("SIZE.INDICATORS_LIST.HEAD2")}
                                text={_("SIZE.INDICATORS_LIST.DESC2")}
                                bgColor="#FFECDB"
                                imgSrc="/img/page/body-size/somatotype.svg"
                                imgPosition="right-bottom"
                                shadow={false}
                                cardHeight="29rem"
                                imgH="21rem"
                                imgMobileH="15rem"
                                mobileBreakpoint={1380}
                                responsive={true}
                                actionLink={{
                                    text: _("SIZE.INDICATORS_LIST.BTN"),
                                    href: Locale.i18nLink("coming-soon"),
                                }}
                                primaryColor="#FD7E14"
                                linkHoverColor="#FD7E14"
                            />
                        </div>
                        <div className="col-12 col-lg-4 order-2">
                            <div className="d-flex flex-column h-100 gap-4">
                                <CardTitleTextImageCustom
                                    title={_("SIZE.INDICATORS_LIST.HEAD3")}
                                    text={_("SIZE.INDICATORS_LIST.DESC3")}
                                    bgColor="#FFFFFF"
                                    imgSrc="/img/page/body-size/figure.svg"
                                    imgPosition="right-bottom"
                                    shadow={true}
                                    cardHeight="22rem"
                                    imgH="12rem"
                                    responsive={true}
                                    actionLink={{
                                        text: _("SIZE.INDICATORS_LIST.BTN"),
                                        href: Locale.i18nLink("coming-soon"),
                                    }}
                                    primaryColor="#FD7E14"
                                    linkHoverColor="#FD7E14"
                                />
                                <CardTitleTextImageCustom
                                    title={_("SIZE.INDICATORS_LIST.HEAD4")}
                                    text={_("SIZE.INDICATORS_LIST.DESC4")}
                                    bgColor="#FFFFFF"
                                    shadow={true}
                                    cardHeight="12rem"
                                    responsive={true}
                                />
                            </div>
                        </div>
                        <div className="col-12 col-lg-4 order-4">
                            <div className="d-flex flex-column h-100 gap-4">
                                <CardTitleTextImageCustom
                                    title={_("SIZE.INDICATORS_LIST.HEAD5")}
                                    text={_("SIZE.INDICATORS_LIST.DESC5")}
                                    bgColor="#F4F5F8"
                                    shadow={false}
                                    cardHeight="22rem"
                                    cardMobileHeight="16rem"
                                    responsive={true}
                                    mobileBreakpoint={991}
                                />
                                <CardTitleTextImageCustom
                                    title={_("SIZE.INDICATORS_LIST.HEAD6")}
                                    text={_("SIZE.INDICATORS_LIST.DESC6")}
                                    bgColor="#FFFFFF"
                                    shadow={true}
                                    cardHeight="12rem"
                                    responsive={true}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="row g-4 mb-4">
                        <div className="col-12 col-lg-6">
                            <CardTitleTextImageCustom
                                title={_("SIZE.INDICATORS_LIST.HEAD7")}
                                text={_("SIZE.INDICATORS_LIST.DESC7")}
                                bgColor="#F4F5F8"
                                shadow={false}
                                cardHeight="15rem"
                                responsive={true}
                            />
                        </div>
                        <div className="col-12 col-lg-6 custom-card-padding">
                            <CardTitleTextImageCustom
                                title={_("SIZE.INDICATORS_LIST.HEAD8")}
                                text={_("SIZE.INDICATORS_LIST.DESC8")}
                                bgColor="#FFFFFF"
                                imgSrc="/img/page/body-size/water.svg"
                                imgPosition="right-bottom"
                                shadow={true}
                                cardHeight="15rem"
                                imgH="12rem"
                                responsive={true}
                            />
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-12 col-lg-4">
                            <div className="d-flex flex-column h-100 gap-4">
                                <CardTitleTextImageCustom
                                    title={_("SIZE.INDICATORS_LIST.HEAD9")}
                                    text={_("SIZE.INDICATORS_LIST.DESC9")}
                                    bgColor="#FFFFFF"
                                    imgSrc="/img/page/body-size/waist-index.svg"
                                    imgPosition="right-bottom"
                                    shadow={true}
                                    cardHeight="22rem"
                                    imgH="12rem"
                                    imgMobileH="12rem"
                                    mobileBreakpoint={1230}
                                    responsive={true}
                                />
                                <CardTitleTextImageCustom
                                    title={_("SIZE.INDICATORS_LIST.HEAD10")}
                                    text={_("SIZE.INDICATORS_LIST.DESC10")}
                                    bgColor="#FFFFFF"
                                    shadow={true}
                                    cardHeight="12rem"
                                    responsive={true}
                                />
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="d-flex flex-column h-100 gap-4">
                                <CardTitleTextImageCustom
                                    title={_("SIZE.INDICATORS_LIST.HEAD11")}
                                    text={_("SIZE.INDICATORS_LIST.DESC11")}
                                    bgColor="#FFFFFF"
                                    imgSrc="/img/page/body-size/energy.svg"
                                    imgPosition="right-bottom"
                                    shadow={true}
                                    cardHeight="22rem"
                                    imgMobileH="12rem"
                                    mobileBreakpoint={1230}
                                    imgH="12rem"
                                    responsive={true}
                                />
                                <CardTitleTextImageCustom
                                    title={_("SIZE.INDICATORS_LIST.HEAD12")}
                                    text={_("SIZE.INDICATORS_LIST.DESC12")}
                                    bgColor="#F4F5F8"
                                    shadow={false}
                                    cardHeight="12rem"
                                    responsive={true}
                                />
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <CardTitleTextImageCustom
                                title={_("SIZE.INDICATORS_LIST.HEAD13")}
                                text={_("SIZE.INDICATORS_LIST.DESC13")}
                                bgColor="#FFFFFF"
                                imgSrc="/img/page/body-size/Adonis-index.svg"
                                imgPosition="right-bottom"
                                shadow={true}
                                cardHeight="29rem"
                                imgMobileH="15rem"
                                mobileBreakpoint={1380}
                                imgH="21rem"
                                responsive={true}
                                actionLink={{
                                    text: _("SIZE.INDICATORS_LIST.BTN"),
                                    href: Locale.i18nLink("coming-soon"),
                                }}
                                primaryColor="#FD7E14"
                                linkHoverColor="#FD7E14"
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row mb-0 mt-5">
                        <h2 className="bodysize__h2 mb-5">{_("SIZE.HEAD12")} </h2>
                    </div>
                    {dropdownlist.map(
                        ({ groupName, header, bgImg, bgColor, primaryColor, linkHoverColor, itemList }) => (
                            <section key={`dropdownlist-group-${groupName}`} className="row mt-4 pt-4 mb-0">
                                <div className="col-12 d-flex flex-column">
                                    <Accordion
                                        title={_(`SIZE.${groupName}`)}
                                        bgColor={bgColor}
                                        expandIconColor={primaryColor}
                                        bgImg={header.bgImg}
                                        mobileBgResized={header.mobileBgResized}
                                        defaultExpanded={header.defaultExpanded}
                                    >
                                        <ul className="d-grid dropdown-list list-unstyled">
                                            {itemList.map((card) => (
                                                <li key={card}>
                                                    <CardBodyMetric
                                                        title={_(`SIZE.${card}`)}
                                                        actionLink={{
                                                            text: _("SIZE.BTN_HOW"),
                                                            href: Locale.i18nLink("coming-soon"),
                                                        }}
                                                        primaryColor={primaryColor}
                                                        linkHoverColor={linkHoverColor}
                                                        bgImg={bgImg}
                                                    />
                                                </li>
                                            ))}
                                        </ul>
                                    </Accordion>
                                </div>
                            </section>
                        )
                    )}
                    <section key={`dropdownlist-group-MEASUREMENTS`} className="row mt-4 mt-lg-5 pt-4 mb-0">
                        <div className="col-12 d-flex flex-column">
                            <Accordion
                                title={_(`SIZE.MEASUREMENTS`)}
                                bgColor="#EAF1FD"
                                expandIconColor="#1686FF"
                                bgImg={{
                                    src: "/img/page/body-size/bodysize-list-header-3.svg",
                                    width: 129,
                                    height: 118,
                                }}
                                mobileBgResized={true}
                            >
                                <div className="row p-0">
                                    <div className="col-md-6">
                                        <div className="pe-3">
                                            <p className="mt-5">{_("SIZE.MEASUREMENTS_DESC")}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className="mb-3 " style={{ color: "#444444" }}>
                                            {_("SIZE.MEASUREMENTS_LIST_TITLE")}
                                        </h3>
                                        <ul className="">
                                            <li className="d-flex  align-items-start mb-2">
                                                <span className="blue-dot me-2"></span>
                                                {_("SIZE.MEASUREMENTS_ITEM_1")}
                                            </li>
                                            <li className="d-flex  align-items-start mb-2">
                                                <span className="blue-dot me-2"></span>
                                                {_("SIZE.MEASUREMENTS_ITEM_2")}
                                            </li>
                                            <li className="d-flex  align-items-start mb-2">
                                                <span className="blue-dot me-2"></span>
                                                {_("SIZE.MEASUREMENTS_ITEM_3")}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Accordion>
                        </div>
                    </section>
                </section>

                <section className="bodysize-container mt-5">
                    <div className="row row-cols-xl-3 row-cols-1">
                        <div className="col col-md-4 p-0 card-alignment-small">
                            <div className="row row-cols-1 h-100 p-0">
                                <div className="col  img-wrapper ">
                                    <CardTitleTextImageCustom
                                        title={_("SIZE.HEAD9")}
                                        text={_("SIZE.DESC9")}
                                        bgColor="#FFFFFF"
                                        imgSrc="/img/page/body-size/orange_curly_ine.png"
                                        imgPosition="right-bottom"
                                        shadow={true}
                                        cardHeight="15rem"
                                        imgH="6rem"
                                        responsive={true}
                                    />
                                </div>
                                <div className="col mt-5 img-wrapper">
                                    <CardTitleTextImageCustom
                                        title={_("SIZE.HEAD10")}
                                        text={_("SIZE.DESC10")}
                                        bgColor="#FFFFFF"
                                        imgSrc="/img/page/body-size/green_curly_line.png"
                                        imgPosition="left-bottom"
                                        shadow={true}
                                        cardHeight="15rem"
                                        imgH="6rem"
                                        responsive={true}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col col-md-4 card-alignment-big">
                            <CardTitleTextImageCustom
                                title={_("SIZE.HEAD11")}
                                text={_("SIZE.DESC11")}
                                bgColor="#FFFFFF"
                                imgSrc="/img/page/body-size/masks.png"
                                imgPosition="right-bottom"
                                shadow={true}
                                cardHeight="35.5rem"
                                imgH="25rem"
                                responsive={true}
                            />
                        </div>
                        <div className="col col-md-4 text-alignment">
                            <CardTitleTextButton
                                title={_("SIZE.HEAD8")}
                                textContent={[_("SIZE.DESC8_1"), _("SIZE.DESC8_2")]}
                                buttonText={_("SIZE.BTN_MORE")}
                                buttonLink={Locale.i18nLink(`emotion/biorhythms`)}
                                buttonColor="#FD7E14"
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row waist-info-section bodysize-container-1">
                        <h2 className="bodysize__h2 mt-5">{_("SIZE.HEAD7")}</h2>
                        <div className="info-list row g-4">
                            <div className="col-12 col-xxl-4 col-lg-6 d-flex">
                                <CardIconTitleText
                                    iconProps={{
                                        icon: {
                                            src: "/img/atom/icons/icon-health-condition.svg",
                                            alt: _("SIZE.IMG4_1_ALT"),
                                        },
                                        title: _("SIZE.LIST4.LI4_1_TITLE"),
                                    }}
                                    text={_("SIZE.LIST4.LI4_1_TEXT")}
                                    bgColor="#FFECDB"
                                />
                            </div>
                            <div className="col-12 col-xxl-4 col-lg-6 d-flex">
                                <CardIconTitleText
                                    iconProps={{
                                        icon: {
                                            src: "/img/atom/icons/icon-training-efficiency.svg",
                                            alt: _("SIZE.IMG4_2_ALT"),
                                        },
                                        title: _("SIZE.LIST4.LI4_2_TITLE"),
                                    }}
                                    text={_("SIZE.LIST4.LI4_2_TEXT")}
                                />
                            </div>
                            <div className="col-12 col-xxl-4 col-lg-12 d-flex">
                                <CardIconTitleText
                                    iconProps={{
                                        icon: {
                                            src: "/img/atom/icons/icon-attractiveness.svg",
                                            alt: _("SIZE.IMG4_3_ALT"),
                                        },
                                        title: _("SIZE.LIST4.LI4_3_TITLE"),
                                    }}
                                    text={_("SIZE.LIST4.LI4_3_TEXT")}
                                    bgColor="#FFECDB"
                                />
                            </div>
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
                    themeColor="#FD7E14"
                    hasUnderlineHover={false}
                />

                <div className="pb-5 text-center">
                    <CallToAction
                        title={_("SIZE.CALL_TO_ACTION.HEAD")}
                        subtitle={_("SIZE.CALL_TO_ACTION.DESC")}
                        appId={appId}
                        appDownloadTitle={_("SIZE.DWN")}
                        imgSrc="/img/page/body-size/img-cta-en.webp"
                        imgAlt={_("SIZE.IMG")}
                    />
                </div>
            </div>
            <Footer />
            <ScrollButton />
        </>
    );
}
