import * as React from "react";
import _ from "src/i18n/locale"
import { Footer } from "src/part/footer";
import NavBarSignIn from "src/part/navbar-signin";
import MetaTags from 'react-meta-tags';
import NavigationBar from "src/part/navbar";
const logo = require("src/img/mass.svg").default;

export default function P2LogMass() {
    return (
        <div>
            <MetaTags>
                <meta property="og:title" content={_("MAIN.P1_HEAD")} />
                <meta property="og:image" content={"https://recruiter.reviews" + logo} />
                <meta property="og:description" content={_("MAIN.P2.TEXT")} />
                <meta name="yandex-verification" content="7bed02dd516e3d48" />

                <title>{_("MAIN.P1_HEAD")}</title>
                <meta name="description" content={_("MAIN.P2.TEXT")} />
            </MetaTags>

            <div className="fixed-top bg-white" >
                <NavigationBar title={_("PRODUCT.P2.NAV_TITLE")} />
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

                    {/* <a className="app-store" href="https://itunes.apple.com/us/app/vekt-track-your-weight-fast/id1114721073?ls=1&amp;mt=8" target="_blank" title="Download Vekt on the App Store"></a> */}

                    <div className="col-sm-12 col-md-3 order-sm-1">
                        <img src={logo} alt="Recruiter" />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}