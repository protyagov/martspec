import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import PageHeader from "@/atomic/molecule/page-header";
import Header from "@/atomic/organism/header";

export default function Electrolyte() {
    return (
        <>
            <NavigationBar />

            <div className="ms-base-page ms-base-new electrolyte">
                <Header
                    title={_("ELECTROLYTE.HEAD")}
                    appId={1519596234}
                    appDownloadTitle={_("ELECTROLYTE.DWN")}
                    imgSrc="/img/page/electrolyte/electrolyte-header-en.webp"
                    imgAlt={_("ELECTROLYTE.IMG")}
                    imgH={531}
                    imgW={722}
                    content={
                        <ul className="header-content-list">
                            <li>{_("ELECTROLYTE.ABOUT_1")}</li>
                            <li>{_("ELECTROLYTE.ABOUT_2")}</li>
                            <li>{_("ELECTROLYTE.ABOUT_3")}</li>
                        </ul>
                    }
                />
            </div>

            <div className="ms-base-page">
                <section>
                    <h4>{_("ELECTROLYTE.HEAD1")}</h4>
                        <p className="mt-3">
                            {_("ELECTROLYTE.DESC1")}
                            <a href="https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional" target="_blank">
                                <small>
                                    <i>{_("BTN.SRC1")}.</i>
                                </small>
                            </a>
                        </p>
                </section>

                <section>
                    <h4>{_("ELECTROLYTE.HEAD2")}</h4>
                    <p className="mt-3">
                        {_("ELECTROLYTE.DESC2")}
                        <a href="https://ods.od.nih.gov/factsheets/Calcium-Consumer" target="_blank">
                            <small>
                                <i>{_("BTN.FACT")}.</i>
                            </small>
                        </a>
                    </p>
                </section>

                <section>
                    <h4>{_("ELECTROLYTE.HEAD3")}</h4>
                    <p className="mt-3">
                        {_("ELECTROLYTE.DESC3")}
                        <a href="https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional" target="_blank">
                            <small>
                                <i>{_("BTN.SRC2")}.</i>
                            </small>
                        </a>
                    </p>
                </section>

                <section>
                    <h4>{_("ELECTROLYTE.HEAD4")}</h4>
                    <p className="mt-3">
                        {_("ELECTROLYTE.DESC4")}
                        <a href="https://ods.od.nih.gov/factsheets/Iron-HealthProfessional" target="_blank">
                            <small>
                                <i>{_("BTN.FACT")}.</i>
                            </small>
                        </a>
                    </p>
                </section>

                <section>
                    <h4 style={{ color: "#BF4803" }}>{_("ELECTROLYTE.HEAD5")}</h4>
                    <p className="mt-3">
                        {_("ELECTROLYTE.DESC5")}
                        <a href="https://en.wikipedia.org/wiki/Electrolyte_imbalance" target="_blank">
                            <small>
                                <i>{_("BTN.WIKI")}.</i>
                            </small>
                        </a>
                    </p>
                </section>
            </div>

            <div className="container mb-5 pb-5 text-center">
                <img
                    src="/img/page/electrolyte/electrolyte-app.webp"
                    alt={_("MAIN.P1.IMG")}
                    className="ms-base-image"
                    width="512px"
                    height="512px"
                />
            </div>

            <Footer />
        </>
    );
}
