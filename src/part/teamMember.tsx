import * as React from "react";
import _ from "src/i18n/locale";

interface TeamMemberProps {
    name: string;
    title: string;
    avatar: string;
}

export default function TeamMember(props: TeamMemberProps) {
    return <div className="mx-4 d-flex flex-column text-center">
        <img src={props.avatar} onError={e => e.currentTarget.src="/img/team_placeholder.png"}
            alt={_("TEAM." + props.title) + " " + props.name}
            height="138" width="138" className="rounded-circle mb-4" />
        <span className="fs-4">
            { props.name }
        </span>
        <span className="fs-4 fw-light">
            { _("TEAM." + props.title) }
        </span>
    </div>
}