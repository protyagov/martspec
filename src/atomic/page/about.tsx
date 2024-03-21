import * as React from "react";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import _ from "@/i18n/locale"
import PageHeader from "@/atomic/molecule/page-header";

export default function About() {
    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5">

            <PageHeader
                title={_("ABOUT.HEAD")}
                imgSrc="/img/about.svg"
                imgAlt={_("ABOUT.IMG")}
                imgH={400}
                imgW={426}
            />

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