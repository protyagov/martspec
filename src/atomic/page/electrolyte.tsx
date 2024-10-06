import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { Footer } from "@/atomic/organism/footer";
import ImageI18N from "../atom/img-i18n";
import NavigationBar from "@/atomic/organism/navbar";
import Header from "@/atomic/organism/header";
import CardTitleTextButton from "@/atomic/molecule/card-title-text-button";
import TitleTextLinkCard from "@/atomic/molecule/title-text-link-card";
import Review from "@/atomic/prototype/review";
import { getAppId } from "@/service/AppleService";

export default function Electrolyte() {
    const appId = getAppId();
    return (
        <>
            <NavigationBar />
            <div className="electrolyte">
                <div className="ms-base-page ms-base-new">
                    <Header
                        title={_("ELECTROLYTE.HEAD")}
                        appId={appId}
                        appDownloadTitle={_("ELECTROLYTE.DWN")}
                        imgSrc="/img/page/electrolyte/electrolyte-header-en.webp"
                        imgAlt={_("ELECTROLYTE.IMG")}
                        imgH={531}
                        imgW={722}
                        content={
                            <ul className="header-content-list">
                                <li>{_("ELECTROLYTE.ABOUT_1")}</li>
                                <li>{_("ELECTROLYTE.ABOUT_2")}</li>
                                <li>{_("ELECTROLYTE.ABOUT_3")}</li>
                            </ul>
                        }
                    />

                    <section>
                        <div className="row d-flex justify-content-between g-4">
                            <div className="col-12 col-xxl-6">
                                <ImageI18N
                                    src="/img/page/electrolyte/electrolyte-middle-pic-ru.webp"
                                    w={487}
                                    h={515}
                                    cls="ms-base-image mt-mob-xs mb-6"
                                    alt={_("ELECTROLYTE.IMG")}
                                />
                            </div>
                            <div className="col-12 col-xxl-6">
                                <CardTitleTextButton
                                    title={_("ELECTROLYTE.HEAD2")}
                                    textContent={[_("ELECTROLYTE.DESC2_1"), _("ELECTROLYTE.DESC2_2")]}
                                    buttonText={_("ELECTROLYTE.BTN_MORE")}
                                    buttonLink={Locale.i18nLink(`coming-soon`)}
                                    buttonColor="#8079CC"
                                />
                            </div>
                        </div>
                    </section>

                    <section className="section">
                        <div className="row mb-0">
                            <div className="col-12 mb-2">
                                <h2>{_("ELECTROLYTE.MINERALS_H2")}</h2>
                                <p>{_("ELECTROLYTE.MINERALS_P")}</p>
                            </div>

                            <div className="row g-4 p-0">
                                <TitleTextLinkCard
                                    title={_("ELECTROLYTE.HEAD3")}
                                    text={_("ELECTROLYTE.DESC3_1")}
                                    link={{
                                        text: _("ELECTROLYTE.BTN_LINK"),
                                        href: "https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional",
                                    }}
                                    gridColumnClass="col-xxl-6"
                                    bgColor="#E5EEFF"
                                    additionalCardClass="electrolyte-card-style"
                                    arrowImage={<img src="/img/page/electrolyte/arrow-icon.webp" width={19} />}
                                    color="#8079CC"
                                    hoverColor="#6760b7"
                                />

                                <TitleTextLinkCard
                                    title={_("ELECTROLYTE.HEAD4")}
                                    text={_("ELECTROLYTE.DESC4_1")}
                                    link={{
                                        text: _("ELECTROLYTE.BTN_LINK"),
                                        href: "https://ods.od.nih.gov/factsheets/Calcium-Consumer",
                                    }}
                                    image="/img/page/electrolyte/calcium.webp"
                                    alt="calcium"
                                    gridColumnClass="col-xxl-6"
                                    additionalCardClass="electrolyte-card-style"
                                    hasShadow={true}
                                    bgColor="transparent"
                                    imageZIndex={-1}
                                    arrowImage={<img src="/img/page/electrolyte/arrow-icon.webp" width={19} />}
                                    color="#8079CC"
                                    hoverColor="#6760b7"
                                />

                                <TitleTextLinkCard
                                    title={_("ELECTROLYTE.HEAD5")}
                                    text={_("ELECTROLYTE.DESC5_1")}
                                    link={{
                                        text: _("ELECTROLYTE.BTN_LINK"),
                                        href: "https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional",
                                    }}
                                    image="/img/page/electrolyte/potassium.webp"
                                    alt="potassium"
                                    gridColumnClass="col-xxl-6"
                                    hasShadow={true}
                                    bgColor="transparent"
                                    additionalCardClass="electrolyte-card-style"
                                    imageZIndex={-1}
                                    arrowImage={<img src="/img/page/electrolyte/arrow-icon.webp" width={19} />}
                                    color="#8079CC"
                                    hoverColor="#6760b7"
                                />

                                <TitleTextLinkCard
                                    title={_("ELECTROLYTE.HEAD6")}
                                    text={_("ELECTROLYTE.DESC6_1")}
                                    link={{
                                        text: _("ELECTROLYTE.BTN_LINK"),
                                        href: "https://ods.od.nih.gov/factsheets/Iron-HealthProfessional",
                                    }}
                                    gridColumnClass="col-xxl-6"
                                    bgColor="#F4F5F8"
                                    additionalCardClass="electrolyte-card-style"
                                    arrowImage={<img src="/img/page/electrolyte/arrow-icon.webp" width={19} />}
                                    color="#8079CC"
                                    hoverColor="#6760b7"
                                />
                            </div>
                        </div>
                    </section>

                    <Review
                        appId={appId}
                        codes={{
                            countryCode: Locale.countryCode,
                            languageCode: Locale.language,
                        }}
                        text={{
                            head: _("REVIEW.HEAD"),
                            description: _("REVIEW.DESCRIPTION"),
                            link: _("REVIEW.LINK_ALL_REVIEWS"),
                            fillerCard: {
                                head: [
                                    _("REVIEW.FILLER_CARD.HEAD1"),
                                    _("REVIEW.FILLER_CARD.HEAD2"),
                                    _("REVIEW.FILLER_CARD.HEAD3"),
                                ],
                                link: _("REVIEW.FILLER_CARD.LINK"),
                            },
                        }}
                    />
                </div>

                <div className="container mb-5 pb-5 text-center">
                    <img
                        src="/img/page/electrolyte/electrolyte-app.webp"
                        alt={_("MAIN.P1.IMG")}
                        className="ms-base-image"
                        width="512px"
                        height="512px"
                    />
                </div>

                <Footer />
            </div>
        </>
    );
}
