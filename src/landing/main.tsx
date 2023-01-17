import * as React from "react";
import _, { Locale } from "src/i18n/locale"
import { Footer } from "../part/footer";
import IronImage from "src/part/iron-image";
import NavigationBar from "src/part/navbar";
import ImageI18N from "src/part/img-i18n";

export default function LandingPage() {
    return (
        <div>
            <NavigationBar />

            <section id="header" className="ms-s-header">
                <div className="row ms-s-offset text-center">
                    <div className="col-auto">
                        <ImageI18N src="/img/header_screens.en.512.webp" w={512} h={298} cls="mx-auto img-fluid my-5" alt={_("MAIN.HEAD")} />
                        <h1>{_('MAIN.HEAD')}</h1>
                        <h4>{_("MAIN.SUBHEAD")}</h4>
                        <img src="/img/header_watches.webp" width={241} height={160} className="d-block float-end float-sm-start watches-img" alt={_("MAIN.IMG")} />
                    </div>
                </div>
            </section>


            <section className="ms-s-product">
                <div className="row ms-s-offset align-items-center">

                    <div className="col p-container">
                        <div className="d-flex p-head">
                            <img src="/img/logo_vitamin.svg" className="img-fluid me-3" width={48} />
                            <div>
                                <h1>{_("VITAMIN.HEAD")}</h1>
                                <p>{_("VITAMIN.SUBHEAD")}</p>
                            </div>
                        </div>
                        <div className="p-img">
                            <ImageI18N src="/img/vitamin.en.512.webp" w={512} h={512} cls="mx-auto img-fluid" alt={_("VITAMIN.IMG")} />
                        </div>
                        <div className="mt-3 p-text">
                            <h2>{_("VITAMIN.TEXT")}</h2>
                            <a href={Locale.i18nLink("logvitamin")} className="mt-3 ms-btn-large">{_("VITAMIN.BTN")}</a>
                        </div>
                    </div>

                </div>
            </section>


            <section className="ms-s-product">
                <div className="row ms-s-offset align-items-center">

                    <div className="col-md-4 order-sm-1">
                        <h1 className="d-block d-md-none">
                            <img src="/img/logo_size.svg" className="img-fluid mb-2 me-3" width={48} />
                            {_("SIZE.HEAD")}
                        </h1>
                        <ImageI18N src="/img/size.en.512.webp" w={512} h={512} cls="mx-auto img-fluid" alt={_("SIZE.IMG")} />                        
                    </div>

                    <div className="col-md-6 align-self-center order-last order-md-1">
                        <h1 className="d-none d-md-block">
                            <img src="/img/logo_size.svg" className="img-fluid mb-2 me-3" width={48} />
                            {_("SIZE.HEAD")}
                        </h1>
                        <p className="mt-2">{_("SIZE.SUBHEAD")}</p>
                        <h2>{_("SIZE.TEXT")}</h2>
                        <a href={Locale.i18nLink("bodysize")} className="mt-3 ms-btn-large pull-right">{_("SIZE.BTN")}</a>
                    </div>

                </div>
            </section>



            <section className="ms-s-product">
                <div className="row ms-s-offset align-items-center">

                    <div className="col-md-6 align-self-center order-last order-md-1">
                        <h1 className="d-none d-md-block">
                            <img src="/img/logo_electrolyte.svg" className="img-fluid mb-2 me-3" width={48} />
                            {_("ELECTROLYTE.HEAD")}
                        </h1>
                        <p className="mt-2">{_("ELECTROLYTE.SUBHEAD")}</p>
                        <h2>{_("ELECTROLYTE.TEXT")}</h2>
                        <a href={Locale.i18nLink("electrolyte")} className="mt-3 ms-btn-large">{_("ELECTROLYTE.BTN")}</a>
                    </div>

                    <div className="col-md-4 order-sm-1">
                        <h1 className="d-block d-md-none">
                            <img src="/img/logo_electrolyte.svg" className="img-fluid mb-2 me-3" width={48} />
                            {_("ELECTROLYTE.HEAD")}
                        </h1>
                        <ImageI18N src="/img/p_electrolyte.512.webp" w={512} h={512} cls="mx-auto img-fluid" alt={_("ELECTROLYTE.IMG")} />
                    </div>

                </div>
            </section>


            <section className="ms-s-product">
                <div className="row ms-s-offset align-items-center">

                    <div className="col-md-4 order-sm-1">
                        <h1 className="d-block d-md-none">
                            <img src="/img/logo_mass.svg" className="img-fluid mb-2 me-3" width={48} />
                            {_("MASS.HEAD")}
                        </h1>
                        <ImageI18N src="/img/mass.en.512.webp" w={512} h={512} cls="mx-auto img-fluid" alt={_("MASS.IMG")} />                        
                    </div>

                    <div className="col-md-6 align-self-center order-last order-md-1">
                        <h1 className="d-none d-md-block">
                            <img src="/img/logo_mass.svg" className="img-fluid mb-2 me-3" width={48} />
                            {_("MASS.HEAD")}
                        </h1>
                        <p className="mt-2">{_("MASS.SUBHEAD")}</p>
                        <h2>{_("MASS.TEXT")}</h2>
                        <a href={Locale.i18nLink("bodymass")} className="mt-3 ms-btn-large pull-right">{_("MASS.BTN")}</a>
                    </div>

                </div>
            </section>


            <section className="ms-s-product">
                <div className="row ms-s-offset">

                    <div className="col-md-6 align-self-center order-last order-md-1">
                        <h1 className="d-none d-md-block">
                            <img src="/img/logo_zinc.svg" className="img-fluid mb-2 me-3" width={48} />
                            {_("ZINC.HEAD")}
                        </h1>
                        <p className="mt-2">{_("ZINC.SUBHEAD")}</p>
                        <h2>{_("ZINC.TEXT")}</h2>
                        <a href={Locale.i18nLink("bodyzinc")} className="mt-3 ms-btn-large">{_("ZINC.BTN")}</a>
                    </div>

                    <div className="col-md-4 order-sm-1">
                        <h1 className="d-block d-md-none">
                            <img src="/img/logo_zinc.svg" className="img-fluid mb-2 me-3" width={48} />
                            {_("ZINC.HEAD")}
                        </h1>
                        <ImageI18N src="/img/p_zinc.512.webp" w={512} h={512} cls="mx-auto img-fluid" alt={_("ZINC.IMG")} />
                    </div>

                </div>
            </section>

            <section className="ms-s-product my-5">
                <div className="row ms-s-offset">

                    <div className="col-md-4 order-sm-1">
                        <h1 className="d-block d-md-none">
                            <img src="/img/logo_waist.svg" className="img-fluid mb-2 me-3" width={48} />
                            {_("WAIST.HEAD")}
                        </h1>
                        <ImageI18N src="/img/p_waist.512.webp" w={512} h={512} cls="mx-auto img-fluid" alt={_("WAIST.IMG")} />                        
                    </div>

                    <div className="col-md-6 align-self-center order-last order-md-1">
                        <h1 className="d-none d-md-block">
                            <img src="/img/logo_waist.svg" className="img-fluid mb-2 me-3" width={48} />
                            {_("WAIST.HEAD")}
                        </h1>
                        <p className="mt-2">{_("WAIST.SUBHEAD")}</p>
                        <h2>{_("WAIST.TEXT")}</h2>
                        <a href={Locale.i18nLink("waistline")} className="mt-3 ms-btn-large pull-right">{_("WAIST.BTN")}</a>
                    </div>

                </div>
            </section>


            <section className="ms-s-product">
                <div className="row ms-s-offset">

                    <div className="col-md-6 align-self-center order-last order-md-1">
                        <h1 className="d-none d-md-block">
                            <img src="/img/logo_emotion.svg" className="img-fluid mb-2 me-3" width={48} />
                            {_("EMOTION.HEAD")}
                        </h1>
                        <p className="mt-2">{_("EMOTION.SUBHEAD")}</p>
                        <h2>{_("EMOTION.TEXT")}</h2>
                        <a href={Locale.i18nLink("emotion")} className="mt-3 ms-btn-large">{_("EMOTION.BTN")}</a>
                    </div>

                    <div className="col-md-4 order-sm-1">
                        <h1 className="d-block d-md-none">
                            <img src="/img/logo_emotion.svg" className="img-fluid mb-2 me-3" width={48} />
                            {_("EMOTION.HEAD")}
                        </h1>
                        <ImageI18N src="/img/p_emotion.512.webp" w={512} h={512} cls="mx-auto img-fluid" alt={_("EMOTION.IMG")} />
                    </div>
                    
                </div>
            </section>


            {/* <ContactUs setIsLoading={setIsLoading} /> */}
            <Footer />
        </div>
    );
}