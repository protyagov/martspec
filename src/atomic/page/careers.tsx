import React from "react";
import _, { Locale } from "@/i18n/locale";
import NavigationBar from "@/atomic/organism/navbar";
import { Footer } from "@/atomic/organism/footer";
import TitleTextCard from "@/atomic/molecule/title-text-card";
import TitleTextLinkCard from "@/atomic/molecule/title-text-link-card";
import ScrollButton from "@/atomic/atom/scroll-button";
import Header from "@/atomic/organism/header";

const careers = [
    {
        id: "designer",
        getTitle: () => _("CAREERS.LIST3.LI1_HEAD"),
        getText: () => _("CAREERS.LIST3.LI1_TEXT"),
        image: "/img/page/careers/vacancy-pic-webdesigner.webp",
        getAlt: () => _("CAREERS.LIST3.LI1_HEAD"),
    },
    {
        id: "ios-engineer",
        getTitle: () => _("CAREERS.LIST3.LI2_HEAD"),
        getText: () => _("CAREERS.LIST3.LI2_TEXT"),
        image: "/img/page/careers/vacancy-pic-mobiledesigner.webp",
        getAlt: () => _("CAREERS.LIST3.LI2_HEAD"),
    },
    {
        id: "frontend-engineer",
        getTitle: () => _("CAREERS.LIST3.LI3_HEAD"),
        getText: () => _("CAREERS.LIST3.LI3_TEXT"),
        image: "/img/page/careers/vacancy-pic-frontend.webp",
        getAlt: () => _("CAREERS.LIST3.LI3_HEAD"),
    },
    {
        id: "qa-engineer",
        getTitle: () => _("CAREERS.LIST3.LI4_HEAD"),
        getText: () => _("CAREERS.LIST3.LI4_TEXT"),
        image: "/img/page/careers/vacancy-pic-qa.webp",
        getAlt: () => _("CAREERS.LIST3.LI4_HEAD"),
    },
    {
        id: "business-analyst",
        getTitle: () => _("CAREERS.LIST3.LI5_HEAD"),
        getText: () => _("CAREERS.LIST3.LI5_TEXT"),
        image: "/img/page/careers/vacancy-pic-ba.webp",
        getAlt: () => _("CAREERS.LIST3.LI5_HEAD"),
    },
    {
        id: "copywriter",
        getTitle: () => _("CAREERS.LIST3.LI6_HEAD"),
        getText: () => _("CAREERS.LIST3.LI6_TEXT"),
        image: "/img/page/careers/vacancy-pic-copywriter.webp",
        getAlt: () => _("CAREERS.LIST3.LI6_HEAD"),
    },
];

const rowItemsData = [
    { text: _("CAREERS.PROP_1"), bgColor: "#E5F4D9" },
    { text: _("CAREERS.PROP_2"), bgColor: "#F1F6FF" },
    { text: _("CAREERS.PROP_3"), bgColor: "#FFE9E9" },
];

const Careers = () => {
    return (
        <>
            <NavigationBar />
            <div className="ms-base-page ms-base-new careers">
                <Header
                    title={_("CAREERS.SUBHEAD")}
                    content={<p className="font-normal">{_("CAREERS.ABOUT")}</p>}
                    rowItems={
                        <>
                            {rowItemsData.map((item, index) => (
                                <div key={index} className="row-item" style={{ backgroundColor: item.bgColor}}>
                                    {item.text}
                                </div>
                            ))}
                        </>
                    }
                    imgSrc="/img/page/careers/careers-header-img.webp"
                    imgH={496}
                    imgW={674}
                    imgAlt={_("MAIN.ALT")}
                />

                <section>
                    <div className="row">
                        <div className="col-lg-6">
                            <h2>{_("CAREERS.HEAD1")}</h2>
                            <p className="mb-4">{_("CAREERS.TEXT1_1")}</p>
                            <p className="mb-4">{_("CAREERS.TEXT1_2")}</p>
                            <p className="mb-4">{_("CAREERS.TEXT1_3")}</p>
                        </div>
                        <div className="col-lg-6">
                            <img
                                src="/img/page/careers/main-pic-middle.webp"
                                width={600}
                                height={429}
                                className="ms-base-image mt-mob-xs"
                                alt={_("CAREERS.ALT1")}
                            />
                        </div>
                        <div>
                            <a href={Locale.i18nLink("team")} className="mt-2 ms-btn-large">
                                {_("CAREERS.BUTTON1")}
                            </a>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="row g-4">
                        <h2>{_("CAREERS.HEAD2")}</h2>
                        <TitleTextCard
                            title={_("CAREERS.LIST2.LI1_HEAD")}
                            text={_("CAREERS.LIST2.LI1_TEXT")}
                            bgColor="#FFB34066"
                        />
                        <TitleTextCard
                            title={_("CAREERS.LIST2.LI2_HEAD")}
                            text={_("CAREERS.LIST2.LI2_TEXT")}
                            bgColor="#3D9AD166"
                        />
                        <TitleTextCard
                            title={_("CAREERS.LIST2.LI3_HEAD")}
                            text={_("CAREERS.LIST2.LI3_TEXT")}
                            bgColor="#FFB34066"
                        />
                    </div>
                </section>

                <section>
                    <div className="row g-4">
                        <h2>{_("CAREERS.HEAD3")}</h2>
                        {careers.map(({ id, getTitle, getText, image, getAlt }) => (
                            <TitleTextLinkCard
                                key={id}
                                title={getTitle()}
                                text={getText()}
                                link={{
                                    href: Locale.i18nLink(`careers/${id}`),
                                    text: _("CAREERS.BUTTON3"),
                                }}
                                gridColumnClass="col-lg-4 col-md-6"
                                hasShadow={false}
                                borderClass="bordered"
                                image={image}
                                imageOpacity={0.3}
                                alt={getAlt()}
                                arrowImage={<img src="/img/arrow-right.svg" width={7} height="auto"/>}
                                color="#248ce1"
                                hoverColor="#0a58ca"
                                imageZIndex={0}
                                fontFamily="os6"
                                fontSize="1rem"
                            />
                        ))}
                    </div>
                </section>
            </div>
            <Footer />
            <ScrollButton />
        </>
    );
};

export default Careers;
