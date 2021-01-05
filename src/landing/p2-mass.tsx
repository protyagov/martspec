import * as React from "react";
import _ from "src/i18n/locale"
import { Footer } from "src/part/footer";
import MetaTags from 'react-meta-tags';
import NavigationBar from "src/part/navbar";
import IronImage from "src/part/iron-image";
const logo = require("src/img/mass.svg").default;

export default function P2LogMass() {
    return (
        <div>
            <MetaTags>
                <meta property="og:title" content={_("MAIN.P2.HEAD")} />
                <meta property="og:image" content="https://martspec.com/img/p_mass.png" />
                <meta property="og:description" content={_("MAIN.P2.TEXT")} />
                <meta property="og:url" content="https://martspec.com/product/logmass" />

                <meta name="twitter:title" content={_("MAIN.P2.HEAD")} />
                <meta name="twitter:description" content={_("MAIN.P2.TEXT")} />

                <title>{_("MAIN.P2.HEAD")}</title>
                <link rel="canonical" href="https://martspec.com/product/logmass" />
                <meta name="description" content={_("MAIN.P2.TEXT")} />
            </MetaTags>

            <div className="fixed-top bg-white" >
                <NavigationBar title={_("MAIN.P2.HEAD")} />
            </div>

            <section className="rr-s-about">
                <div className="row" >
                    <div className="col-sm-12 col-md-9 order-last order-md-1">
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
                            </ul>
                        </h3>
                    </div>


                    <div className="col-sm-12 col-md-3 order-sm-1">
                        <img src={logo} className="mx-auto" alt="Recruiter" />
                    </div>
                </div>
            </section>


            <div className="container mb-5 pb-5">
                <div className="row align-items-center justify-content-sm-center" >
                    <div className="col-md-7 col-12 pb-5">
                        <IronImage imgLo="/img/p_mass_screens_sm.png" imgHi="/img/p_mass_screens.png" text={_("MAIN.P2.IMG")} />
                    </div>
                    <div className="col-md-5 col-12 text-center pb-5">
                        <a href={`https://apps.apple.com/${_("APPSTORE")}/app/log-mass/id1507588203`}
                            target="_blank" title={_("MAIN.P2.DWN")}>
                            <span className="ms-btn-apple my-5 float-md-right text-center"></span>
                        </a>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}