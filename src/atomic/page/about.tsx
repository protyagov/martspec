import * as React from "react";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import _, { Locale } from "@/i18n/locale";
import Header from "@/atomic/organism/header";
import ScrollButton from "../atom/scroll-button";
import CallToAction from "@/atomic/organism/call-to-action-new";
import ImageI18N from "@/atomic/atom/img-i18n";
import CardTitleTextImage from "@/atomic/molecule/card-title-text-image";
import CardTitleText from "@/atomic/molecule/card-title-text";
import CardIconTitleText from "@/atomic/molecule/card-icon-title-text";
import CardTitleTextButton from "@/atomic/molecule/card-title-text-button";
import LinkStyledButton from "@/atomic/atom/link-styled-button";
import { Breadcrumb } from "@/atomic/organism/breadcrumb";
import { useBreadcrumbs } from "@/hooks/useBreadcrumbs"

export default function About() {
    const items = useBreadcrumbs();
    return (
        <>
            <NavigationBar />

            <div className="ms-base-page about">
                <div className="row">
                    <Breadcrumb items={items} />
                </div>
                <Header
                    title={_("ABOUT.HEAD")}
                    imgSrc="/img/story.webp"
                    imgAlt={_("ABOUT.IMG")}
                    imgH={398}
                    imgW={542}
                    appId={1}
                    appDownloadTitle="Download"
                >
                    <p className="font-normal">{_("ABOUT.P1")}</p>
                </Header>
                <section>
                    <div className="row d-flex flex-xxl-nowrap align-items-center justify-content-between gap-5">
                        <div className="col-12 col-xxl-6 order-2 order-xxl-1 me-xxl-5">
                            <ImageI18N src="/img/story-start.webp" w={620} h={390} cls="ms-base-image" />
                        </div>
                        <div className="col-12 col-xxl-6 order-1 order-xxl-2">
                            <h2 className="about__start-title">{_("ABOUT.P7")}</h2>
                            <ul className="d-flex flex-column gap-4 about__list">
                                <li>{_("ABOUT.P4")}</li>
                                <li>{_("ABOUT.P5")}</li>
                                <li>{_("ABOUT.P6")}</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="about-command">
                    <div className="row">
                        <div className="d-flex flex-wrap justify-content-between about-command-block">
                            <div className="col-12 col-xxl-6">
                                <CardTitleTextButton
                                    title={_("ABOUT.OURCORE.HEAD1")}
                                    textContent={[
                                        _("ABOUT.OURCORE.TEXT1"),
                                        _("ABOUT.OURCORE.TEXT2"),
                                        _("ABOUT.OURCORE.TEXT3"),
                                    ]}
                                    buttonText={_("CAREERS.BUTTON3")}
                                    buttonLink={Locale.i18nLink(`bodymass`)}
                                    buttonColor="#1686FF"
                                />
                            </div>
                            <div className="col-12 col-xxl-5">
                                <ImageI18N
                                    src="/img/page/body-mass/mass-header-en.webp"
                                    w={487}
                                    h={515}
                                    cls="ms-base-image mt-mob-xs mb-6"
                                    alt={_("CAREERS.IMG")}
                                />
                            </div>
                        </div>
                        <div className="d-flex flex-wrap align-items-center justify-content-between about-command-block">
                            <div className="col-12 col-xxl-6 order-2 order-xxl-1">
                                <ImageI18N
                                    src="/img/page/emotion/emotion-header-img-en.webp"
                                    w={487}
                                    h={515}
                                    cls="ms-base-image mt-mob-xs mb-6"
                                    alt={_("CAREERS.IMG")}
                                />
                            </div>
                            <div className="col-12 col-xxl-6 order-1 order-xxl-2">
                                <ul className="d-flex flex-column gap-4 about__list">
                                    <li>{_("ABOUT.OURCORE.TEXT4")}</li>
                                    <li>{_("ABOUT.OURCORE.TEXT5")}</li>
                                    <li>{_("ABOUT.OURCORE.TEXT6")}</li>
                                </ul>
                                <div className="btn-container">
                                    <LinkStyledButton
                                        text={_("ABOUT.OURCORE.TEXTBTN")}
                                        link={"/emotion"}
                                        color="rgb(22, 134, 255)"
                                        textColor="#fff"
                                        className="about-link-btn"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="ms-base-new row about-info-section">
                        <h2>{_("ABOUT.HEAD1")}</h2>
                        <p className="bottom">{_("ABOUT.DESC1")}</p>
                        <p className="bottom">{_("ABOUT.DESC2")}</p>
                        <p className="bottom">{_("ABOUT.DESC3")}</p>
                        <div className="row about-info-list">
                            <div className="col-lg-4 d-flex">
                                <CardIconTitleText
                                    iconProps={{
                                        icon: {
                                            src: "/img/atom/icons/icon-patient-innovation.svg",
                                            alt: _("ABOUT.CART.ALT1"),
                                        },
                                        title: _("ABOUT.CART.TITLE1"),
                                    }}
                                    text={_("ABOUT.CART.TEXT1")}
                                    bgColor="#DDE9FF"
                                />
                            </div>
                            <div className="col-lg-4 d-flex">
                                <CardIconTitleText
                                    iconProps={{
                                        icon: {
                                            src: "/img/atom/icons/icon-performance-innovation.svg",
                                            alt: _("ABOUT.CART.ALT2"),
                                        },
                                        title: _("ABOUT.CART.TITLE2"),
                                    }}
                                    text={_("ABOUT.CART.TEXT2")}
                                />
                            </div>
                            <div className="col-lg-4 d-flex">
                                <CardIconTitleText
                                    iconProps={{
                                        icon: {
                                            src: "/img/atom/icons/icon-rehabilitation-innovation.svg",
                                            alt: _("ABOUT.CART.ALT3"),
                                        },
                                        title: _("ABOUT.CART.TITLE3"),
                                    }}
                                    text={_("ABOUT.CART.TEXT3")}
                                    bgColor="#DDE9FF"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section>
                    <CallToAction
                        title="ABOUT.P2"
                        subtitle="ABOUT.P3"
                        appId={1}
                        appDownloadTitle="Download"
                        imgSrc="/img/about-statistik-en.webp"
                        imgAlt={_("ABOUT.IMG")}
                    />
                </section>
            </div>
            <Footer />
            <ScrollButton />
        </>
    );
}
