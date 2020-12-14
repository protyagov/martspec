import * as React from "react";
import { useHistory } from "react-router-dom";
import AuthAPI from "src/api/auth";
import _ from "src/i18n/locale";
import Avatar from "./avatar";
const logo = require("src/img/logo.png").default;

interface NavBarSignInProps {
    title: string;
    leftIsHomeLogo?: boolean;
    leftButtonIcon?: string;
    leftButtonText?: string;
    letfButtonRedirectPage?: string;
    leftButtonCommand?: () => void;
}

export default function NavBarSignIn(props: NavBarSignInProps) {
    // let history = useHistory();

    function leftButtonClick() {
        if (props.leftButtonCommand)
            props.leftButtonCommand();
        else if (props.letfButtonRedirectPage)
            history.pushState(null, null, props.letfButtonRedirectPage);
        else if (history.length == 0)
            history.pushState(null, null, "/")
        else
            history.back();
    }

    function signInButton() {
        // if (!AuthAPI.isLoggedIn)
        //     return <div className="rButton" style={{ marginRight: "-1rem" }}>
        //         <button className="btn" onClick={() =>
        //             history.push({ pathname: '/auth/login', state: { pathname: history.location.pathname } })}>
        //             <span className="rText">{_("AUTH.LOGIN.SIGN_IN")}</span>
        //             <i className="fo icon-user-o fo-2x" />
        //         </button>
        //     </div >

        // const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        // const url = AuthAPI.user?.imageUrl;

        // if (url) {
        //     let cssProperties: any = {}
        //     cssProperties['--avatar-top'] = url ? '-0.4rem' : "0.05rem";
        //     return <div className="rButton" style={{ marginRight: url ? "-1rem" : "0.4rem" }}>
        //         <button className="btn d-flex" onClick={() => history.push('/option')}
        //             style={cssProperties}>
        //             {vw > 380 && <span className="rText">{AuthAPI.user?.name}</span>}
        //             <Avatar src={url} size={url ? "3rem" : "2rem"} />
        //         </button>
        //     </div>
        // }


        // return <div className="rButton" style={{ marginRight: "-1rem" }}>
        //     <button className="btn btn-link" onClick={() => history.push('/option')}>
        //         {vw > 380 && <span className="rText">{AuthAPI.user?.name}</span>}
        //         <i className="fo icon-user fo-2x" />
        //     </button>
        // </div>
    }

    function leftButton() {
        if (props.leftIsHomeLogo === true)
            return <div className="lButton">
                <a className="btn btn-link" href='/'>
                    <img src={logo} alt="Recruiter Review Home" />
                </a>
            </div>

        return <div className="lButton" onClick={leftButtonClick}>
            <i className={props.leftButtonIcon || "fo icon-left-open-big"} />
            <span className="lText" >{props.leftButtonText || "Back"}</span>
        </div>
    }

    return <nav className="rr-navbar-signin">
        {leftButton()}

        <h2 className="title">{props.title}</h2>

        {signInButton()}
    </nav>
}