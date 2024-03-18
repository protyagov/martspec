import * as React from "react";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import _ from "@/i18n/locale"
import PageHeader from "@/atomic/molecule/page-header";

export default function Mission() {
    return <>
        <NavigationBar />
        <div className="ms-base-page pb-5">

            <PageHeader
                title="MISSION.HEAD"
                subtitleLevel1="MISSION.ABOUT_1"
                appId={1507588203}
                appDownloadTitle="MISSION.DWN"
                imgSrc="/img/mission.svg"
                imgAlt="MISSION.IMG"
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