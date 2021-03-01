import * as React from "react";
import _ from "src/i18n/locale"
import { Footer } from "src/part/footer";
import IronImage from "src/part/iron-image";
import NavigationBar from "src/part/navbar";
const logo = require("src/img/electrolyte.svg").default;

export default function P1Electrolyte() {
    return (
        <div>
            <NavigationBar title={_("MAIN.P1.HEAD")} />

            <section className="rr-s-about">
                <div className="row" >
                    <div className="col-sm-12 col-md-9 order-last order-md-1">
                        <h3 className="mt-3">{_("PRODUCT.P1.ABOUT")}</h3>

                        <h1>{_("PRODUCT.P1.HEAD1")}</h1>
                        <h3 className="mt-3">
                            {_("PRODUCT.P1.DESC1")}
                            <a href="https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional" target="_blank">
                                <small><i>{_("BTN.SRC1")}.</i></small>
                            </a>
                        </h3>


                        <h1>{_("PRODUCT.P1.HEAD2")}</h1>
                        <h3 className="mt-3">
                            {_("PRODUCT.P1.DESC2")}
                            <a href="https://ods.od.nih.gov/factsheets/Calcium-Consumer" target="_blank">
                                <small><i>{_("BTN.FACT")}.</i></small>
                            </a>
                        </h3>


                        <h1>{_("PRODUCT.P1.HEAD3")}</h1>
                        <h3 className="mt-3">
                            {_("PRODUCT.P1.DESC3")}
                            <a href="https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional" target="_blank">
                                <small><i>{_("BTN.SRC2")}.</i></small>
                            </a>
                        </h3>

                        <h1>{_("PRODUCT.P1.HEAD4")}</h1>
                        <h3 className="mt-3">
                            {_("PRODUCT.P1.DESC4")}
                            <a href="https://ods.od.nih.gov/factsheets/Iron-HealthProfessional" target="_blank">
                                <small><i>{_("BTN.FACT")}.</i></small>
                            </a>
                        </h3>

                        <h1 style={{ color: "#BF4803" }}>{_("PRODUCT.P1.HEAD5")}</h1>
                        <h3 className="mt-3">
                            {_("PRODUCT.P1.DESC5")}
                            <a href="https://en.wikipedia.org/wiki/Electrolyte_imbalance" target="_blank">
                                <small><i>{_("BTN.WIKI")}.</i></small>
                            </a>
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
                        <IronImage imgLo="/img/p_electrolyte_screens_sm.png" imgHi="/img/p_electrolyte_screens.png" text={_("MAIN.P1.IMG")} />
                    </div>
                    <div className="col-md-5 col-12 text-center pb-5">
                        <a href={`https://apps.apple.com/${_("APPSTORE")}/app/electrolyte/id1507719251`}
                            target="_blank" title={_("MAIN.P1.DWN")}>
                            <span className="ms-btn-apple my-5 float-md-right text-center" />
                        </a>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}
