import * as React from "react";
import _ from "@/i18n/locale";

export default function PageError_404() {
    return (
        <div className="container-xl text-center pt-5 mt-5">
            <div className="row justify-content-center pt-5 mb-4">
                <div className="col-8 col-sm-6 col-lg-3">
                    <img src="/img/error_404.svg" alt={_("ERROR.404_HEAD")} className="img-fluid mx-auto d-block mb-5" />
                </div>
            </div>

            <h1 className="my-5">{_("ERROR.404_HEAD")}</h1>

            <p className="mb-5">{_("ERROR.404_TEXT")}</p>

            <a href="/" className="btn btn-outline-secondary btn-lg">
                {_("ERROR.404_BTN")}
            </a>
        </div>
    );
}
