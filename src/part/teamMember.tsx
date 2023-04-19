import * as React from "react";
import _ from "src/i18n/locale";

interface TeamMemberProps {
    name: string;
    title: string;
    avatar: string;
}

export default function TeamMember(props: TeamMemberProps) {
    return <div className="d-flex flex-column team-member">
        <img src={props.avatar} onError={e => e.currentTarget.src="/img/team_placeholder.png"}
            alt={_("TEAM." + props.title) + " " + props.name}
            height="150" width="150" className="rounded-circle mb-2 p-0" />
        <h4> { _("TEAM." + props.name) } </h4>
        <h5> { _("TEAM." + props.title) } </h5>
    </div>
}