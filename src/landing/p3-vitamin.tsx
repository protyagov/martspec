import * as React from "react";
import _ from "src/i18n/locale"
import { Footer } from "src/part/footer";
import NavBarSignIn from "src/part/navbar-signin";
import MetaTags from 'react-meta-tags';

const logo = require("src/img/recruiter_main.svg").default;

export default function P3LogVitamin() {
    return (
        <div>
            <MetaTags>
                <meta property="og:title" content={_("MAIN.P3_HEAD")} />
                <meta property="og:image" content={"https://recruiter.reviews" + logo} />
                <meta property="og:description" content={_("MAIN.P1_TEXT")} />

                <title>{_("MAIN.P3_HEAD")}</title>
                <meta name="description" content={_("MAIN.P3_TEXT")} />
            </MetaTags>

            <div className="fixed-top bg-white" >
                <NavBarSignIn leftIsHomeLogo={true} title={_("ABOUT.RECR.NAV_TITLE")} />
            </div>
            <section className="rr-s-about">
                <div className="row" >
                    <div className="col-sm-12 col-md-9 order-last order-md-1">
                        <h1>{_("ABOUT.RECR.HEAD1")}</h1>
                        <h3 className="mt-3">{_("ABOUT.RECR.DESC1")}</h3>


                        <h1>{_("ABOUT.RECR.HEAD2")}</h1>
                        <h3 className="mt-3">{_("ABOUT.RECR.DESC2")}</h3>


                        <h1>{_("ABOUT.RECR.HEAD3")}</h1>
                        <h3 className="mt-3">
                            <ul>
                                <li>{_("ABOUT.RECR.DESC3_1")}</li>
                                <li>{_("ABOUT.RECR.DESC3_2")}</li>
                                <li>{_("ABOUT.RECR.DESC3_3")}</li>
                                <li>{_("ABOUT.RECR.DESC3_4")}</li>
                            </ul>
                        </h3>
                    </div>

                    <div className="col-sm-12 col-md-3 order-sm-1">
                        <img src={logo} alt="Recruiter" />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}