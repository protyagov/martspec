import * as React from "react";
import _, { Locale } from "src/i18n/locale"

export default function ComingSoon() {
    return <div className="ms-base-page text-center pb-5">
        <div className="row h-100 align-items-center">
            <div className="col">
                <img src="/img/coming-soon.png" className="mb-5" alt={_("COMING_SOON.HEAD")} height={286} width={466} />
                <h1 className="mb-4">{_("COMING_SOON.HEAD")}</h1>
                <p className="mb-0">{_("COMING_SOON.TEXT_1")}</p>
                <p className="mb-5">{_("COMING_SOON.TEXT_2")}</p>
                <a href={Locale.i18nLink("vitamin")} className="ms-btn-large">{_("COMING_SOON.BTN")}</a>
            </div>
        </div>
    </div>
}