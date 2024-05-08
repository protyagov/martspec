import * as React from "react";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import _ from "@/i18n/locale";
import PageHeader from "@/atomic/molecule/page-header";

export default function Mission() {
    return (
        <>
            <NavigationBar />
            <div className="ms-base-page pb-5">
                <PageHeader
                    title={_("MISSION.HEAD")}
                    subtitleLevel1={_("MISSION.ABOUT_1")}
                    appId={1}
                    appDownloadTitle={_("FOOTER.APPLE_BTN.ALT")}
                    imgSrc="/img/mission.svg"
                    imgAlt={_("MISSION.IMG")}
                    imgH={300}
                    imgW={391}
                />

                <section>
                    <p>{_("MISSION.P1")}</p>
                    <ul>
                        <li>{_("MISSION.P1_1")}</li>
                        <li>{_("MISSION.P1_2")}</li>
                        <li>{_("MISSION.P1_3")}</li>
                    </ul>
                    <p>{_("MISSION.P2")}</p>
                </section>
            </div>
            <Footer />
        </>
    );
}
