import * as React from "react";
import _ from "src/i18n/locale"
import { Footer } from "src/part/footer";
import IronImage from "src/part/iron-image";
import NavigationBar from "src/part/navbar";

export default function P6BodySize() {
    return (
        <>
            <NavigationBar title={_("MAIN.P6.HEAD")} />

            <section className="rr-s-about ms-s-offset">
                <div className="row" >
                    <div className="col-sm-12 col-md-9 order-last order-md-1">
                        <h3 className="mt-4">{_("PRODUCT.P6.ABOUT")}</h3>

                        {/* Body compostion */}
                        <h1>{_("PRODUCT.P6.HEAD1")}</h1>
                        <h3 className="mt-3">{_("PRODUCT.P6.DESC1")}</h3>


                        {/* Chest and Bust */}
                        <h1>{_("PRODUCT.P6.HEAD2")}</h1>
                        <h3 className="mt-3">{_("PRODUCT.P6.DESC2")}</h3>


                        {/* Waist Circumferance */}
                        <h1>{_("PRODUCT.P6.HEAD3")}</h1>
                        <h3 className="mt-3">
                            <a href="https://www.heart.org/en/news/2019/03/19/waist-size-predicts-heart-attacks-better-than-bmi-especially-in-women" target="_blank">
                                {_("PRODUCT.P4.LINK2")}
                            </a>
                            {_("PRODUCT.P4.DESC2")}
                        </h3>
                        

                        {/* Hips Width */}
                        <h1>{_("PRODUCT.P6.HEAD4")}</h1>
                        <h3 className="mt-3">{_("PRODUCT.P6.DESC4")}</h3>


                        <h1>{_("PRODUCT.P4.HEAD1")}</h1>
                        <h3 className="mt-3">{_("PRODUCT.P4.DESC1")}
                            <a href="https://www.nhlbi.nih.gov/health/educational/lose_wt/risk.htm" target="_blank">
                                <br /><small><i>{_("PRODUCT.P4.LINK1")}</i></small>
                            </a>
                        </h3>


                        {/* Body Shape */}
                        <h1>{_("PRODUCT.P6.HEAD5")}</h1>
                        <h3 className="mt-3">{_("PRODUCT.P6.DESC5")}</h3>
                    </div>

                    <div className="col-sm-12 col-md-3 order-sm-1">
                        <img src="/img/bodysize.webp" className="mx-auto" alt={_("MAIN.P6.IMG")} />
                    </div>
                </div>
            </section>


            <div className="container mb-5 pb-5">
                <div className="row align-items-center justify-content-sm-center" >
                    <div className="col-md-7 col-12 pb-5">
                        <IronImage imgLo="/img/p_bodysize_screens_sm.webp" imgHi="/img/p_bodysize_screens.webp" text={_("MAIN.P6.IMG")} />
                    </div>
                    <div className="col-md-5 col-12 text-center pb-5">
                        <a href={`https://apps.apple.com/${_("APPSTORE")}/app/id1564205068`}
                            target="_blank" title={_("MAIN.P1.DWN")}>
                            <span className="ms-btn-apple my-5 float-md-right text-center"></span>
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
