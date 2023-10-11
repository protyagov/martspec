import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { Footer } from "src/part/footer";
import NavigationBar from "src/part/navbar";

export default function P5BodyZinc() {
    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5">
            <section>
                <img src="/img/bodyzinc.svg" className="ms-base-image" alt={_("ZINC.IMG")} height={512} width={512} />
                <h1 className="text-center pt-3 ">{_("ZINC.HEAD")}</h1>
            </section>


            <section>
                <p className="mt-4">{_("ZINC.ABOUT")}</p>
                <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1547395353?l=${Locale.language}`}
                    target="_blank" title={_("ZINC.DWN")} className="ms-btn-apple"
                    style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                </a>
            </section>


            <section>
                <h4>{_("ZINC.HEAD1")}</h4>
                <p className="mt-3">
                    {_("ZINC.DESC1")}
                    <a href="https://www.healthline.com/nutrition/zinc" target="_blank">
                        <br /><small><i>{_("ZINC.LINK1")}</i></small>
                    </a>
                </p>
            </section>

            <section>
                <h4>{_("ZINC.HEAD2")}</h4>
                <p className="mt-3">
                    {_("ZINC.DESC2")}
                    <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4413488/" target="_blank">
                        <br /><small><i>Indian J Plast Surg. 2015 Jan-Apr; 48(1): 4–16.</i></small>
                    </a>
                </p>
            </section>

            <section>
                <h4>{_("ZINC.HEAD3")}</h4>
                <p className="mt-3">
                    {_("ZINC.DESC3")}
                    <a href="https://www.ncbi.nlm.nih.gov/books/NBK493173/" target="_blank">
                        <br /><small><i>Chronic Inflammation</i></small>
                    </a>
                </p>
            </section>
        </div>


        <div className="container mb-5 pb-5 text-center">
            <img src="/img/p_zinc_screens.512.webp" alt={_("MAIN.P4.IMG")} className="ms-base-image" width="512px" height="512px" />
        </div>

        <Footer />
    </>
}
