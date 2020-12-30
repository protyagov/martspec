import * as React from "react";
import _ from "src/i18n/locale";

const logo = require("src/img/error_generic.svg").default;

export default function Error_500() {
    return <div>
        <div className="container rr-status-page">
            <img src={logo} />

            <h1>{_("ERROR.500_HEAD")}</h1>
            <p className="lead">{_("ERROR.500_TEXT")}</p>

            <a href="/">
                <button type="button" className="btn btn-outline-secondary btn-lg ml-2">
                    {_("ERROR.500_BTN")}
                </button>
            </a>
        </div>
    </div>
}