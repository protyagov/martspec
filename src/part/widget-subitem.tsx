import * as React from "react";

interface WidgitSubitemModel {
    title: string;
    value?: string | number;
    icon?: string;
}

export default function WidgetSubitem(props: WidgitSubitemModel) {
    return <div className="col-3 rr-widget-subitem" >
        <div className="title">{props.title}</div>

        {props.value && <div className="value">{props.value}</div>}
        {props.icon && <i className={props.icon} />}
    </div>;
}