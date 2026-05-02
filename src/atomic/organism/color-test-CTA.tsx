import * as React from "react";
import _ from "@/i18n/locale";

export function ColorTestCTA() {
    return (
        <section className="text-center color-test-cta">
            <h2>{_("COLOR_TEST.CTA_HEAD")}</h2>
            <p>{_("COLOR_TEST.CTA_DESC")}</p>
        </section>
    );
}