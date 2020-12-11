import * as React from "react";
import { useHistory } from "react-router-dom";

interface NavBarProps {
    title: string;
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
    let history = useHistory();

    function leftButtonClick() {
        if (props.leftButtonCommand)
            props.leftButtonCommand();
        else if (props.letfButtonRedirectPage)
            history.push(props.letfButtonRedirectPage);
        else
            history.goBack();
    }

    function rightButtonClick() {
        if (props.rightButtonCommand)
            props.rightButtonCommand();

        if (props.rightButtonRedirectPage)
            history.push(props.rightButtonRedirectPage);
    }

    return (
        <nav className="rr-navbar">
            <div className="lButton" onClick={leftButtonClick}>
                <i className={props.leftButtonIcon || "fo icon-left-open-big"} />
                <span className="lText" >{props.leftButtonText || "Back"}</span>
            </div>

            <h2 className="title">{props.title}</h2>

            <div className="btn btn-link rButton" onClick={rightButtonClick}>
                <span className="rText">{props.rightButtonText}</span>
                <i className={props.rightButtonIcon || " "} />
            </div>
        </nav>
    )
}