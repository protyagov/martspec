import * as React from "react";
import _ from "@/i18n/locale";
import NavigationBar from "@/atomic/organism/navbar";
import ButtonLinkStyleAnimated from "../atom/buttonLinkStyleAnimated";

export default function PageError_404() {
    return (
        <>
            <NavigationBar />
            <div className="ms-base-page error-404 text-center px-3">
                <div className="error-404-content">
                    <div className="error-404-image-wrap">
                        <img src="/img/error_404.svg" alt={_("ERROR.404_HEAD")} className="error-404-image" />
                        <span className="error-404-number">404</span>
                    </div>
                    <h1>{_("ERROR.404_HEAD")}</h1>
                    <p className="text-muted">{_("ERROR.404_TEXT")}</p>
                </div>
                <ButtonLinkStyleAnimated text={_("ERROR.404_BTN")} link="/" />
            </div>
        </>
    );
}
