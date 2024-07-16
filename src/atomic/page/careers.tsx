import React from "react";
import _, { Locale } from "@/i18n/locale";
import NavigationBar from "@/atomic/organism/navbar";
import { Footer } from "@/atomic/organism/footer";
import TitleTextCard from "@/atomic/molecule/title-text-card";
import TitleTextLinkCard from "@/atomic/molecule/title-text-link-card";

const Careers = () => {
    return (
        <>
            <NavigationBar />
            <div className="ms-base-page ms-base-new careers">
                <section className="text-center">
                    <div className="row justify-content-center">
                        <div className="col col-lg-8">
                            <div className="headings">
                                <h1>{_("CAREERS.SUBHEAD")}</h1>
                                <p>{_("CAREERS.ABOUT")}</p>
                                <img
                                    src={"/img/page/careers/main-pic-top.webp"}
                                    height={476}
                                    width={667}
                                    className="ms-base-image"
                                    alt={_("CAREERS.IMG")}
                                />
                            </div>
                        </div>
                    </div>
                </section>

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
                        <TitleTextLinkCard
                            title={_("CAREERS.LIST3.LI1_HEAD")}
                            text={_("CAREERS.LIST3.LI1_TEXT")}
                            link={{
                                href: Locale.i18nLink("vacancy-details"),
                                text: _("CAREERS.BUTTON3"),
                            }}
                            image="/img/page/careers/vacancy-pic-webdesigner.webp"
                            alt={_("CAREERS.LIST3.LI1_HEAD")}
                        />
                        <TitleTextLinkCard
                            title={_("CAREERS.LIST3.LI2_HEAD")}
                            text={_("CAREERS.LIST3.LI2_TEXT")}
                            link={{
                                href: Locale.i18nLink("coming-soon"),
                                text: _("CAREERS.BUTTON3"),
                            }}
                            image="/img/page/careers/vacancy-pic-mobiledesigner.webp"
                            alt={_("CAREERS.LIST3.LI2_HEAD")}
                        />
                        <TitleTextLinkCard
                            title={_("CAREERS.LIST3.LI3_HEAD")}
                            text={_("CAREERS.LIST3.LI3_TEXT")}
                            link={{
                                href: Locale.i18nLink("coming-soon"),
                                text: _("CAREERS.BUTTON3"),
                            }}
                            image="/img/page/careers/vacancy-pic-frontend.webp"
                            alt={_("CAREERS.LIST3.LI3_HEAD")}
                        />
                        <TitleTextLinkCard
                            title={_("CAREERS.LIST3.LI4_HEAD")}
                            text={_("CAREERS.LIST3.LI4_TEXT")}
                            link={{
                                href: Locale.i18nLink("coming-soon"),
                                text: _("CAREERS.BUTTON3"),
                            }}
                            image="/img/page/careers/vacancy-pic-qa.webp"
                            alt={_("CAREERS.LIST3.LI4_HEAD")}
                        />
                        <TitleTextLinkCard
                            title={_("CAREERS.LIST3.LI5_HEAD")}
                            text={_("CAREERS.LIST3.LI5_TEXT")}
                            link={{
                                href: Locale.i18nLink("coming-soon"),
                                text: _("CAREERS.BUTTON3"),
                            }}
                            image="/img/page/careers/vacancy-pic-ba.webp"
                            alt={_("CAREERS.LIST3.LI5_HEAD")}
                        />
                        <TitleTextLinkCard
                            title={_("CAREERS.LIST3.LI6_HEAD")}
                            text={_("CAREERS.LIST3.LI6_TEXT")}
                            link={{
                                href: Locale.i18nLink("coming-soon"),
                                text: _("CAREERS.BUTTON3"),
                            }}
                            image="/img/page/careers/vacancy-pic-copywriter.webp"
                            alt={_("CAREERS.LIST3.LI6_HEAD")}
                        />
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default Careers;
