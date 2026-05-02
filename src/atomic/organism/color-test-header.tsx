import * as React from "react";
import _ from "@/i18n/locale";
import { Locale } from "@/i18n/locale";

type Props = {
    hasResult: boolean;
};

export function ColorTestHeader({ hasResult }: Props) {
    return (
        <section className="text-center my-0 color-test-header">
            <div className="row">
                <div className="col-9 mx-auto">
                    <h2>{_("COLOR_TEST.HEAD1")}</h2>
                    <p className="mb-0">{_("COLOR_TEST.DESC1")}</p>

                    {hasResult && (
                        <a
                            href={Locale.i18nLink("emotion/color-test")}
                            className="ms-btn-large"
                        >
                            {_("COLOR_TEST.BTN_AGAIN")}
                        </a>
                    )}
                </div>
            </div>
        </section>
    );
}