import * as React from "react";
import { Footer } from "src/atomic/organism/footer";
import NavigationBar from "src/atomic/organism/navbar";
import TeamMember from "src/atomic/molecule/team-Member";
import teamData from "src/data/team.json";
import PageHeader from "../molecule/page-header";
export default function Team() {
    return React.createElement(React.Fragment, null,
        React.createElement(NavigationBar, null),
        React.createElement("div", { className: "ms-base-page pb-5 text-center ms-team" },
            React.createElement(PageHeader, { title: "TEAM.HEAD", subtitleLevel2: "TEAM.ABOUT" }),
            React.createElement("section", null,
                React.createElement("div", { className: " d-flex flex-wrap justify-content-center members-list" }, teamData.map(member => React.createElement(TeamMember, { key: member.name, ...member }))))),
        React.createElement(Footer, null));
}
//# sourceMappingURL=team.js.map