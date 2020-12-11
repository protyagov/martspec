import * as React from "react";

interface SpinnerProps {
    show: boolean;
    marginTop: string;
}


export default class Spinner extends React.Component<SpinnerProps, {}> {
    constructor(props: SpinnerProps) {
        super(props);
    }

    render() {
        if (this.props.show)
            return (
                <div className="cs-loader">
                    <div className="cs-loader-inner" style={{ top: this.props.marginTop }}>
                        <label>	●</label>
                        <label>	●</label>
                        <label>	●</label>
                        <label>	●</label>
                        <label>	●</label>
                        <label>	●</label>
                    </div>
                </div>);

        else
            return <div />;
    }
}