import * as React from "react";
import { Link } from "react-router-dom";
import _ from "src/i18n/locale";

const logo = require("src/img/error_404.svg").default;

export default function PageError_404() {

    return <div>
        <div className="container rr-status-page">
            <img src={logo} />
            <h1>{_("ERROR.404_HEAD")}</h1>
            <p className="lead">{_("ERROR.404_TEXT")}</p>
            <Link to="/">
                <button type="button" className="btn btn-outline-secondary btn-lg ml-2">
                    {_("ERROR.404_BTN")}
                </button>
            </Link>
        </div>
    </div>
}