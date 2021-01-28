import * as React from "react";
import _ from "src/i18n/locale"
const logo = require("src/img/logo.png").default;

interface NavBarProps {
    title: string;
    leftButtonHide?: boolean;
    leftButtonIcon?: string;
    leftButtonText?: string;
    letfButtonRedirectPage?: string;
    rightButtonIcon?: string;
    rightButtonText?: string;
    rightButtonRedirectPage?: string;
    rightButtonCommand?: () => void;
    leftButtonCommand?: () => void;
}

export default function NavigationBar(props: NavBarProps) {
    // let history = useHistory();

    function leftButtonClick() {
        if (props.leftButtonCommand)
            props.leftButtonCommand();
        else if (props.letfButtonRedirectPage)
            history.pushState(null, null, props.letfButtonRedirectPage);
        else
            history.back();
    }

    function leftButton() {
        return <div className="lButton">
            <a className="btn btn-link" href='/'>
                <img src={logo} className="img-fluid" alt={_("NAV.HOME")} />
            </a>
        </div>

    }

    function rightButtonClick() {
        if (props.rightButtonCommand)
            props.rightButtonCommand();

        if (props.rightButtonRedirectPage)
            history.pushState(null, null, props.rightButtonRedirectPage);
    }

    return (
        <nav className="rr-navbar">
            {!props.leftButtonHide && leftButton()}

            <h2 className="title">{props.title}</h2>

            <div className="btn btn-link rButton" onClick={rightButtonClick}>
                <span className="rText">{props.rightButtonText}</span>
                <i className={props.rightButtonIcon || " "} />
            </div>
        </nav>
    )
}