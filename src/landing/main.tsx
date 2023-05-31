import * as React from "react";
import _, { Locale } from "src/i18n/locale"
import { Footer } from "../part/footer";
import NavigationBar from "src/part/navbar";
import ImageI18N from "src/part/img-i18n";

export default function LandingPage() {
    return (
        <div className="flex-grow-1 flex-shrink-0">
            <NavigationBar />

            <section id="header" className="ms-s-header">
                <div className="ms-s-offset text-center">
                    <div className="row justify-content-center">

                    <div className="col-auto">
                        <ImageI18N src="/img/header_screens.en.512.webp" w={512} h={298} cls="ms-base-top-image" alt={_("MAIN.HEAD")} />
                        <h1>{_('MAIN.HEAD')}</h1>
                        <h4>{_("MAIN.SUBHEAD")}</h4>
                        <img src="/img/header_watches.webp" width={241} height={160} className="d-block float-end float-sm-start watches-img" alt={_("MAIN.IMG")} />
                    </div>
                        
                    </div>
                </div>
            </section>


            <section className="ms-s-product">
                <div className="ms-s-offset">
                    <div className="row">

                    <div className="col p-container">
                        <div className="d-flex p-head">
                            <img src="/img/logo_vitamin.svg" className="img-fluid me-3" height={48} width={48} alt={_("VITAMIN.ICO")} />
                            <div>
                                <h1>{_("VITAMIN.HEAD")}</h1>
                                <p>{_("VITAMIN.SUBHEAD")}</p>
                            </div>
                        </div>
                        <div className="p-img">
                            <ImageI18N src="/img/vitamin.en.512.webp" w={512} h={512} cls="mx-auto my-4 img-fluid" alt={_("VITAMIN.IMG")} />
                        </div>
                        <div className="p-text">
                            <h2>{_("VITAMIN.TEXT")}</h2>
                            <a href={Locale.i18nLink("vitamin")} className="mt-3 ms-btn-large">{_("BTN.MORE")}</a>
                        </div>
                    </div>
                        
                    </div>
                </div>
            </section>


            <section className="ms-s-product">
                <div className="ms-s-offset">
                    <div className="row">

                    <div className="col p-container">
                        <div className="d-flex p-head">
                            <img src="/img/logo_size.svg" className="img-fluid me-3" height={48} width={48} alt={_("SIZE.ICO")} />
                            <div>
                                <h1>{_("SIZE.HEAD")}</h1>
                                <p>{_("SIZE.SUBHEAD")}</p>
                            </div>
                        </div>
                        <div className="p-img">
                            <ImageI18N src="/img/size.en.512.webp" w={512} h={512} cls="mx-auto my-4 img-fluid" alt={_("SIZE.IMG")} />
                        </div>
                        <div className="p-text">
                            <h2>{_("SIZE.TEXT")}</h2>
                            <a href={Locale.i18nLink("bodysize")} className="mt-3 ms-btn-large">{_("BTN.MORE")}</a>
                        </div>
                    </div>

                    </div>
                </div>
            </section>



            <section className="ms-s-product">
                <div className="ms-s-offset">
                    <div className="row">

                    <div className="col p-container">
                        <div className="d-flex p-head">
                            <img src="/img/logo_electrolyte.svg" className="img-fluid me-3" height={48} width={48} alt={_("ELECTROLYTE.ICO")} />
                            <div>
                                <h1>{_("ELECTROLYTE.HEAD")}</h1>
                                <p>{_("ELECTROLYTE.SUBHEAD")}</p>
                            </div>
                        </div>
                        <div className="p-img">
                            <ImageI18N src="/img/p_electrolyte.512.webp" w={512} h={512} cls="mx-auto my-4 img-fluid" alt={_("ELECTROLYTE.IMG")} />
                        </div>
                        <div className="p-text">
                            <h2>{_("ELECTROLYTE.TEXT")}</h2>
                            <a href={Locale.i18nLink("electrolyte")} className="mt-3 ms-btn-large">{_("BTN.MORE")}</a>
                        </div>
                    </div>

                    </div>
                </div>
            </section>


            <section className="ms-s-product">
                <div className="ms-s-offset">
                    <div className="row">

                    <div className="col p-container">
                        <div className="d-flex p-head">
                            <img src="/img/logo_mass.svg" className="img-fluid me-3" height={48} width={48} alt={_("MASS.ICO")} />
                            <div>
                                <h1>{_("MASS.HEAD")}</h1>
                                <p>{_("MASS.SUBHEAD")}</p>
                            </div>
                        </div>
                        <div className="p-img">
                            <ImageI18N src="/img/mass.en.512.webp" w={512} h={512} cls="mx-auto my-4 px-lg-4 px-0 img-fluid" alt={_("MASS.IMG")} />
                        </div>
                        <div className="p-text">
                            <h2>{_("MASS.TEXT")}</h2>
                            <a href={Locale.i18nLink("bodymass")} className="mt-3 ms-btn-large">{_("BTN.MORE")}</a>
                        </div>
                    </div>

                    </div>
                </div>
            </section>


            <section className="ms-s-product">
                <div className="ms-s-offset">
                    <div className="row">

                    <div className="col p-container">
                        <div className="d-flex p-head">
                            <img src="/img/logo_zinc.svg" className="img-fluid me-3" height={48} width={48} alt={_("ZINC.ICO")} />
                            <div>
                                <h1>{_("ZINC.HEAD")}</h1>
                                <p>{_("ZINC.SUBHEAD")}</p>
                            </div>
                        </div>
                        <div className="p-img">
                            <ImageI18N src="/img/p_zinc.512.webp" w={512} h={512} cls="mx-auto my-4 img-fluid" alt={_("ZINC.IMG")} />
                        </div>
                        <div className="p-text">
                            <h2>{_("ZINC.TEXT")}</h2>
                            <a href={Locale.i18nLink("bodyzinc")} className="mt-3 ms-btn-large">{_("BTN.MORE")}</a>
                        </div>
                    </div>

                    </div>
                </div>
            </section>

            <section className="ms-s-product my-5">
                <div className="ms-s-offset">
                    <div className="row">

                    <div className="col p-container">
                        <div className="d-flex p-head">
                            <img src="/img/logo_waist.svg" className="img-fluid me-3" height={48} width={48} alt={_("WAIST.ICO")} />
                            <div>
                                <h1>{_("WAIST.HEAD")}</h1>
                                <p>{_("WAIST.SUBHEAD")}</p>
                            </div>
                        </div>
                        <div className="p-img">
                            <ImageI18N src="/img/waist.en.512.webp" w={512} h={512} cls="mx-auto my-4 px-lg-4 px-0 img-fluid" alt={_("WAIST.IMG")} />
                        </div>
                        <div className="p-text">
                            <h2>{_("WAIST.TEXT")}</h2>
                            <a href={Locale.i18nLink("waistline")} className="mt-3 ms-btn-large">{_("BTN.MORE")}</a>
                        </div>
                    </div>

                    </div>
                </div>
            </section>


            <section className="ms-s-product">
                <div className="ms-s-offset">
                    <div className="row">

                    <div className="col p-container">
                        <div className="d-flex p-head">
                            <img src="/img/logo_emotion.svg" className="img-fluid me-3" height={48} width={48} alt={_("EMOTION.ICO")} />
                            <div>
                                <h1>{_("EMOTION.HEAD")}</h1>
                                <p>{_("EMOTION.SUBHEAD")}</p>
                            </div>
                        </div>
                        <div className="p-img">
                            <ImageI18N src="/img/emotion.en.512.webp" w={512} h={512} cls="mx-auto my-4 img-fluid" alt={_("EMOTION.IMG")} />
                        </div>
                        <div className="p-text">
                            <h2>{_("EMOTION.TEXT")}</h2>
                            <a href={Locale.i18nLink("emotion")} className="mt-3 ms-btn-large">{_("BTN.MORE")}</a>
                        </div>
                    </div>
                    
                    </div>
                </div>
            </section>


            {/* <ContactUs setIsLoading={setIsLoading} /> */}
            <Footer />
        </div>
    );
}