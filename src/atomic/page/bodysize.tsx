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
import CardTitleTextImage from "@/atomic/molecule/card-title-text-image";
import CardTitleTextImageCustom from "@/atomic/molecule/card-title-text-image-custom";
import CardTitleText from "@/atomic/molecule/card-title-text";
import CardImage from "@/atomic/molecule/card-image";
import BulletList from "@/atomic/molecule/bullet-list";
import IconTitleTextList from "@/atomic/organism/icon-title-text-list";
import { IconTitleText } from "@/atomic/molecule/icon-title-text-elem";
import CardIconTitleText from "../molecule/card-icon-title-text";
import CardTitleTextButton from "@/atomic/molecule/card-title-text-button";
import Accordion, * as MetricAccordion from "@/atomic/molecule/accordion";
import CardBodyMetric, * as CardBody from "@/atomic/molecule/card-body-metric";

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

            <div className="ms-base-page">
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
                            <li>{_("SIZE.ABOUT_1")}</li>
                            <li>{_("SIZE.ABOUT_2")}</li>
                            <li>{_("SIZE.ABOUT_3")}</li>
                        </ul>
                    </div>
                </Header>
                <section>
                    <div className="row row-cols-xl-3 row-cols-1 g-4">
                        <div className="col col-md-4">
                            <CardTitleTextImage
                                title={_("SIZE.LIST1.LI1_HEAD")}
                                text={_("SIZE.LIST1.DESC1")}
                                imgSrc="/img/page/body-size/section-left-en.webp"
                                imgH={1000}
                                imgW={2000}
                            />
                        </div>
                        <div className="col col-md-4 p-0">
                            <div className="row row-cols-1 h-100 p-0">
                                <div className="col py-0">
                                    <CardTitleText
                                        title={_("SIZE.LIST1.LI2_HEAD")}
                                        text={_("SIZE.LIST1.DESC2")}
                                        bgColor="#E5F4D9"
                                    />
                                </div>
                                <div className="col py-0 mt-4">
                                    <CardTitleText
                                        title={_("SIZE.LIST1.LI3_HEAD")}
                                        text={_("SIZE.LIST1.DESC3")}
                                        bgColor="#FFECDB"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-4" >
                            <CardTitleTextImage
                                title={_("SIZE.LIST1.LI4_HEAD")}
                                text={_("SIZE.LIST1.DESC4")}
                                imgSrc="/img/page/body-size/section-right.webp"
                                imgH={270}
                                imgW={300}
                                bgColor="#F4F5F8"
                                
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-lg-6 how-head mt-4">
                            <h2>{_("SIZE.HEAD2")}</h2>
                            <p>{_("SIZE.DESC2_1")}</p>
                            <ImageI18N
                                src="/img/page/body-size/img-howitworks-en.webp"
                                w={729}
                                h={675}
                                cls="ms-base-image d-none d-lg-block"
                            />
                        </div>
                        <div className="col-lg-6 how-head">
                            <h3>{_("SIZE.SUBHEAD2_1")}</h3>
                            <ul className="d-flex gap-4 how-list">
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
                            <h3>{_("SIZE.SUBHEAD2_2")}</h3>
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
                                className="bullet-list"
                            />
                        </div>
                    </div>
                </section>
                
                <section>
                    <div className="row">
                        <div className="col-12 mb-2">
                            <h2>{_("SIZE.HEAD6")}</h2>
                        </div>
                        <div className="col-12">
                            <IconTitleTextList items={iconTitleTextListItems} />
                        </div>
                    </div>
                </section>
                
                {/* Body compostion 
                

                <ImageI18N
                    src="/img/page/body-size/size-middle-en.webp"
                    w={512}
                    h={512}
                    cls="mx-auto img-fluid"
                    alt={_("SIZE.IMG")}
                />*/}

                {/* Chest and Bust 
                <section className="row">
                    <h4>{_("SIZE.HEAD2")}</h4>
                    <p className="mt-3">{_("SIZE.DESC2")}</p>
                </section>

                {/* Waist Circumferance 
                <section className="row">
                    <h4>{_("SIZE.HEAD3")}</h4>
                    <p className="mt-3">
                        <a
                            href="https://www.heart.org/en/news/2019/03/19/waist-size-predicts-heart-attacks-better-than-bmi-especially-in-women"
                            target="_blank"
                        >
                            {_("WAIST.LINK2")}
                        </a>
                        {_("WAIST.DESC2")}
                    </p>
                </section>*/}

                {/* Hips Width 
                <section className="row">
                    <h4>{_("SIZE.HEAD4")}</h4>
                    <p className="mt-3">{_("SIZE.DESC4")}</p>
                </section>

                <section className="row">
                    <h4>{_("WAIST.HEAD1")}</h4>
                    <p className="mt-3">
                        {_("WAIST.DESC1")}
                        <a href="https://www.nhlbi.nih.gov/health/educational/lose_wt/risk.htm" target="_blank">
                            <br />
                            <Custom>
                                <i>{_("WAIST.LINK1")}</i>
                            </Custom>
                        </a>
                    </p>
                </section>*/}

                {/* Body Shape 
                <section className="row">
                    <h4>{_("SIZE.HEAD5")}</h4>
                    <p className="mt-3">{_("SIZE.DESC5")}</p>
                </section>*/}
                <section>    
                    <div className="row mb-0 "><h2 className="adaptive-padding">{_("SIZE.HEAD12")} </h2></div>
                    {dropdownlist.map(({ groupName, header, bgImg, bgColor, primaryColor, linkHoverColor, itemList }) => (
                        <section key={`dropdownlist-group-${groupName}`} className="row mt-4 mt-lg-5 pt-4 mb-0">
                            <div className="col-12 d-flex flex-column">
                                <Accordion
                                    title={_(`SIZE.${groupName}`)}
                                    bgColor={bgColor}
                                    expandIconColor={primaryColor}
                                    bgImg={header.bgImg}
                                    mobileBgResized={header.mobileBgResized}
                                    defaultExpanded={header.defaultExpanded}
                                >
                                    <ul className="d-grid dropdown-list">
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
                    ))}
                    <section key={`dropdownlist-group-MEASUREMENTS`} className="row mt-4 mt-lg-5 pt-4 mb-0">
                            <div className="col-12 d-flex flex-column">
                                <Accordion
                                    title={_(`SIZE.MEASUREMENTS`)}
                                    bgColor="#EAF1FD"
                                    expandIconColor="#1686FF"
                                    bgImg={{
                                    src: "/img/page/body-size/bodysize-list-header-3.svg",
                                    width: 129,
                                    height: 118}}
                                    mobileBgResized={true}
                                >
                                    <div className="row p-0">
                                    <div className="col-md-6">
                                        <div className="pe-3">
                                            <p className="mt-5">
                                                {_("SIZE.MEASUREMENTS_DESC")}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <h3 className="mb-3 "style={{ color: "#444444" }}>{_("SIZE.MEASUREMENTS_LIST_TITLE")}</h3>
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



                <section className="bodysize-container">
                    <div className="row row-cols-xl-3 row-cols-1 g-4">
                        <div className="col col-md-4 p-0">
                            <div className="row row-cols-1 h-100 p-0">
                                <div className="col py-0 img-wrapper">
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
                                <div className="col py-0 mt-4 img-wrapper">
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
                        
                        <div className="col col-md-4 img-wrapper-big" >
                            <CardTitleTextImageCustom
                                        title={_("SIZE.HEAD11")}
                                        text={_("SIZE.DESC11")}
                                        bgColor="#FFFFFF"
                                        imgSrc="/img/page/body-size/masks.png"
                                        imgPosition="right-bottom"
                                        shadow={true}
                                        cardHeight="33rem"
                                        imgH="25rem"
                                        responsive={true}
                                    />
                        </div>
                        <div className="col col-md-4">
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
                    <div className="ms-base-new row waist-info-section">
                        <h2>{_("SIZE.HEAD7")}</h2>
                        <div className="info-list row g-4">
                            <div className="col-lg-4 d-flex">
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
                            <div className="col-lg-4 d-flex">
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
                            <div className="col-lg-4 d-flex">
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
            </div>

            <div className="pb-5 text-center">
                <CallToAction
                    title={_("SIZE.CALL_TO_ACTION.HEAD")}
                    subtitle={_("SIZE.CALL_TO_ACTION.DESC")}
                    appId={appId}
                    appDownloadTitle={_("SIZE.DWN")}
                    imgSrc="/img/page/body-size/img-cta-en.webp"
                    imgAlt={_("SIZE.IMG")}
                />
                {/* <img src="/img/size_bottom.512.webp" className="img-fluid mb-3 px-4" width={512} height={512} alt={_("SIZE.IMG")} /> */}
            </div>
            <Footer />
            <ScrollButton />
        </>
    );
}
