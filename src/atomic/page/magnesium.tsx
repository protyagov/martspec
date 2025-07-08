import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { getAppId } from "@/service/AppleService";
import Header from "@/atomic/organism/header";
import NavigationBar from "@/atomic/organism/navbar";
import { Footer } from "@/atomic/organism/footer";
import ScrollButton from "@/atomic/atom/scroll-button";
import CardImage from "@/atomic/molecule/card-image";
import CardTitleText from "@/atomic/molecule/card-title-text";
import CardTitleTextImage from "@/atomic/molecule/card-title-text-image";

export default function Magnesium() {
    const appId = getAppId();
    return (
        <>
            <NavigationBar />
            <div className="ms-base-page">
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
                <section>
                    <div className="row row-cols-xl-3 row-cols-md-3 row-cols-1 g-4">
                        <div className="col">
                            <CardTitleTextImage
                                title={_("MAGNESIUM.LIST1.LI1_HEAD")}
                                text={_("MAGNESIUM.LIST1.LI1_TEXT")}
                                imgSrc="/img/page/magnesium/section-left.webp"
                                imgH={223}
                                imgW={192}
                                imgAlt={_("MAGNESIUM.LI1_IMG_ALT")}
                            />
                        </div>
                        <div className="col p-0">
                            <div className="row row-cols-1 h-100 p-0">
                                <div className="col py-0">
                                    <CardTitleText
                                        title={_("MAGNESIUM.LIST1.LI2_HEAD")}
                                        text={_("MAGNESIUM.LIST1.LI2_TEXT")}
                                        bgColor="#EEFFD8"
                                    />
                                </div>
                                <div className="col py-0 mt-4">
                                    <CardTitleText
                                        title={_("MAGNESIUM.LIST1.LI3_HEAD")}
                                        text={_("MAGNESIUM.LIST1.LI3_TEXT")}
                                        bgColor="#EEF6FF"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-4">
                            <CardImage
                                imgSrc="/img/page/magnesium/section-right.webp"
                                imgH={434}
                                imgW={400}
                                imgAlt={_("MAGNESIUM.LI2_IMG_ALT")}
                                bgColor="#F8FAFB"
                                alignItems="center"
                                justifyContent="center"
                            />
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
            <ScrollButton />
        </>
    );
}
