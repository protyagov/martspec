import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { Footer } from "src/part/footer";
import IronImage from "src/part/iron-image";
import NavigationBar from "src/part/navbar";

export default function P1Electrolyte() {
    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5">
            <img src="/img/electrolyte.svg" className="mx-auto" alt={_("MAIN.P1.IMG")} height={512} width={512} />
            <h1 className="text-center pt-3">{_("ELECTROLYTE.HEAD")}</h1>


            <section>
                <p className="mt-4">{_("ELECTROLYTE.ABOUT")}</p>
                <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1507719251?l=${Locale.language}`}
                    target="_blank" title={_("MAIN.P1.DWN")} className="ms-btn-apple"
                    style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                </a>
            </section>


            <section >
                <h4>{_("ELECTROLYTE.HEAD1")}</h4>
                <p className="mt-3">
                    {_("ELECTROLYTE.DESC1")}
                    <a href="https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional" target="_blank">
                        <small><i>{_("BTN.SRC1")}.</i></small>
                    </a>
                </p>
            </section>

            <section>
                <h4>{_("ELECTROLYTE.HEAD2")}</h4>
                <p className="mt-3">
                    {_("ELECTROLYTE.DESC2")}
                    <a href="https://ods.od.nih.gov/factsheets/Calcium-Consumer" target="_blank">
                        <small><i>{_("BTN.FACT")}.</i></small>
                    </a>
                </p>
            </section>

            <section>
                <h4>{_("ELECTROLYTE.HEAD3")}</h4>
                <p className="mt-3">
                    {_("ELECTROLYTE.DESC3")}
                    <a href="https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional" target="_blank">
                        <small><i>{_("BTN.SRC2")}.</i></small>
                    </a>
                </p>
            </section>

            <section>
                <h4>{_("ELECTROLYTE.HEAD4")}</h4>
                <p className="mt-3">
                    {_("ELECTROLYTE.DESC4")}
                    <a href="https://ods.od.nih.gov/factsheets/Iron-HealthProfessional" target="_blank">
                        <small><i>{_("BTN.FACT")}.</i></small>
                    </a>
                </p>
            </section>

            <section>
                <h4 style={{ color: "#BF4803" }}>{_("ELECTROLYTE.HEAD5")}</h4>
                <p className="mt-3">
                    {_("ELECTROLYTE.DESC5")}
                    <a href="https://en.wikipedia.org/wiki/Electrolyte_imbalance" target="_blank">
                        <small><i>{_("BTN.WIKI")}.</i></small>
                    </a>
                </p>
            </section>
        </div>


        <div className="container mb-5 pb-5">
            <IronImage imgLo="/img/p_electrolyte_screens.64.webp" imgHi="/img/p_electrolyte_screens.512.webp" text={_("MAIN.P1.IMG")} h={560} w={1458} />
        </div>

        <Footer />
    </>
}
