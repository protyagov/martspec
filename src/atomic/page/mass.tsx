import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { Footer } from "src/atomic/organism/footer";
import NavigationBar from "src/atomic/organism/navbar";
import PageHeader from "../molecule/page-header";

export default function Bodymass() {
    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5">

            <PageHeader
                title="MASS.HEAD"
                subtitleLevel2="MASS.ABOUT"
                appId={1507588203}
                appDownloadTitle="MASS.DWN"
                imgSrc="/img/page/body-mass/mass.svg"
                imgAlt="MASS.IMG"
                imgH={406}
                imgW={512}
            />

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


        <div className="container mb-5 pb-5 text-center">
            <img src="/img/page/body-mass/mass-app.webp" alt={_("MAIN.P2.IMG")} className="ms-base-image" width="512px" height="512px" />
        </div>

        <Footer />
    </>
}