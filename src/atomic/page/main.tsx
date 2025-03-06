import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import Header from "@/atomic/organism/header";
import Counter from "@/atomic/atom/counter";
import ImageI18N from "@/atomic/atom/img-i18n";
import ScrollButton from "@/atomic/atom/scroll-button";
import appIds from "@/data/app-ids.json";
import Review from "@/atomic/prototype/review";
import CardAppSmall from "@/atomic/molecule/card-app-small";
import CardAppLarge from "@/atomic/molecule/card-app-large";

const getRandomArbitrary = (min: number, max: number) => Math.floor(Math.random() * (max + 1 - min) + min);
const allAppIds = Object.values(appIds);

export default function LandingPage() {
    return (
        <div className="flex-grow-1 flex-shrink-0">
            <NavigationBar />

            <div className="ms-base-page ms-base-new">
                <Header
                    title={_("MAIN.HEAD")}
                    content={<p className="font-normal mb-1">{_("MAIN.SUBHEAD")}</p>}
                    rowItems={
                        <>
                            <Counter
                                title={_("MAIN.COUNTERS.COUNTER_1.NUM")}
                                subtitle={_("MAIN.COUNTERS.COUNTER_1.TEXT")}
                            />
                            <Counter
                                title={_("MAIN.COUNTERS.COUNTER_2.NUM")}
                                subtitle={_("MAIN.COUNTERS.COUNTER_2.TEXT")}
                            />
                            <Counter
                                title={_("MAIN.COUNTERS.COUNTER_3.NUM")}
                                subtitle={_("MAIN.COUNTERS.COUNTER_3.TEXT")}
                            />
                        </>
                        }
                    imgSrc="/img/main-page-header-ru.webp"
                    imgH={496}
                    imgW={674}
                    imgAlt={_("MAIN.ALT")}
                />
            </div>

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
                                text: _("CAREERS.BUTTON3"),
                                link: Locale.i18nLink("vitamin"),
                                color: "#1686FF",
                            }}
                            imageSrc="/img/page/vitamin/Img-Our-Products-Vitamin-en.webp"
                            imageAlt={_("VITAMIN.IMG")}
                            isImageOnLeft={false}
                        />
                    </div>
                </div>
                
                <div className="row g-3 d-flex align-items-stretch mb-5">
                    <div className="col-xl-4 col-sm-6 d-flex">
                        {/* Кольцо Витамин */}
                        <CardAppSmall
                            backgroundColor="transparent"
                            iconSrc="/img/page/vitamin/vitamin-ring-icon-main-page.svg"
                            iconAlt={_("VITAMIN.ICO1")}
                            title={_("VITAMIN.HEAD1")}
                            subtitle={_("VITAMIN.SUBHEAD1")}
                            content={_("VITAMIN.TEXT1")}
                            button={{
                                text: _("CAREERS.BUTTON3"),
                                link: Locale.i18nLink("vitamin"),
                                color: "#1686FF",
                            }}
                        />
                    </div>
                    <div className="col-xl-4 col-sm-6 d-flex">
                        {/* Электролит */}
                        <CardAppSmall
                            backgroundColor="transparent"
                            iconSrc="/img/page/electrolyte/electrolyte-icon-main-page.svg"
                            iconAlt={_("ELECTROLYTE.ICO")}
                            title={_("ELECTROLYTE.HEAD")}
                            subtitle={_("ELECTROLYTE.SUBHEAD")}
                            content={_("ELECTROLYTE.TEXT1")}
                            button={{
                                text: _("CAREERS.BUTTON3"),
                                link: Locale.i18nLink("electrolyte"),
                                color: "#1686FF",
                            }}
                        />
                    </div>
                    <div className="col-xl-4 col-sm-12 d-flex">
                        {/* Цинк */}
                        <CardAppSmall
                            backgroundColor="transparent"
                            iconSrc="/img/page/zinc/zinc-icon-main-page.svg"
                            iconAlt={_("ZINC.ICO")}
                            title={_("ZINC.HEAD")}
                            subtitle={_("ZINC.SUBHEAD")}
                            content={_("ZINC.TEXT1")}
                            button={{
                                text: _("CAREERS.BUTTON3"),
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
                            text: _("CAREERS.BUTTON3"),
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
                                text: _("CAREERS.BUTTON3"),
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
                                text: _("CAREERS.BUTTON3"),
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
                            text: _("CAREERS.BUTTON3"),
                            link: Locale.i18nLink("emotion"),
                            color: "#1686FF",
                        }}
                        imageSrc="/img/page/emotion/Img-Our-Products-Emotion-en.webp"
                        imageAlt={_("EMOTION.IMG")}
                        isImageOnLeft={false}
                    />
                </div>

                <div className="col-12 mb-5 energy-card">
                    {/* Энергия */}
                    <CardAppLarge
                        backgroundColor="#fff"
                        iconSrc="/img/page/energy/energy-icon-main-page.svg"
                        iconAlt={_("ENERGY.ICO_MAIN")}
                        title={_("ENERGY.HEAD_MAIN")}
                        subtitle={_("ENERGY.SUBHEAD_MAIN")}
                        content={_("ENERGY.TEXT_MAIN")}
                        button={{
                            text: _("COMING_SOON.SOON_BTN"),
                            link: Locale.i18nLink("coming-soon"),
                            color: "#E5EEFF",
                            textColor: "#1686FF"
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
                    appId={allAppIds[getRandomArbitrary(0, allAppIds.length - 1)]}
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
            </div>

            {/* <ContactUs setIsLoading={setIsLoading} /> */}
            <Footer />
            <ScrollButton />
        </div>
    );
}
