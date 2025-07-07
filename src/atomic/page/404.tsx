import * as React from "react";
import _ from "@/i18n/locale";

export default function PageError_404() {
    return (
        <div className="ms-base-page text-center pt-5 mt-5">
            <img
                src="/img/error_404.svg"
                alt={_("ERROR.404_HEAD")}
                height={300}
                width={326}
                style={{
                    marginLeft: "auto",
                    marginRight: "auto",
                    maxWidth: "30vmax",
                    paddingTop: "3rem",
                }}
            />
            <h1>{_("ERROR.404_HEAD")}</h1>
            <p className="lead fo-2x" style={{marginBottom: "4rem"}}>{_("ERROR.404_TEXT")}</p>
            <a href="/">
                <button type="button" className="btn btn-outline-secondary btn-lg ml-2">
                    {_("ERROR.404_BTN")}
                </button>
            </a>
        </div>
    );
}
