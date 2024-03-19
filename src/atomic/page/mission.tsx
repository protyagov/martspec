import * as React from "react";
import { Footer } from "src/atomic/organism/footer";
import NavigationBar from "src/atomic/organism/navbar";
import _ from "src/i18n/locale"
import PageHeader from "../molecule/page-header";

export default function Mission() {
    return <>
        <NavigationBar />
        <div className="ms-base-page pb-5">

            <PageHeader
                title={_("MISSION.HEAD")}
                subtitleLevel1={_("MISSION.ABOUT_1")}
                appId={1507588203}
                appDownloadTitle={_("MISSION.DWN")}
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
}