import * as React from "react";
import _ from "src/i18n/locale"
import { Footer } from "src/part/footer";
import IronImage from "src/part/iron-image";
import NavigationBar from "src/part/navbar";

export default function P5BodyZinc() {
    return <>
        <NavigationBar title={_("MAIN.P5.HEAD")} />

        <section className="rr-s-about ms-s-offset">
            <div className="row" >
                <div className="col-sm-12 col-md-9 order-last order-md-1">
                    <h3 className="mt-4">{_("PRODUCT.P5.ABOUT")}</h3>

                    <h1>{_("PRODUCT.P5.HEAD1")}</h1>
                    <h3 className="mt-3">
                        {_("PRODUCT.P5.DESC1")}
                        <a href="https://www.healthline.com/nutrition/zinc" target="_blank">
                            <br /><small><i>{_("PRODUCT.P5.LINK1")}</i></small>
                        </a>
                    </h3>


                    <h1>{_("PRODUCT.P5.HEAD2")}</h1>
                    <h3 className="mt-3">
                        {_("PRODUCT.P5.DESC2")}
                        <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4413488/" target="_blank">
                            <br /><small><i>Indian J Plast Surg. 2015 Jan-Apr; 48(1): 4–16.</i></small>
                        </a>
                    </h3>


                    <h1>{_("PRODUCT.P5.HEAD3")}</h1>
                    <h3 className="mt-3">
                        {_("PRODUCT.P5.DESC3")}
                        <a href="https://www.ncbi.nlm.nih.gov/books/NBK493173/" target="_blank">
                            <br /><small><i>Chronic Inflammation</i></small>
                        </a>
                    </h3>
                </div>

                <div className="col-sm-12 col-md-3 order-sm-1">
                    <img src="/img/bodyzinc.svg" className="img-fluid" alt={_("MAIN.P5.IMG")} />
                </div>
            </div>
        </section>


        <div className="container mb-5 pb-5">
            <div className="row align-items-center justify-content-sm-center" >
                <div className="col-md-7 col-12 pb-5">
                    <IronImage imgLo="/img/p_bodyzinc_screens_sm.webp" imgHi="/img/p_bodyzinc_screens.webp" text={_("MAIN.P5.IMG")} />
                </div>
                <div className="col-md-5 col-12 text-center pb-5">
                    <a href={`https://apps.apple.com/${_("APPSTORE")}/app/id1547395353`}
                        target="_blank" title={_("MAIN.P1.DWN")}>
                        <span className="ms-btn-apple my-5 float-md-right text-center"></span>
                    </a>
                </div>
            </div>
        </div>

        <Footer />
    </>
}
