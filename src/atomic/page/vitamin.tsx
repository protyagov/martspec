import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import ImageI18N from "@/atomic/atom/img-i18n";
import CallToAction from "@/atomic/organism/call-to-action-new";
import IconTitleTextList from "@/atomic/organism/icon-title-text-list";
import { IconTitleText } from "@/atomic/molecule/icon-title-text-elem";
import Header from "@/atomic/organism/header";
import BulletList from "@/atomic/molecule/bullet-list";
import CardImage from "@/atomic/molecule/card-image";
import CardTitleTextImage from "@/atomic/molecule/card-title-text-image";
import CardTitleText from "@/atomic/molecule/card-title-text";
import CardTitleSubtitle, { CardTitleSubtitleProps } from "@/atomic/molecule/card-title-subtitle";
import Review from "@/atomic/prototype/review";
import CardVitamin, * as VitaminCard from "@/atomic/molecule/card-vitamin";
import Accordion, * as VitaminAccordion from "@/atomic/molecule/accordion";
import { getAppId } from "@/service/AppleService";
import ScrollButton from "../atom/scroll-button";
import { Breadcrumb } from "@/atomic/organism/breadcrumb";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs";

interface VitaminGroup {
    groupName: string;
    header: {
        bgImg: VitaminAccordion.BackgroundImage;
        mobileBgResized: boolean;
        defaultExpanded?: boolean;
    };
    bgImg: VitaminCard.BackgroundImage;
    bgColor: React.CSSProperties["color"];
    primaryColor: React.CSSProperties["color"];
    linkHoverColor: React.CSSProperties["color"];
    itemList: string[];
}
const COMING_SOON_PAGES = new Set([
            "CHAGA_MUSHROOM",
            "CURCUMIN",
            "ASTRAGALUS",
            "LIONS_MANE",
            "COLLAGEN_PEPTIDES",
            "ASHWAGANDHA_EXTRACT",
            "GINKGO_BILOBA",
            "TURKEY_TAIL",
            "MACA",
            "FIREWEED_TEA",
            "CORDYCEPS_POWDER",
            "COCOA_POWDER",
            "KOMBUCHA"
]);
const vitamins: VitaminGroup[] = [
    {
        groupName: "VITAMIN_FAT",
        header: {
            bgImg: { src: "/img/page/vitamin/vitamin-list-header-fat-bg.svg", width: 114, height: 132 },
            mobileBgResized: false,
            defaultExpanded: true,
        },
        bgImg: { src: "/img/page/vitamin/vitamin-card-fat-soluble-bg.svg", width: 128, height: 92 },
        bgColor: "#fff3e9",
        primaryColor: "#e95813",
        linkHoverColor: "#ff8f32",
        itemList: ["VITAMIN_A", "VITAMIN_D", "VITAMIN_E", "VITAMIN_K"],
    },
    {
        groupName: "VITAMIN_WATER",
        header: {
            bgImg: { src: "/img/page/vitamin/vitamin-list-header-water-bg.svg", width: 134, height: 160 },
            mobileBgResized: true,
        },
        bgImg: { src: "/img/page/vitamin/vitamin-card-water-soluble-bg.svg", width: 124, height: 121 },
        bgColor: "#eaf1fd",
        primaryColor: "#0f75dc",
        linkHoverColor: "#399cff",
        itemList: [
            "VITAMIN_B1",
            "VITAMIN_B2",
            "VITAMIN_B3",
            "VITAMIN_B5",
            "VITAMIN_B6",
            "VITAMIN_B7",
            "VITAMIN_B9",
            "VITAMIN_B12",
            "VITAMIN_C",
        ],
    },
    {
        groupName: "MINERAL",
        header: {
            bgImg: { src: "/img/page/vitamin/vitamin-list-header-minerals-bg.svg", width: 144, height: 130 },
            mobileBgResized: true,
        },
        bgImg: { src: "/img/page/vitamin/vitamin-card-minerals-bg.svg", width: 129, height: 118 },
        bgColor: "#e5f4d9",
        primaryColor: "#388205",
        linkHoverColor: "#73c631",
        itemList: [
            "CALCIUM",
            "CHLORIDE",
            "CHROME",
            "COPPER",
            "IODINE",
            "IRON",
            "MAGNESIUM",
            "MANGANESE",
            "MOLYBDENUM",
            "PHOSPHORUS",
            "POTASSIUM",
            "SELENIUM",
            "SODIUM",
            "ZINC",
        ],
    },
    {
        groupName: "FOODADDITIVES",
        header: {
            bgImg: { src: "/img/page/vitamin/vitamin-list-header-FoodAdditives-bg.svg", width: 80, height: 110 },
            mobileBgResized: true,
        },
        bgImg: { src: "/img/page/vitamin/vitamin-card-FoodAdditives-bg.png", width: 100, height: 160 },
        bgColor: "#ECD6EAA3",
        primaryColor: "#AD43D7",
        linkHoverColor: "#CB30E0",
        itemList: [
            "ACAI",
            "ASHWAGANDHA_EXTRACT", 
            "ASTRAGALUS",
            "CHAGA_MUSHROOM",
            "COCOA_POWDER",
            "COLLAGEN_PEPTIDES",
            "CORDYCEPS_POWDER",
            "CURCUMIN",
            "FIREWEED_TEA",
            "GINKGO_BILOBA",
            "KOMBUCHA",
            "LIONS_MANE",
            "MACA",
            "TURKEY_TAIL"
        ],
    },
];

export default function Vitamin() {
    const appId = getAppId();
    const items = useBreadcrumbs();

    // const bgColor={background: "#1FF"}
    const advantages: Array<IconTitleText> = [
        {
            icon: {
                src: "/img/atom/icons/icon-defense.svg",
                alt: _("VITAMIN.ALT5_1"),
            },
            title: _("VITAMIN.LIST4.LI1_HEAD"),
            subtitle: _("VITAMIN.LIST4.LI1_TEXT"),
        },
        {
            icon: {
                src: "/img/atom/icons/icon-sync.svg",
                alt: _("VITAMIN.ALT5_2"),
            },
            title: _("VITAMIN.LIST4.LI2_HEAD"),
            subtitle: _("VITAMIN.LIST4.LI2_TEXT"),
        },
        {
            icon: {
                src: "/img/atom/icons/icon-no-auth.svg",
                alt: _("VITAMIN.ALT5_3"),
            },
            title: _("VITAMIN.LIST4.LI3_HEAD"),
            subtitle: _("VITAMIN.LIST4.LI3_TEXT"),
        },
        {
            icon: {
                src: "/img/atom/icons/icon-no-ads.svg",
                alt: _("VITAMIN.ALT5_4"),
            },
            title: _("VITAMIN.LIST4.LI4_HEAD"),
            subtitle: _("VITAMIN.LIST4.LI4_TEXT"),
        },
        {
            icon: {
                src: "/img/atom/icons/icon-bell.svg",
                alt: _("VITAMIN.ALT5_5"),
            },
            title: _("VITAMIN.LIST4.LI5_HEAD"),
            subtitle: _("VITAMIN.LIST4.LI5_TEXT"),
        },
        {
            icon: {
                src: "/img/atom/icons/icon-apple-health.svg",
                alt: _("VITAMIN.ALT5_6"),
            },
            title: _("VITAMIN.LIST4.LI6_HEAD"),
            subtitle: _("VITAMIN.LIST4.LI6_TEXT"),
        },
    ];

    const trackItems: CardTitleSubtitleProps[] = [
        {
            title: _("VITAMIN.LIST5.LI1_HEAD"),
            subtitle: _("VITAMIN.LIST5.LI1_TEXT"),
            bgImg: {
                src: "/img/page/vitamin/vitamin-track-fat-soluble-bg.svg",
                widthPerc: "90%",
                alignX: "start",
                alignY: "start",
                translateX: "-20%",
                translateY: "-22%",
            },
        },
        {
            title: _("VITAMIN.LIST5.LI2_HEAD"),
            subtitle: _("VITAMIN.LIST5.LI2_TEXT"),
            bgImg: {
                src: "/img/page/vitamin/vitamin-track-water-soluble-bg.svg",
                widthPerc: "70%",
                alignY: "start",
                translateX: "15%",
                translateY: "-25%",
            },
        },
        {
            title: _("VITAMIN.LIST5.LI3_HEAD"),
            subtitle: _("VITAMIN.LIST5.LI3_TEXT"),
            bgImg: {
                src: "/img/page/vitamin/vitamin-track-minerals-bg.svg",
                widthPerc: "55%",
                translateX: "30%",
                translateY: "15%",
            },
        },
        {
            title: _("VITAMIN.LIST5.LI4_HEAD"),
            subtitle: _("VITAMIN.LIST5.LI4_TEXT"),
            bgImg: {
                src: "/img/page/vitamin/vitamin-track-custom-bg.svg",
                widthPerc: "70%",
                translateX: "40%",
                translateY: "13%",
            },
        },
    ];

    return (
        <>
            <NavigationBar />

            <div className="ms-base-page vitamin">
                <div className="row">
                    <Breadcrumb items={items} />
                </div>
                <Header
                    title={_("VITAMIN.HEAD")}
                    appId={appId}
                    appDownloadTitle={_("VITAMIN.DWN")}
                    imgSrc="/img/page/vitamin/vitamin-header-en.webp"
                    imgAlt={_("VITAMIN.IMG")}
                    imgH={405}
                    imgW={550}
                >
                    <div className="vitamin">
                        <ul className="header-content-list">
                            <li>{_("VITAMIN.ABOUT_1")}</li>
                            <li>{_("VITAMIN.ABOUT_2")}</li>
                            <li>{_("VITAMIN.ABOUT_3")}</li>
                        </ul>
                    </div>
                </Header>

                <section>
                    <div className="row row-cols-xl-3 row-cols-1 g-4">
                        <div className="col col-md-4">
                            <CardTitleTextImage
                                title={_("VITAMIN.LIST1.LI1_HEAD")}
                                text={_("VITAMIN.LIST1.LI1_TEXT")}
                                imgSrc="/img/page/vitamin/vitamin-easy-use-en.webp"
                                imgH={239}
                                imgW={400}
                                imgAlt={_("VITAMIN.ALT6")}
                            />
                        </div>
                        <div className="col col-md-4 p-0">
                            <div className="row row-cols-1 h-100 p-0">
                                <div className="col py-0">
                                    <CardTitleText
                                        title={_("VITAMIN.LIST1.LI2_HEAD")}
                                        text={_("VITAMIN.LIST1.LI2_TEXT")}
                                        bgColor="#E5F4D9"
                                    />
                                </div>
                                <div className="col py-0 mt-4">
                                    <CardTitleText
                                        title={_("VITAMIN.LIST1.LI3_HEAD")}
                                        text={_("VITAMIN.LIST1.LI3_TEXT")}
                                        bgColor="#E5EEFF"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-4 col-md-4">
                            <CardImage
                                imgSrc="/img/page/vitamin/vitamin-watches-en.webp"
                                imgH={720}
                                imgW={664}
                                imgAlt={_("VITAMIN.ALT4")}
                                bgColor="#F2F2F5"
                            />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row">
                        <div className="col-lg-6">
                            <ImageI18N
                                src="/img/page/vitamin/vitamin-screen-edit-en.webp"
                                w={487}
                                h={515}
                                cls="ms-base-image d-none d-lg-block"
                                alt={_("VITAMIN.ALT2")}
                            />
                        </div>
                        <div className="col-lg-6">
                            <h2>{_("VITAMIN.HEAD3")}</h2>
                            <p>{_("VITAMIN.DESC3_1")}</p>
                            <ImageI18N
                                src="/img/page/vitamin/vitamin-screen-edit-en.webp"
                                w={487}
                                h={515}
                                cls="ms-base-image d-block d-lg-none mb-mob-xs"
                                alt={_("VITAMIN.ALT2")}
                            />
                            <h3>{_("VITAMIN.DESC3_2")}</h3>
                            <BulletList
                                items={[
                                    _("VITAMIN.LIST3.LI1_TEXT"),
                                    _("VITAMIN.LIST3.LI2_TEXT"),
                                    _("VITAMIN.LIST3.LI3_TEXT"),
                                    _("VITAMIN.LIST3.LI4_TEXT"),
                                    _("VITAMIN.LIST3.LI5_TEXT"),
                                    _("VITAMIN.LIST3.LI6_TEXT"),
                                ]}
                                iconColor="#1686FF"
                                className="bullet-list"
                            />
                        </div>
                    </div>
                </section>

                <section className="bg-gray">
                    <div className="row">
                        <div className="col-12 mb-2">
                            <h2>{_("VITAMIN.HEAD4")}</h2>
                        </div>
                        <div className="col-12">
                            <IconTitleTextList items={advantages} />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row mb-0">
                        <h2 className="col-xl-6 col-lg-8 col-12 mb-5">{_("VITAMIN.HEAD5")}</h2>
                        <div className="row row-cols-xl-2 row-cols-1 row-cols-md-2 mb-0 p-0 g-4">
                            <div className="col px-0">
                                <ul className="row row-cols-2 p-0 g-4">
                                    {trackItems.map((item) => (
                                        <li key={item.title} className="col">
                                            <CardTitleSubtitle {...item} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="col">
                                <CardImage
                                    imgSrc="/img/page/vitamin/vitamin-screen-minr-en.webp"
                                    imgH={722}
                                    imgW={840}
                                    imgAlt={_("VITAMIN.ALT2")}
                                    bgColor="#F4F5F8"
                                    alignItems="end"
                                    justifyContent="end"
                                />
                            </div>
                        </div>
                    </div>
                    {vitamins.filter(group => group.groupName !== "FOODADDITIVES").map(({ groupName, header, bgImg, bgColor, primaryColor, linkHoverColor, itemList }) => (
                        <section key={`vitamins-group-${groupName}`} className="row mt-4 mt-lg-5 pt-4 mb-0">
                            <div className="col-12 d-flex flex-column">
                                <Accordion
                                    title={_(`VITAMIN.${groupName}.NAME`)}
                                    bgColor={bgColor}
                                    expandIconColor={primaryColor}
                                    bgImg={header.bgImg}
                                    mobileBgResized={header.mobileBgResized}
                                    defaultExpanded={header.defaultExpanded}
                                >
                                    <ul className="d-grid vitamin-list">
                                        {itemList.map((vit) => (
                                            <li key={vit}>
                                                <CardVitamin
                                                    title={_(`VITAMIN.${vit}.HEAD`)}
                                                    subtitle={_(`VITAMIN.${vit}.NAME`)}
                                                    description={_(`VITAMIN.${vit}.DESK`)}
                                                    actionLink={{
                                                        text: _("VITAMIN.BTN_GO"),
                                                        href: Locale.i18nLink(`vitamin/${vit.toLowerCase()}`),
                                                    }}
                                                    bgColor={bgColor}
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
                    {vitamins.filter(group => group.groupName === "FOODADDITIVES").map(({ groupName, header, bgImg, bgColor, primaryColor, linkHoverColor, itemList }) => (
                        <section key={`articles-group-${groupName}`} className="row mt-4 mt-lg-5 pt-4 mb-0">
                            <div className="col-12 d-flex flex-column">
                                <Accordion
                                    title={_(`VITAMIN.${groupName}.NAME`)}
                                    bgColor={bgColor}
                                    expandIconColor={primaryColor}
                                    bgImg={header.bgImg}
                                    mobileBgResized={header.mobileBgResized}
                                    defaultExpanded={header.defaultExpanded}
                                >
                                    <ul className="d-grid vitamin-list">
                                        {itemList.map((article) => (
                                            <li key={article}>
                                                <CardVitamin
                                                    title={_(`VITAMIN.${article}.HEAD`)}
                                                    subtitle={_(`VITAMIN.${article}.NAME`)}
                                                    description={_(`VITAMIN.${article}.DESK`)}
                                                    actionLink={{
                                                        text: _("VITAMIN.BTN_GO"),
                                                        href: COMING_SOON_PAGES.has(article)
                                                            ? Locale.i18nLink("coming-soon")
                                                            : Locale.i18nLink(`vitamin/${article.toLowerCase()}`),
                                                    }}
                                                    bgColor={bgColor}
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
                    themeColor="#1686FF"
                    hasUnderlineHover={false}
                />

                <section>
                    <CallToAction
                        // bgColor={bg_color}
                        title={_("VITAMIN.HEAD6")}
                        subtitle={_("VITAMIN.DESC6")}
                        appId={appId}
                        appDownloadTitle={_("VITAMIN.DWN")}
                        imgSrc="/img/org/call-to-action/vitamin/Img-CallToAction-en.webp"
                        imgAlt={_("VITAMIN.ALT3")}
                    />
                </section>
            </div>
            <Footer />
            <ScrollButton />
        </>
    );
}
