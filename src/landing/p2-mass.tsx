import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { Footer } from "src/part/footer";
import NavigationBar from "src/part/navbar";
import IronImage from "src/part/iron-image";

export default function P2bodymass() {
    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5">
            <section>
                <img src="/img/mass.svg" className="mx-auto" alt={_("MASS.IMG")} height={512} width={512} />
                <h1 className="text-center pt-3 ">{_("MASS.HEAD")}</h1>
            </section>


            <section>
                <p className="mt-4">{_("MASS.ABOUT")}</p>
                <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1507588203?l=${Locale.language}`}
                    target="_blank" title={_("MAIN.P3.DWN")} className="ms-btn-apple"
                    style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                </a>
            </section>

            <section>
                <h4>{_("MASS.HEAD1")}</h4>
                <p className="mt-3">{_("MASS.DESC1")}</p>
            </section>

            <section>
                <h4>{_("MASS.HEAD2")}</h4>
                <p className="mt-3">{_("MASS.DESC2")}</p>
            </section>

            <section>
                <h4>{_("MASS.HEAD3")}</h4>
                <p className="mt-3">{_("MASS.DESC3")}</p>
            </section>

            <section>
                <h4>{_("MASS.HEAD4")}</h4>
                <p className="mt-3">
                    <ul>
                        <li>{_("MASS.DESC4_1")}</li>
                        <li>{_("MASS.DESC4_2")}</li>
                        <li>{_("MASS.DESC4_3")}</li>
                        <li>{_("MASS.DESC4_4")}</li>
                        <li>{_("MASS.DESC4_5")}</li>
                        <li>{_("MASS.DESC4_6")}</li>
                        <li>{_("MASS.DESC4_7")}</li>
                    </ul>
                </p>
            </section>


        </div>


        <div className="pb-5 text-center">
            <IronImage imgLo="/img/p_mass_screens.64.webp" imgHi="/img/p_mass_screens.512.webp" text={_("MAIN.P2.IMG")} h={512} w={512} />
        </div>
        <Footer />
    </>
}