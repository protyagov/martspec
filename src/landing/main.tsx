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
                <div className="row ms-s-offset text-center">
                  <div className="col-auto">
                    <img src="/img/header_screens.webp" width={504} height={378} className="mx-auto img-fluid" alt={_("MAIN.HEAD")} />
                    <h1>{_('MAIN.HEAD')}</h1>
                    <h4>{_("MAIN.SUBHEAD")}</h4>
                    <img src="/img/header_watches.webp" width={241} height={160} className="d-block float-end float-sm-start watches-img" alt={_("MAIN.IMG")} />
                  </div>
                </div>
            </section>


            <section className="rr-s-product pw-color-bg-secondary">
                <div className="row ms-s-offset align-items-center">
                    <div className="col-md-6 align-self-center order-last order-md-1">
                        <h1 className="d-none d-md-block">
                            <img src="/img/logo_vitamin.svg" className="img-fluid mb-2 me-3" width={48} />
                            {_("VITAMIN.HEAD")}
                        </h1>
                        <p className="mt-2">{_("VITAMIN.SUBHEAD")}</p>
                        <h2>{_("VITAMIN.TEXT")}</h2>
                        <a href={Locale.i18nLink("logvitamin")} className="mt-3 rr-btn-large">{_("VITAMIN.BTN")}</a>
                    </div>
                    <div className="col-md-4 order-sm-1">
                        <h1 className="d-block d-md-none">
                            <img src="/img/logo_vitamin.svg" className="img-fluid mb-2 me-3" width={48} />
                            {_("VITAMIN.HEAD")}
                        </h1>
                        <IronImage imgLo="/img/vitamin.64.webp" imgHi="/img/vitamin.512.webp" i18n={true} text={_("VITAMIN.IMG")} h={540} w={540} />
                    </div>
                </div>
            </section>


            <section className="rr-s-product">
                <div className="row ms-s-offset align-items-center">

                    <div className="col-md-4 order-sm-1">
                        <h1 className="d-block d-md-none">
                            <img src="/img/logo_size.svg" className="img-fluid mb-2 me-3" width={48} />
                            {_("SIZE.HEAD")}
                        </h1>
                        <IronImage imgLo="/img/bodysize.64.webp" imgHi="/img/bodysize.512.webp" i18n={true} text={_("SIZE.IMG")} h={540} w={540} />
                    </div>

                    <div className="col-md-6 align-self-center order-last order-md-1">
                        <h1 className="d-none d-md-block">
                            <img src="/img/logo_size.svg" className="img-fluid mb-2 me-3" width={48} />
                            {_("SIZE.HEAD")}
                        </h1>
                        <p className="mt-2">{_("SIZE.SUBHEAD")}</p>
                        <h2>{_("SIZE.TEXT")}</h2>
                        <a href={Locale.i18nLink("bodysize")} className="mt-3 rr-btn-large pull-right">{_("SIZE.BTN")}</a>
                    </div>
                </div>
            </section>


            <section className="rr-s-product pw-color-bg-secondary">
                <div className="row ms-s-offset">
                    <div className="col-md-6 align-self-center order-last order-md-1">
                        <p className="mt-2">{_("ELECTROLYTE.SUBHEAD")}</p>
                        <h1>{_("ELECTROLYTE.HEAD")}</h1>
                        <h2>{_("ELECTROLYTE.TEXT")}</h2>
                        <a href={Locale.i18nLink("electrolyte")} className="mt-3 rr-btn-large">{_("ELECTROLYTE.BTN")}</a>
                    </div>
                    <div className="col-md-4 order-sm-1">
                        <IronImage imgLo="/img/p_electrolyte.64.webp" imgHi="/img/p_electrolyte.512.webp" text={_("ELECTROLYTE.IMG")} h={540} w={540} />
                    </div>
                </div>
            </section>


            <section className="rr-s-product my-5">
                <div className="row ms-s-offset">
                    <div className="col-md-4">
                        <IronImage imgLo="/img/p_mass.64.webp" imgHi="/img/p_mass.512.webp" text={_("MASS.IMG")} h={540} w={540} />
                    </div>

                    <div className="col-md-6 align-self-center">
                        <p className="mt-2">{_("MASS.SUBHEAD")}</p>
                        <h1>{_("MASS.HEAD")}</h1>
                        <h2>{_("MASS.TEXT")}</h2>
                        <a href={Locale.i18nLink("bodymass")} className="mt-3 rr-btn-large pull-right">{_("MASS.BTN")}</a>
                    </div>
                </div>
            </section>


            <section className="rr-s-product pw-color-bg-secondary">
                <div className="row ms-s-offset">
                    <div className="col-md-6 align-self-center order-last order-md-1">
                        <p className="mt-2">{_("ZINC.SUBHEAD")}</p>
                        <h1>{_("ZINC.HEAD")}</h1>
                        <h2>{_("ZINC.TEXT")}</h2>
                        <a href={Locale.i18nLink("bodyzinc")} className="mt-3 rr-btn-large">{_("ZINC.BTN")}</a>
                    </div>

                    <div className="col-md-4 order-sm-1">
                        <IronImage imgLo="/img/p_zinc.64.webp" imgHi="/img/p_zinc.512.webp" text={_("ZINC.IMG")} h={540} w={540} />
                    </div>
                </div>
            </section>

            <section className="rr-s-product my-5">
                <div className="row ms-s-offset">
                    <div className="col-md-4">
                        <IronImage imgLo="/img/p_waist.64.webp" imgHi="/img/p_waist.512.webp" text={_("WAIST.IMG")} h={540} w={540} />
                    </div>

                    <div className="col-md-6 align-self-center">
                        <p className="mt-2">{_("WAIST.SUBHEAD")}</p>
                        <h1>{_("WAIST.HEAD")}</h1>
                        <h2>{_("WAIST.TEXT")}</h2>
                        <a href={Locale.i18nLink("waistline")} className="mt-3 rr-btn-large pull-right">{_("WAIST.BTN")}</a>
                    </div>
                </div>
            </section>


            <section className="rr-s-product pw-color-bg-secondary">
                <div className="row ms-s-offset">
                    <div className="col-md-6 align-self-center order-last order-md-1">
                        <p className="mt-2">{_("EMOTION.SUBHEAD")}</p>
                        <h1>{_("EMOTION.HEAD")}</h1>
                        <h2>{_("EMOTION.TEXT")}</h2>
                        <a href={Locale.i18nLink("emotion")} className="mt-3 rr-btn-large">{_("EMOTION.BTN")}</a>
                    </div>

                    <div className="col-md-4 order-sm-1">
                        <IronImage imgLo="/img/p_emotion.64.webp" imgHi="/img/p_emotion.512.webp" text={_("EMOTION.IMG")} h={540} w={540} />
                    </div>
                </div>
            </section>


            {/* <ContactUs setIsLoading={setIsLoading} /> */}
            <Footer />
        </div>
    );
}