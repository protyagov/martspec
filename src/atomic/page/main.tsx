import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import Header from "@/atomic/organism/header";
import Counter from "@/atomic/atom/counter";
import ScrollButton from "@/atomic/atom/scroll-button";
import Review from "@/atomic/prototype/review";
import CardAppSmall from "@/atomic/molecule/card-app-small";
import CardAppLarge from "@/atomic/molecule/card-app-large";
import ImageI18N from "@/atomic/atom/img-i18n";

const getRandomArbitrary = (min: number, max: number) => Math.floor(Math.random() * (max + 1 - min) + min);

const selectedApps = {
    vitamin: { id: 1519596234, themeColor: "#1686FF" },
    emotion: { id: 1562956213, themeColor: "#7B62FE" },
    bodysize: { id: 1564205068, themeColor: "#FD7E14" },
} as const;

const allApps = Object.values(selectedApps);

export default function LandingPage() {
    const randomIndex = getRandomArbitrary(0, allApps.length - 1);
    const pick = allApps[randomIndex];
    return (
        <div className="flex-grow-1 flex-shrink-0">
            <NavigationBar />

            <div className="ms-base-page">
                <Header
                    title={_("MAIN.HEAD")}
                    rowItems={
                        <>
                            <Counter
                                title={_("MAIN.COUNTERS.COUNTER_1.NUM")}
                                subtitle={_("MAIN.COUNTERS.COUNTER_1.TEXT")}
                                altText={_("MAIN.COUNTERS.COUNTER_1.ALT")}
                            />
                            <Counter
                                title={_("MAIN.COUNTERS.COUNTER_2.NUM")}
                                subtitle={_("MAIN.COUNTERS.COUNTER_2.TEXT")}
                                altText={_("MAIN.COUNTERS.COUNTER_2.ALT")}
                            />
                            <Counter
                                title={_("MAIN.COUNTERS.COUNTER_3.NUM")}
                                subtitle={_("MAIN.COUNTERS.COUNTER_3.TEXT")}
                                altText={_("MAIN.COUNTERS.COUNTER_3.ALT")}
                            />
                        </>
                    }
                    imgSrc="/img/page/main/Img-Header-en.webp"
                    imgH={405}
                    imgW={550}
                    imgAlt={_("MAIN.ALT")}
                >
                    <p className="font-normal mb-1">{_("MAIN.SUBHEAD")}</p>
                </Header>
            </div>

            <section className="ms-s-offset mb-0 ms-base-new ms-base-page">
                <div className="d-flex flex-lg-row flex-column align-items-center p-0 " style={{ gap: "5rem" }}>
                    <div className="col-lg-6">
                        <ImageI18N
                            src="/img/page/main/Img-Simplify-life.webp"
                            w={620}
                            h={390}
                            cls="ms-base-image mt-mob-xs"
                            alt={_("MAIN.ALT2")}
                        />
                    </div>
                    <div>
                        <h2 className="mb-5 m-0" style={{ fontSize: "3.08rem" }}>
                            {_("MAIN.HEAD2")}
                        </h2>
                        <ul
                            className="d-flex flex-column gap-4 simplify-life-list"
                            style={{ listStyleType: "disc", paddingLeft: "1.4rem" }}
                        >
                            <li>
                                <strong>{_("MAIN.LIST.LI1_HEAD")}</strong>
                                {_("MAIN.LIST.LI1_TEXT")}
                            </li>
                            <li>
                                <strong>{_("MAIN.LIST.LI2_HEAD")}</strong>
                                {_("MAIN.LIST.LI2_TEXT")}
                            </li>
                            <li>
                                <strong>{_("MAIN.LIST.LI3_HEAD")}</strong>
                                {_("MAIN.LIST.LI3_TEXT")}
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="ms-s-offset ms-s-product">
                <h1 className="mb-5 pb-5 display-5 h1 fw-bold">{_("MAIN.OUR_PRODUCTS")}</h1>
                <div className="row mb-5">
                    <div className="col-12">
                        {/* Витамин */}
                        <CardAppLarge
                            backgroundColor="#F9F9FF"
                            iconSrc="/img/page/vitamin/logo-vitamin.svg"
                            iconAlt={_("VITAMIN.ICO")}
                            title={_("VITAMIN.HEAD")}
                            subtitle={_("VITAMIN.SUBHEAD")}
                            content={_("VITAMIN.TEXT")}
                            button={{
                                text: _("VITAMIN.BUTTON_OPEN"),
                                link: Locale.i18nLink("vitamin"),
                                color: "#1686FF",
                            }}
                            imageSrc="/img/page/vitamin/Img-Our-Products-Vitamin-en.webp"
                            imageAlt={_("VITAMIN.IMG")}
                            isImageOnLeft={false}
                        />
                    </div>
                </div>

                <div className="row g-3 gap-10-responsive align-items-stretch mb-5">
                    <div className="col-xl col-sm d-flex">
                        {/* Нутриенты */}
                        <CardAppSmall
                            backgroundColor="transparent"
                            iconSrc="/img/page/vitamin/vitamin-ring-icon-main-page.svg"
                            iconAlt={_("VITAMIN.ICO1")}
                            title={_("VITAMIN.HEAD1")}
                            subtitle={_("VITAMIN.SUBHEAD1")}
                            content={_("VITAMIN.TEXT1")}
                            button={{
                                buttonType: "ButtonChevronRight",
                                text: _("VITAMIN.BUTTON_OPEN_NUTRIENTS"),
                                link: Locale.i18nLink("vitamin"),
                                color: "#1686FF",
                            }}
                        />
                    </div>
                    <div className="col-xl col-sm d-flex">
                        {/* Электролит */}
                        <CardAppSmall
                            backgroundColor="transparent"
                            iconSrc="/img/page/electrolyte/electrolyte-icon-main-page.png"
                            iconAlt={_("ELECTROLYTE.ICO")}
                            title={_("ELECTROLYTE.HEAD")}
                            subtitle={_("ELECTROLYTE.SUBHEAD")}
                            content={_("ELECTROLYTE.TEXT1")}
                            button={{
                                buttonType: "ButtonChevronRight",
                                text: _("ELECTROLYTE.BUTTON_OPEN"),
                                link: Locale.i18nLink("electrolyte"),
                                color: "#1686FF",
                            }}
                        />
                    </div>
                    <div className="col-xl col-sm-12 d-flex">
                        {/* Цинк */}
                        <CardAppSmall
                            backgroundColor="transparent"
                            iconSrc="/img/page/zinc/zinc-icon-main-page.svg"
                            iconAlt={_("ZINC.ICO")}
                            title={_("ZINC.HEAD")}
                            subtitle={_("ZINC.SUBHEAD")}
                            content={_("ZINC.TEXT1")}
                            button={{
                                buttonType: "ButtonChevronRight",
                                text: _("ZINC.BUTTON_OPEN"),
                                link: Locale.i18nLink("bodyzinc"),
                                color: "#1686FF",
                            }}
                        />
                    </div>
                </div>

                <div className="col-12 mb-5">
                    {/* Фигура */}
                    <CardAppLarge
                        backgroundColor="#F9F9FF"
                        iconSrc="/img/page/body-size/bodysize-icon-main-page.svg"
                        iconAlt={_("SIZE.ICO")}
                        title={_("SIZE.HEAD")}
                        subtitle={_("SIZE.SUBHEAD")}
                        content={_("SIZE.TEXT")}
                        button={{
                            text: _("SIZE.BUTTON_OPEN"),
                            link: Locale.i18nLink("bodysize"),
                            color: "#1686FF",
                        }}
                        imageSrc="/img/page/body-size/body-size-main-page.webp"
                        imageAlt={_("VITAMIN.IMG")}
                        isImageOnLeft={true}
                    />
                </div>

                <div className="row mb-5">
                    <div className="col-12 col-md-6 d-flex mb-3 mb-md-0">
                        {/* Вес */}
                        <CardAppSmall
                            backgroundColor="transparent"
                            iconSrc="/img/page/body-mass/body-mass-icon-main-page.svg"
                            iconAlt={_("MASS.ICO")}
                            title={_("MASS.HEAD")}
                            subtitle={_("MASS.SUBHEAD")}
                            content={_("MASS.TEXT")}
                            button={{
                                buttonType: "ButtonChevronRight",
                                text: _("MASS.BUTTON_OPEN"),
                                link: Locale.i18nLink("bodymass"),
                                color: "#1686FF",
                            }}
                        />
                    </div>
                    <div className="col-12 col-md-6 d-flex">
                        {/* Талия */}
                        <CardAppSmall
                            backgroundColor="transparent"
                            iconSrc="/img/page/waistline/waist-icon-main-page.svg"
                            iconAlt={_("WAIST.ICO")}
                            title={_("WAIST.HEAD")}
                            subtitle={_("WAIST.SUBHEAD")}
                            content={_("WAIST.TEXT")}
                            button={{
                                buttonType: "ButtonChevronRight",
                                text: _("WAIST.BUTTON_OPEN"),
                                link: Locale.i18nLink("waistline"),
                                color: "#1686FF",
                            }}
                        />
                    </div>
                </div>

                <div className="col-12 mb-5">
                    {/* Эмоция */}
                    <CardAppLarge
                        backgroundColor="#F9F9FF"
                        iconSrc="/img/page/emotion/emotion-icon-main-page.png"
                        iconAlt={_("EMOTION.ICO")}
                        title={_("EMOTION.HEAD")}
                        subtitle={_("EMOTION.SUBHEAD")}
                        content={_("EMOTION.TEXT")}
                        button={{
                            text: _("EMOTION.BUTTON_OPEN"),
                            link: Locale.i18nLink("emotion"),
                            color: "#1686FF",
                        }}
                        imageSrc="/img/page/emotion/Img-Our-Products-Emotion-en.webp"
                        imageAlt={_("EMOTION.IMG")}
                        isImageOnLeft={false}
                    />
                </div>

                <div className="row g-3 d-flex align-items-stretch mb-5">
                    <div className="col-xl-4 col-sm-6 d-flex">
                        {/* Магний */}
                        <CardAppSmall
                            backgroundColor="transparent"
                            iconSrc="/img/magnesium-icon-main-page.svg"
                            iconAlt={_("MAGNESIUM.ICO")}
                            title={_("MAGNESIUM.HEAD")}
                            subtitle={_("MAGNESIUM.SUBHEAD")}
                            content={_("MAGNESIUM.TEXT")}
                            button={{
                                buttonType: "LinkStyledButton",
                                text: _("MAGNESIUM.BUTTON_OPEN"),
                                link: Locale.i18nLink("magnesium"),
                                color: "#E5EEFF",
                                textColor: "#1686FF",
                            }}
                        />
                    </div>
                    <div className="col-xl-4 col-sm-6 d-flex">
                        {/* Кальций */}
                        <CardAppSmall
                            backgroundColor="transparent"
                            iconSrc="/img/calcium-icon-main-page.svg"
                            iconAlt={_("CALCIUM.ICO")}
                            title={_("CALCIUM.HEAD")}
                            subtitle={_("CALCIUM.SUBHEAD")}
                            content={_("CALCIUM.TEXT")}
                            button={{
                                buttonType: "LinkStyledButton",
                                text: _("CALCIUM.BUTTON_OPEN"),
                                link: Locale.i18nLink("coming-soon"),
                                color: "#E5EEFF",
                                textColor: "#1686FF",
                            }}
                        />
                    </div>
                    <div className="col-xl-4 col-sm-12 d-flex">
                        {/* Железо */}
                        <CardAppSmall
                            backgroundColor="transparent"
                            iconSrc="/img/iron-icon-main-page.svg"
                            iconAlt={_("IRON.ICO")}
                            title={_("IRON.HEAD")}
                            subtitle={_("IRON.SUBHEAD")}
                            content={_("IRON.TEXT")}
                            button={{
                                buttonType: "LinkStyledButton",
                                text: _("IRON.BUTTON_OPEN"),
                                link: Locale.i18nLink("iron"),
                                color: "#E5EEFF",
                                textColor: "#1686FF",
                            }}
                        />
                    </div>
                </div>
                <div className="col-12 mb-5 energy-card">
                    {/* Энергия */}
                    <CardAppLarge
                        backgroundColor="#F9F9FF"
                        iconSrc="/img/page/energy/energy-icon-main-page.svg"
                        iconAlt={_("ENERGY.ICO_MAIN")}
                        title={_("ENERGY.HEAD_MAIN")}
                        subtitle={_("ENERGY.SUBHEAD_MAIN")}
                        content={_("ENERGY.TEXT_MAIN")}
                        button={{
                            text: _("ENERGY.BUTTON_OPEN"),
                            link: Locale.i18nLink("emotion/energy"),
                            color: "#E5EEFF",
                            textColor: "#1686FF",
                        }}
                        imageSrc="/img/page/energy/energy-main-page.webp"
                        imageAlt={_("ENERGY.IMG")}
                        isImageOnLeft={true}
                    />
                </div>
            </section>

            {/*
                    div wrapper for proper side margins and fonts, 
                    it's only needed for this page 
                    and can be easily removed when this page is redesigned.
                */}
            <div className="ms-base-page ms-base-new">
                <Review
                    appId={pick.id}
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
                    themeColor={pick.themeColor}
                    hasUnderlineHover={false}
                />
            </div>

            {/* <ContactUs setIsLoading={setIsLoading} /> */}
            <Footer />
            <ScrollButton />
        </div>
    );
}
