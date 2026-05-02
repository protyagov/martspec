import * as React from "react";
import _ from "@/i18n/locale";

export function ColorTestInfoSection() {
    return (
        <section className="block bg-gray color-test-info">
            <h2>{_("COLOR_TEST.HEAD2")}</h2>
            <p>{_("COLOR_TEST.DESC2")}</p>

            <h2>{_("COLOR_TEST.HEAD3")}</h2>
            <p>{_("COLOR_TEST.DESC3")}</p>

            <h2>{_("COLOR_TEST.HEAD4")}</h2>
            <p>{_("COLOR_TEST.DESC4")}</p>
        </section>
    );
}