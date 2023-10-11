import * as React from "react";
import _ from "src/i18n/locale";
import SocialBar from "src/part/social-bar";

export default function ComingSoon() {
    return <div className="ms-base-page text-center py-5">
        <section>
            <img src="/img/coming-soon.png" className="ms-base-image mb-4" alt={_("COMING_SOON.HEAD")} height={300} width={328} />
            <h1 className="mb-3">{_("COMING_SOON.HEAD")}</h1>
            <p className="mb-0" style={{fontFamily: "os4", color: "#444444"}}>{_("COMING_SOON.TEXT_1")}</p>
            <p className="mb-4" style={{fontFamily: "os4", color: "#444444"}}>{_("COMING_SOON.TEXT_2")}</p>
            <a href="/" className="ms-btn-large mt-1 mb-4">{_("COMING_SOON.BTN")}</a>
        </section>
        <section>
            <p className="pt-3 mb-1" style={{fontFamily: "os4", color: "#444444"}}>{_("COMING_SOON.CTA")}</p>
            <SocialBar color="black" />
        </section>
    </div>
}