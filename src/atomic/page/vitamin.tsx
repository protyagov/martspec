import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import VitaminItem from "@/atomic/molecule/vitamin-item";
import PageHeader from "@/atomic/molecule/page-header";
import ImageI18N from "@/atomic/atom/img-i18n";
import CallToAction from "@/atomic/organism/call-to-action";
import IconTitleTextList from "@/atomic/organism/icon-title-text-list";
import { IconTitleText } from "@/atomic/molecule/icon-title-text-elem";
import Header from "@/atomic/organism/header";
import BulletList from "@/atomic/molecule/bullet-list";
import CardImage from "@/atomic/molecule/card-image";
import CardTitleTextImage from "@/atomic/molecule/card-title-text-image";
import CardTitleText from "@/atomic/molecule/card-title-text";
import CardTitleSubtitle, { CardTitleSubtitleProps } from "@/atomic/molecule/card-title-subtitle";
import CardVitamin, * as VitaminCard from "@/atomic/molecule/card-vitamin";

interface VitaminGroup {
    groupName: string;
    bgImg: VitaminCard.BackgroundImage;
    bgColor: React.CSSProperties["color"];
    primaryColor: React.CSSProperties["color"];
    linkColor: React.CSSProperties["color"];
    vitaminList: string[];
}

const vitamins: VitaminGroup[] = [
    {
        groupName: "VITAMIN_FAT",
        bgImg: { src: "/img/page/vitamin/vitamin-card-fat-soluble-bg.svg", width: 128, height: 92 },
        bgColor: "#fff3e9",
        primaryColor: "#c04c05",
        linkColor: "#b05905",
        vitaminList: ["VITAMIN_A", "VITAMIN_D", "VITAMIN_E", "VITAMIN_K"],
    },
    {
        groupName: "VITAMIN_WATER",
        bgImg: { src: "/img/page/vitamin/vitamin-card-water-soluble-bg.svg", width: 124, height: 121 },
        bgColor: "#eaf1fd",
        primaryColor: "#0866eb",
        linkColor: "#2563c8",
        vitaminList: [
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
        bgImg: { src: "/img/page/vitamin/vitamin-card-minerals-bg.svg", width: 129, height: 118 },
        bgColor: "#e5f4d9",
        primaryColor: "#307d02",
        linkColor: "#406c30",
        vitaminList: [
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
];

export default function Vitamin() {
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

            <div className="ms-base-page ms-base-new vitamin">
                <Header
                    title={_("VITAMIN.HEAD")}
                    appId={1519596234}
                    appDownloadTitle={_("VITAMIN.DWN")}
                    imgSrc="/img/page/vitamin/vitamin-header-en.webp"
                    imgAlt={_("VITAMIN.IMG")}
                    imgH={531}
                    imgW={722}
                    content={
                        <ul className="header-content-list">
                            <li>{_("VITAMIN.ABOUT_1")}</li>
                            <li>{_("VITAMIN.ABOUT_2")}</li>
                            <li>{_("VITAMIN.ABOUT_3")}</li>
                        </ul>
                    }
                />

                <section>
                    <div className="row row-cols-xl-3 row-cols-md-2 row-cols-1 g-4">
                        <div className="col">
                            <CardTitleTextImage
                                title={_("VITAMIN.LIST1.LI1_HEAD")}
                                text={_("VITAMIN.LIST1.LI1_TEXT")}
                                imgSrc="/img/page/vitamin/vitamin-easy-use-en.webp"
                                imgH={239}
                                imgW={400}
                                imgAlt={_("VITAMIN.ALT6")}
                            />
                        </div>
                        <div className="col p-0">
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
                        <div className="col col-md-12">
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
                            <h2>{_("VITAMIN.HEAD2")}</h2>
                            <p className="mb-4">{_("VITAMIN.DESC2_1")}</p>
                            <p className="mb-4">{_("VITAMIN.DESC2_2")}</p>
                            <p className="mb-0">{_("VITAMIN.DESC2_3")}</p>
                        </div>
                        <div className="col-lg-6">
                            <ImageI18N
                                src="/img/page/vitamin/vitamin-screen-desc-en.webp"
                                w={390}
                                h={515}
                                cls="ms-base-image mt-mob-xs"
                                alt={_("VITAMIN.ALT1")}
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
                                _("VITAMIN.LIST3.LI6_TEXT")
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
                        <div className="row row-cols-xl-2 row-cols-1 mb-0 p-0 g-4">
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

                    {vitamins.map(({ groupName, bgImg, bgColor, primaryColor, linkColor, vitaminList }) => (
                        <section key={`vitamins-group-${groupName}`} className="row mt-5 pt-4 mb-0">
                            <div className="col-12 mb-5">
                                <h3
                                    className="p-4 mb-0 rounded-4"
                                    style={{ backgroundColor: bgColor, color: "#212529" }}
                                >
                                    {_(`VITAMIN.${groupName}.NAME`)}
                                </h3>
                            </div>
                            <ul className="row row-cols-1 row-cols-md-2 row-cols-xl-3 row-cols-xxl-4 p-0 g-4">
                                {vitaminList.map((vit) => (
                                    <li key={vit} className="col">
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
                                            linkColor={linkColor}
                                            bgImg={bgImg}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </section>
                    ))}
                </section>

                <section>
                    <CallToAction
                        // bgColor={bg_color}
                        title={_("VITAMIN.HEAD6")}
                        subtitle={_("VITAMIN.DESC6")}
                        appId={1519596234}
                        appDownloadTitle={_("VITAMIN.DWN")}
                        imgSrc="/img/org/call-to-action/vitamin/vitamin-screen-app-en.webp"
                        imgAlt={_("VITAMIN.ALT3")}
                    />
                    {/* <div>
                            <h2>{_("VITAMIN.HEAD6")}</h2>
                            <p className="flex-grow-1">{_("VITAMIN.DESC6")}</p>
                            <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1519596234?l=${Locale.language}`}
                                target="_blank" title={_("VITAMIN.DWN")} className="ms-btn-apple mt-5 mx-lg-0 mx-auto"
                                style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                            </a>
                        </div>
                        <ImageI18N src="/img/page/vitamin/vitamin-screen-app-en.webp" w={400} h={400} cls="ms-base-image ms-lg-auto me-lg-0" alt={_("VITAMIN.ALT4")} /> */}
                    {/* </div> */}
                    {/* </div> */}
                </section>
            </div>
            <Footer />
        </>
    );
}
