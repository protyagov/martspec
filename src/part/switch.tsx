import * as React from "react";

interface OnOffProps {
    value: boolean;
    click: (value: boolean) => void;
    disabled?: boolean;
}

export default class OnOff extends React.Component<OnOffProps, {}> {
    constructor(props: OnOffProps) {
        super(props);
    }

    render() {
        let cName = "fa fa-toggle-" + (this.props.value ? "on" : "off");

        if (this.props.disabled === true)
            cName += " text-muted";
        else if (this.props.value)
            cName += " text-success";
        else
            cName += " text-secondary";

        return <i className={cName}
            onClick={() => this.props.disabled === true ? "" : this.props.click(!this.props.value)}
            style={{ fontSize: '2.7rem', margin: '-0.2rem' }} />
    }
}
