import * as React from "react";
import IdNameModel from "src/model/id-name";

export enum BadgeColor {
    purple = "rr-badge-purple",
    green = "rr-badge-green"
}

interface BadgeProps {
    value: IdNameModel;
    color: BadgeColor;
    onClick?: (x: IdNameModel) => void;
    onDelete?: (x: IdNameModel) => void;
}

//--------------------------------------------------------------------------------------------------
export function Badge(props: BadgeProps) {

    return <li className={props.color} onClick={_ => props.onClick(props.value)}>
        {props.value.name}
        <i className="fo icon-cancel-circled" onClick={_ => props.onDelete(props.value)} />
    </li>
}