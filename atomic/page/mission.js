import * as React from "react";
import { Footer } from "src/atomic/organism/footer";
import NavigationBar from "src/atomic/organism/navbar";
import _ from "src/i18n/locale";
import PageHeader from "../molecule/page-header";
export default function Mission() {
    return React.createElement(React.Fragment, null,
        React.createElement(NavigationBar, null),
        React.createElement("div", { className: "ms-base-page pb-5" },
            React.createElement(PageHeader, { title: "MISSION.HEAD", subtitleLevel1: "MISSION.ABOUT_1", appId: 1507588203, appDownloadTitle: "MISSION.DWN", imgSrc: "/img/mission.svg", imgAlt: "MISSION.IMG", imgH: 300, imgW: 391 }),
            React.createElement("section", null,
                React.createElement("p", null, _("MISSION.P1")),
                React.createElement("ul", null,
                    React.createElement("li", null, _("MISSION.P1_1")),
                    React.createElement("li", null, _("MISSION.P1_2")),
                    React.createElement("li", null, _("MISSION.P1_3"))),
                React.createElement("p", null, _("MISSION.P2")))),
        React.createElement(Footer, null));
}
//# sourceMappingURL=mission.js.map