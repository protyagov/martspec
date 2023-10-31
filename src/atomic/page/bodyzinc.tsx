import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { Footer } from "src/atomic/organism/footer";
import NavigationBar from "src/atomic/organism/navbar";
import ImageI18N from "src/atomic/atom/img-i18n";
import PageHeader from "../molecule/page-header";


export default function BodyZinc() {
    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5">

            <PageHeader
                PAGE="ZINC" appId={1547395353}
                imgSrc="/img/page/zinc/body-zinc.svg" imgH={426} imgW={420}
            />

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
            {/* <img src='../img/zinc/p_zinc_screen.en.512.webp' alt={_("MAIN.P4.IMG")} className="ms-base-image" width="512px" height="512px" /> */}
            <ImageI18N src='/img/page/zinc/zinc-app-en.webp' alt={_("MAIN.P4.IMG")} cls="ms-base-image" w={512} h={512} />
        </div>

        <Footer />
    </>
}
