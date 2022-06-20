import * as React from "react";
import _ from "src/i18n/locale"
import { Footer } from "src/part/footer";
import IronImage from "src/part/iron-image";
import NavigationBar from "src/part/navbar";

export default function P7Emotion() {
    return (
        <>
            <NavigationBar title={_("MAIN.P7.HEAD")} />

            <section className="rr-s-about ms-s-offset">
                <div className="row" >
                    <div className="col-sm-12 col-md-9 order-last order-md-1">
                        <h3 className="mt-4">{_("PRODUCT.P7.ABOUT_1")}</h3>
                        <h3 className="mt-4">{_("PRODUCT.P7.ABOUT_2")}</h3>
                        <h3 className="mt-4">{_("PRODUCT.P7.ABOUT_3")}</h3>

                        {/* Body compostion */}
                        <h1>{_("PRODUCT.P7.HEAD1")}</h1>
                        <h3 className="mt-3">{_("PRODUCT.P7.DESC1_1")}</h3>
                        <h3 className="mt-3">{_("PRODUCT.P7.DESC1_2")}</h3>


                        {/* Chest and Bust */}
                        <h1>{_("PRODUCT.P7.HEAD2")}</h1>
                        <h3 className="mt-3">{_("PRODUCT.P7.DESC2_1")}</h3>
                        <h3 className="mt-3">{_("PRODUCT.P7.DESC2_2")}</h3>
                        
                        <h1>{_("PRODUCT.P7.HEAD3")}</h1>
                        <h3 className="mt-3">{_("PRODUCT.P7.DESC3_1")}</h3>
                        <h3 className="mt-3">{_("PRODUCT.P7.DESC3_2")}</h3>

                        {/* Hips Width */}
                        <h1>{_("PRODUCT.P7.HEAD4")}</h1>
                        <h3 className="mt-3">{_("PRODUCT.P7.DESC4")}</h3>


                        {/* Body Shape */}
                        <h1>{_("PRODUCT.P7.HEAD5")}</h1>
                        <h3 className="mt-3">{_("PRODUCT.P7.DESC5_1")}</h3>
                        <h3 className="mt-3">{_("PRODUCT.P7.DESC5_2")}</h3>
                    </div>

                    <div className="col-sm-12 col-md-3 order-sm-1">
                        <img src="/img/emotion.webp" className="mx-auto" alt={_("MAIN.P6.IMG")} />
                    </div>
                </div>
            </section>


            <div className="container mb-5 pb-5">
                <div className="row align-items-center justify-content-sm-center" >
                    <div className="col-md-7 col-12 pb-5">
                        <IronImage imgLo="/img/p_emotion_screens_sm.webp" imgHi="/img/p_emotion_screens.webp" text={_("MAIN.P6.IMG")} />
                    </div>
                    <div className="col-md-5 col-12 text-center pb-5">
                        <a href={`https://apps.apple.com/${_("APPSTORE")}/app/id1562956213`}
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
