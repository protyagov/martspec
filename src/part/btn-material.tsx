import * as React from "react";

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
interface ButtonMaterialProps {
    text: string;
    icon: string;
    onClick?: () => void;
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
export default class ButtonMaterial extends React.Component<ButtonMaterialProps> {
    constructor(props: ButtonMaterialProps) {
        super(props);
    }

    render() {
        return (
            <footer className="fixed-bottom">
                <div className="container-fluid cl-position-absolute">
                    <button type="button" onClick={this.props.onClick}
                        className="btn btn-primary cl-btn-material pull-right shadow">
                        <i className={this.props.icon} />{this.props.text}</button>
                </div>
            </footer>
        );
    }
}
