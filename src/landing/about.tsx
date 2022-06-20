import * as React from "react";
import { Footer } from "src/part/footer";
import NavigationBar from "src/part/navbar";
import _ from "src/i18n/locale"

export default function About() {
    return <>
        <NavigationBar title="" />

        <div className="ms-base-page pb-5">
            <img src="/img/about.svg" alt={_("ABOUT.HEAD")} />
            <h1 className="text-center pt-3">{_("ABOUT.HEAD")}</h1>
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