import * as React from "react";
import { Footer } from "src/atomic/organism/footer";
import NavigationBar from "src/atomic/organism/navbar";
import _ from "src/i18n/locale"

export default function About() {
    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5">
            <section>
                <img src="/img/about.svg" className="ms-base-image" alt={_("ABOUT.HEAD")} height={300} width={326} />
                <h1 className="text-center pt-3">{_("ABOUT.HEAD")}</h1>
            </section>
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