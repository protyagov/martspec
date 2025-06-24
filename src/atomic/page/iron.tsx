import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { getAppId } from "@/service/AppleService";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import ScrollButton from "../atom/scroll-button";
import Header from "@/atomic/organism/header";

export default function Iron() {
     const appId = getAppId();
    return (
        <>
            <NavigationBar />

            <div className="ms-base-page ms-base-new">
                <Header
                    title={_("IRON.HEAD")}
                    appId={appId}
                    appDownloadTitle={_("SIZE.DWN")}
                    imgSrc="/img/img-fe-header-en.webp"
                    imgAlt={_("SIZE.IMG")}
                    imgH={405}
                    imgW={550}
                >
                    <div className="iron">
                        <ul className="header-content-list">
                            <li>{_("IRON.ABOUT_1")}</li>
                            <li>{_("IRON.ABOUT_2")}</li>
                            <li>{_("IRON.ABOUT_3")}</li>
                        </ul>
                    </div>
                </Header>

            </div>

            <Footer />
            <ScrollButton />
        </>
    );
}
