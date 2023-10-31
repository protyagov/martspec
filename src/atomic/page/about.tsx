import * as React from "react";
import { Footer } from "src/atomic/organism/footer";
import NavigationBar from "src/atomic/organism/navbar";
import _ from "src/i18n/locale"
import PageHeader from "../molecule/page-header";

export default function About() {
    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5">

            <PageHeader PAGE="ABOUT" imgSrc="/img/about.svg" imgH={400} imgW={426} />

            <section>
                <p>{_("ABOUT.P1")}</p>
                <p>{_("ABOUT.P2")}</p>
                <p>{_("ABOUT.P3")}</p>
                <p>{_("ABOUT.P4")}</p>
                <p>{_("ABOUT.P5")}</p>
                <p>{_("ABOUT.P6")}</p>
            </section>
        </div>
        <Footer />
    </>
}