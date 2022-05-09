import * as React from "react";
import _ from "src/i18n/locale"
import { Footer } from "src/part/footer";
import IronImage from "src/part/iron-image";
import NavigationBar from "src/part/navbar";

export default function P4WaistLine() {
    return <>
        <NavigationBar title={_("MAIN.P4.HEAD")} />

        <section className="rr-s-about ms-s-offset">
            <div className="row" >
                <div className="col-sm-12 col-md-9 order-last order-md-1">
                    <h3 className="mt-4">{_("PRODUCT.P4.ABOUT")}</h3>

                    <h1>{_("PRODUCT.P4.HEAD3")}</h1>
                    <h3 className="mt-3">{_("PRODUCT.P4.DESC3")}</h3>


                    {/* Better than BMI */}
                    <h1>{_("PRODUCT.P4.HEAD2")}</h1>
                    <h3 className="mt-3">
                        <a href="https://www.heart.org/en/news/2019/03/19/waist-size-predicts-heart-attacks-better-than-bmi-especially-in-women" target="_blank">
                            {_("PRODUCT.P4.LINK2")}
                        </a>
                        {_("PRODUCT.P4.DESC2")}
                    </h3>


                    {/* Medical Fact */}
                    <h1>{_("PRODUCT.P4.HEAD1")}</h1>
                    <h3 className="mt-3">{_("PRODUCT.P4.DESC1")}
                        <a href="https://www.nhlbi.nih.gov/health/educational/lose_wt/risk.htm" target="_blank">
                            <br /><small><i>{_("PRODUCT.P4.LINK1")}</i></small>
                        </a>
                    </h3>


                    {/* Elevated Cardio Risk */}
                    <h1>{_("PRODUCT.P4.HEAD4")}</h1>
                    <h3 className="mt-3">
                        <ul>
                            <li>{_("PRODUCT.P4.DESC4_1")}</li>
                            <li>{_("PRODUCT.P4.DESC4_2")}</li>
                            <li>{_("PRODUCT.P4.DESC4_3")}</li>
                            <li><i><small>{_("PRODUCT.P4.DESC4_4")}
                                <a href="https://www.ahajournals.org/doi/10.1161/CIRCULATIONAHA.107.739714" target="_blank">
                                    Circulation, Vol. 117, No. 13
                                </a>
                                , &nbsp;
                                <a href="https://www.cnn.com/2008/HEALTH/conditions/11/12/healthmag.waist.death.risk/" target="_blank">
                                    CNN
                                </a>
                            </small></i>
                            </li>
                        </ul>
                    </h3>
                </div>

                <div className="col-sm-12 col-md-3 order-sm-1">
                    <img src="/img/waist.svg" className="mx-auto" alt={_("MAIN.P4.IMG")} />
                </div>
            </div>
        </section>


        <div className="container mb-5 pb-5">
            <div className="row align-items-center justify-content-sm-center" >
                <div className="col-md-7 col-12 pb-5">
                    <IronImage imgLo="/img/p_waist_screens_sm.webp" imgHi="/img/p_waist_screens.webp" text={_("MAIN.P4.IMG")} />
                </div>
                <div className="col-md-5 col-12 text-center pb-5">
                    <a href={`https://apps.apple.com/${_("APPSTORE")}/app/id1506250420`}
                        target="_blank" title={_("MAIN.P1.DWN")}>
                        <span className="ms-btn-apple my-5 float-md-right text-center"></span>
                    </a>
                </div>
            </div>
        </div>

        <Footer />
    </>

}
