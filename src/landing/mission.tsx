import * as React from "react";
import { Footer } from "src/part/footer";
import NavigationBar from "src/part/navbar";
import _ from "src/i18n/locale"

export default function Mission() {
    return <>
        <NavigationBar/>
        <div className="ms-base-page pb-5">
            <img src="/img/mission.svg" alt={_("MISSION.HEAD")} />
            <h1 className="text-center">{_("MISSION.HEAD")}</h1>
            <h2 className="text-center">{_("MISSION.M")}</h2>
            <section>
                <p>{_("MISSION.P1")}
                    <ul>
                        <li>{_("MISSION.P1_1")}</li>
                        <li>{_("MISSION.P1_2")}</li>
                        <li>{_("MISSION.P1_3")}</li>
                    </ul>
                </p>
                <p>{_("MISSION.P2")}</p>
            </section>
        </div>
        <Footer />
    </>
}