import * as React from "react";
import _ from "src/i18n/locale"
import { Footer } from "src/part/footer";
import MetaTags from 'react-meta-tags';
import NavigationBar from "src/part/navbar";
const logo = require("src/img/electrolyte.svg").default;

export default function P1Electrolyte() {
    return (
        <div>
            <MetaTags>
                <meta property="og:title" content={_("MAIN.P1_HEAD")} />
                <meta property="og:image" content={"http://martspec.com" + logo} />
                <meta property="og:description" content={_("MAIN.P1_TEXT")} />

                <title>{_("MAIN.P1_HEAD")}</title>
                <meta name="description" content={_("MAIN.P1_TEXT")} />
            </MetaTags>

            <div className="fixed-top bg-white" >
                <NavigationBar title={_("PRODUCT.P1.NAV_TITLE")} />
            </div>
            <section className="rr-s-about">
                <div className="row" >
                    <div className="col-sm-12 col-md-9 order-last order-md-1">
                        <h1>{_("PRODUCT.P1.HEAD1")}</h1>
                        <h3 className="mt-3">{_("PRODUCT.P1.DESC1")}                            <a href="https://www.nhlbi.nih.gov/health/educational/lose_wt/risk.htm">
                            <br /><small>National Institutes of Health Reference</small>
                        </a> </h3>


                        <h1>{_("PRODUCT.P1.HEAD2")}</h1>
                        <h3 className="mt-3">{_("PRODUCT.P1.DESC2")}</h3>


                        <h1>{_("PRODUCT.P1.HEAD3")}</h1>
                        <h3 className="mt-3">{_("PRODUCT.P1.DESC3")}</h3>


                        <h1>{_("PRODUCT.P1.HEAD4")}</h1>
                        <h3 className="mt-3">{_("PRODUCT.P1.DESC4")}</h3>
                    </div>

                    <div className="col-sm-12 col-md-3 order-sm-1">
                        <img src={logo} className="mx-auto" alt="Recruiter" />                          
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}
