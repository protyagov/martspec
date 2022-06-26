import * as React from "react";
import _, { Locale } from "src/i18n/locale"
import { Footer } from "../part/footer";
import IronImage from "src/part/iron-image";
import NavBarLang from "src/part/navbar-lang";


export default function LandingPage() {
    return (
        <div>
            <NavBarLang />

            <section id="header" className="ms-s-header">
                <div className="text-vertical-center">
                    {/* <img src="/img/logo_256.webp" alt={_("MAIN.HEAD")} /> */}
                    <img src="/img/logo.512.webp" height={64} width={64} className="mx-auto img-fluid" alt={_("MAIN.HEAD")} />
                    <h1>{_('MAIN.HEAD')}</h1>
                    <h4>{_("MAIN.SUBHEAD")}</h4>
                </div>
            </section>

            <section className="rr-s-product pw-color-bg-secondary">
                <div className="row ms-s-offset">
                    <div className="col-md-6 align-self-center order-last order-md-1">
                        <p className="mt-2">{_("MAIN.P3.SUBHEAD")}</p>
                        <h1>{_("MAIN.P3.HEAD")}</h1>
                        <h2>{_("MAIN.P3.TEXT")}</h2>
                        <a href={Locale.i18nLink("logvitamin")} className="mt-3 rr-btn-large">{_("MAIN.P3.BTN")}</a>
                    </div>

                    <div className="col-md-4 order-sm-1">
                        <IronImage imgLo="/img/p_vitamin.64.webp" imgHi="/img/p_vitamin.512.webp" text={_("MAIN.P3.IMG")} h={540} w={540} />
                    </div>
                </div>
            </section>

            <section className="rr-s-product my-5">
                <div className="row ms-s-offset">
                    <div className="col-md-4">
                        <IronImage imgLo="/img/p_bodysize.64.webp" imgHi="/img/p_bodysize.512.webp" text={_("MAIN.P6.IMG")} h={540} w={540} />
                    </div>

                    <div className="col-md-6 align-self-center">
                        <p className="mt-2">{_("MAIN.P6.SUBHEAD")}</p>
                        <h1>{_("MAIN.P6.HEAD")}</h1>
                        <h2>{_("MAIN.P6.TEXT")}</h2>
                        <a href={Locale.i18nLink("bodysize")} className="mt-3 rr-btn-large pull-right">{_("MAIN.P6.BTN")}</a>
                    </div>
                </div>
            </section>

            <section className="rr-s-product pw-color-bg-secondary">
                <div className="row ms-s-offset">
                    <div className="col-md-6 align-self-center order-last order-md-1">
                        <p className="mt-2">{_("MAIN.P1.SUBHEAD")}</p>
                        <h1>{_("MAIN.P1.HEAD")}</h1>
                        <h2>{_("MAIN.P1.TEXT")}</h2>
                        <a href={Locale.i18nLink("electrolyte")} className="mt-3 rr-btn-large">{_("MAIN.P1.BTN")}</a>
                    </div>
                    <div className="col-md-4 order-sm-1">
                        <IronImage imgLo="/img/p_electrolyte.64.webp" imgHi="/img/p_electrolyte.512.webp" text={_("MAIN.P1.IMG")} h={540} w={540} />
                    </div>
                </div>
            </section>

            <section className="rr-s-product my-5">
                <div className="row ms-s-offset">
                    <div className="col-md-4">
                        <IronImage imgLo="/img/p_mass.64.webp" imgHi="/img/p_mass.512.webp" text={_("MAIN.P2.IMG")} h={540} w={540} />
                    </div>

                    <div className="col-md-6 align-self-center">
                        <p className="mt-2">{_("MAIN.P2.SUBHEAD")}</p>
                        <h1>{_("MAIN.P2.HEAD")}</h1>
                        <h2>{_("MAIN.P2.TEXT")}</h2>
                        <a href={Locale.i18nLink("bodymass")} className="mt-3 rr-btn-large pull-right">{_("MAIN.P2.BTN")}</a>
                    </div>
                </div>
            </section>


            <section className="rr-s-product pw-color-bg-secondary">
                <div className="row ms-s-offset">
                    <div className="col-md-6 align-self-center order-last order-md-1">
                        <p className="mt-2">{_("MAIN.P5.SUBHEAD")}</p>
                        <h1>{_("MAIN.P5.HEAD")}</h1>
                        <h2>{_("MAIN.P5.TEXT")}</h2>
                        <a href={Locale.i18nLink("bodyzinc")} className="mt-3 rr-btn-large">{_("MAIN.P5.BTN")}</a>
                    </div>

                    <div className="col-md-4 order-sm-1">
                        <IronImage imgLo="/img/p_zinc.64.webp" imgHi="/img/p_zinc.512.webp" text={_("MAIN.P5.IMG")} h={540} w={540} />
                    </div>
                </div>
            </section>

            <section className="rr-s-product my-5">
                <div className="row ms-s-offset">
                    <div className="col-md-4">
                        <IronImage imgLo="/img/p_waist.64.webp" imgHi="/img/p_waist.512.webp" text={_("MAIN.P4.IMG")} h={540} w={540} />
                    </div>

                    <div className="col-md-6 align-self-center">
                        <p className="mt-2">{_("MAIN.P4.SUBHEAD")}</p>
                        <h1>{_("MAIN.P4.HEAD")}</h1>
                        <h2>{_("MAIN.P4.TEXT")}</h2>
                        <a href={Locale.i18nLink("waistline")} className="mt-3 rr-btn-large pull-right">{_("MAIN.P4.BTN")}</a>
                    </div>
                </div>
            </section>

            <section className="rr-s-product pw-color-bg-secondary">
                <div className="row ms-s-offset">
                    <div className="col-md-6 align-self-center order-last order-md-1">
                        <p className="mt-2">{_("MAIN.P7.SUBHEAD")}</p>
                        <h1>{_("MAIN.P7.HEAD")}</h1>
                        <h2>{_("MAIN.P7.TEXT")}</h2>
                        <a href={Locale.i18nLink("emotion")} className="mt-3 rr-btn-large">{_("MAIN.P7.BTN")}</a>
                    </div>

                    <div className="col-md-4 order-sm-1">
                        <IronImage imgLo="/img/p_emotion.64.webp" imgHi="/img/p_emotion.512.webp" text={_("MAIN.P7.IMG")} h={540} w={540} />
                    </div>
                </div>
            </section>


            {/* <ContactUs setIsLoading={setIsLoading} /> */}
            <Footer />
        </div>
    );
}