import * as React from "react";
import _ from "src/i18n/locale"
import { Footer } from "src/part/footer";
import NavigationBar from "src/part/navbar";
import IronImage from "src/part/iron-image";

export default function P2bodymass() {
    return (
        <>
            <NavigationBar title={_("MAIN.P2.HEAD")} />

            <section className="rr-s-about ms-s-offset">
                <div className="row" >
                    <div className="col-sm-12 col-md-9 order-last order-md-1">
                        <h3 className="mt-4">{_("PRODUCT.P2.ABOUT")}</h3>

                        <h1>{_("PRODUCT.P2.HEAD1")}</h1>
                        <h3 className="mt-3">{_("PRODUCT.P2.DESC1")}</h3>

                        <h1>{_("PRODUCT.P2.HEAD2")}</h1>
                        <h3 className="mt-3">{_("PRODUCT.P2.DESC2")}</h3>


                        <h1>{_("PRODUCT.P2.HEAD3")}</h1>
                        <h3 className="mt-3">{_("PRODUCT.P2.DESC3")}</h3>

                        <h1>{_("PRODUCT.P2.HEAD4")}</h1>
                        <h3 className="mt-3">
                            <ul>
                                <li>{_("PRODUCT.P2.DESC4_1")}</li>
                                <li>{_("PRODUCT.P2.DESC4_2")}</li>
                                <li>{_("PRODUCT.P2.DESC4_3")}</li>
                                <li>{_("PRODUCT.P2.DESC4_4")}</li>
                                <li>{_("PRODUCT.P2.DESC4_5")}</li>
                                <li>{_("PRODUCT.P2.DESC4_6")}</li>
                                <li>{_("PRODUCT.P2.DESC4_7")}</li>
                            </ul>
                        </h3>
                    </div>


                    <div className="col-sm-12 col-md-3 order-sm-1">
                        <img src="/img/mass.svg" className="mx-auto" alt={_("MAIN.P2.IMG")} />
                    </div>
                </div>
            </section>


            <div className="container mb-5 pb-5">
                <div className="row align-items-center justify-content-sm-center" >
                    <div className="col-md-7 col-12 pb-5">
                        <IronImage imgLo="/img/p_mass_screens_sm.webp" imgHi="/img/p_mass_screens.webp" text={_("MAIN.P2.IMG")} />
                    </div>
                    <div className="col-md-5 col-12 text-center pb-5">
                        <a href={`https://apps.apple.com/${_("APPSTORE")}/app/id1507588203`}
                            target="_blank" title={_("MAIN.P2.DWN")}>
                            <span className="ms-btn-apple my-5 float-md-right text-center"></span>
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}