import * as React from "react";
import _ from "src/i18n/locale"
import { Footer } from "src/part/footer";
import MetaTags from 'react-meta-tags';
import IronImage from "src/part/iron-image";
import NavigationBar from "src/part/navbar";
const logo = require("src/img/waist.svg").default;

export default function P4LogWaist() {
    return (
        <div>
            <MetaTags>
                <meta property="og:title" content={_("MAIN.P4.HEAD")} />
                <meta property="og:image" content="https://martspec.com/img/p_waist.png" />
                <meta property="og:description" content={_("MAIN.P4.TEXT")} />
                <meta property="og:url" content="https://martspec.com/product/logwaist" />

                <meta name="twitter:title" content={_("MAIN.P4.HEAD")} />
                <meta name="twitter:description" content={_("MAIN.P4.TEXT")} />

                <title>{_("MAIN.P4.HEAD")}</title>
                <link rel="canonical" href="https://martspec.com/product/logwaist" />
                <meta name="description" content={_("MAIN.P4.TEXT")} />
            </MetaTags>

            <div className="fixed-top bg-white" >
                <NavigationBar title={_("MAIN.P4.HEAD")} />
            </div>

            <section className="rr-s-about">
                <div className="row" >
                    <div className="col-sm-12 col-md-9 order-last order-md-1">
                        <h3 className="mt-4">{_("PRODUCT.P4.ABOUT")}</h3>

                        <h1>{_("PRODUCT.P4.HEAD3")}</h1>
                        <h3 className="mt-3">{_("PRODUCT.P4.DESC3")}</h3>

                        <h1>{_("PRODUCT.P4.HEAD2")}</h1>
                        <h3 className="mt-3">
                            <a href="https://www.heart.org/en/news/2019/03/19/waist-size-predicts-heart-attacks-better-than-bmi-especially-in-women" target="_blank">
                                {_("PRODUCT.P4.LINK2")}
                            </a>
                            {_("PRODUCT.P4.DESC2")}
                        </h3>

                        <h1>{_("PRODUCT.P4.HEAD1")}</h1>
                        <h3 className="mt-3">{_("PRODUCT.P4.DESC1")}
                            <a href="https://www.nhlbi.nih.gov/health/educational/lose_wt/risk.htm" target="_blank">
                                <br /><small><i>National Institutes of Health Reference</i></small>
                            </a>
                        </h3>


                        <h1>{_("PRODUCT.P4.HEAD4")}</h1>
                        <h3 className="mt-3">
                            <ul>
                                <li>{_("PRODUCT.P4.DESC4_1")}</li>
                                <li>{_("PRODUCT.P4.DESC4_2")}</li>
                                <li><i><small>{_("PRODUCT.P4.DESC4_3")}
                                    <a href="https://www.ahajournals.org/doi/10.1161/CIRCULATIONAHA.107.739714" target="_blank">
                                        Circulation, Vol. 117, No. 13
                                    </a></small></i>
                                </li>
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
                        <IronImage imgLo="/img/p_waist_screens_sm.png" imgHi="/img/p_waist_screens.png" text={_("MAIN.P1.IMG")} />
                    </div>
                    <div className="col-md-5 col-12 text-center pb-5">
                        <a href={`https://apps.apple.com/${_("APPSTORE")}/app/log-waist/id1506250420`}
                            target="_blank" title={_("MAIN.P1.DWN")}>
                            <span className="ms-btn-apple my-5 float-md-right text-center"></span>
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
