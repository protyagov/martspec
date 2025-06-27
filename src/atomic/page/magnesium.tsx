import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { getAppId } from "@/service/AppleService";
import Header from "@/atomic/organism/header";
import NavigationBar from "@/atomic/organism/navbar";
import { Footer } from "@/atomic/organism/footer";
import ScrollButton from "../atom/scroll-button";

export default function Magnesium() {
    const appId = getAppId();
    return (
        <>
            <NavigationBar />
            <div className="ms-base-page ms-base-new">
                <Header
                    title={_("MAGNESIUM.HEAD")}
                    appId={appId}
                    appDownloadTitle={_("MAGNESIUM.DWN")}
                    imgSrc="/img/page/magnesium/Img-MG-header-en.webp"
                    imgAlt={_("MAGNESIUM.IMG")}
                    imgH={305}
                    imgW={450}
                >
                    <div className="magnesium">
                        <ul className="header-content-list">
                            <li>{_("MAGNESIUM.ABOUT_1")}</li>
                            <li>{_("MAGNESIUM.ABOUT_2")}</li>
                            <li>{_("MAGNESIUM.ABOUT_3")}</li>
                        </ul>
                    </div>
                </Header>
            </div>
            <Footer />
            <ScrollButton />
        </>
    );
}
