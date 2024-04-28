import * as React from "react";
import _, { Locale } from "@/i18n/locale";
import { Footer } from "@/atomic/organism/footer";
import NavigationBar from "@/atomic/organism/navbar";
import ImageI18N from "@/atomic/atom/img-i18n";
import PageHeader from "@/atomic/molecule/page-header";

export default function BodySize() {
    return (
        <>
            <NavigationBar />

            <div className="ms-base-page pb-5">
                <PageHeader
                    title={_("SIZE.HEAD")}
                    subtitleLevel2={_("SIZE.ABOUT")}
                    appId={1564205068}
                    appDownloadTitle={_("SIZE.DWN")}
                    imgSrc="/img/page/body-size/size-head.svg"
                    imgAlt={_("SIZE.IMG")}
                    imgH={512}
                    imgW={512}
                />

                {/* Body compostion */}
                <section>
                    <h4>{_("SIZE.HEAD1")}</h4>
                    <p className="mt-3">{_("SIZE.DESC1")}</p>
                </section>

                <ImageI18N
                    src="/img/page/body-size/size-middle-en.webp"
                    w={512}
                    h={512}
                    cls="mx-auto img-fluid"
                    alt={_("SIZE.IMG")}
                />

                {/* Chest and Bust */}
                <section>
                    <h4>{_("SIZE.HEAD2")}</h4>
                    <p className="mt-3">{_("SIZE.DESC2")}</p>
                </section>

                {/* Waist Circumferance */}
                <section>
                    <h4>{_("SIZE.HEAD3")}</h4>
                    <p className="mt-3">
                        <a
                            href="https://www.heart.org/en/news/2019/03/19/waist-size-predicts-heart-attacks-better-than-bmi-especially-in-women"
                            target="_blank"
                        >
                            {_("WAIST.LINK2")}
                        </a>
                        {_("WAIST.DESC2")}
                    </p>
                </section>

                {/* Hips Width */}
                <section>
                    <h4>{_("SIZE.HEAD4")}</h4>
                    <p className="mt-3">{_("SIZE.DESC4")}</p>
                </section>

                <section>
                    <h4>{_("WAIST.HEAD1")}</h4>
                    <p className="mt-3">
                        {_("WAIST.DESC1")}
                        <a href="https://www.nhlbi.nih.gov/health/educational/lose_wt/risk.htm" target="_blank">
                            <br />
                            <small>
                                <i>{_("WAIST.LINK1")}</i>
                            </small>
                        </a>
                    </p>
                </section>

                {/* Body Shape */}
                <section>
                    <h4>{_("SIZE.HEAD5")}</h4>
                    <p className="mt-3">{_("SIZE.DESC5")}</p>
                </section>
            </div>

            <div className="pb-5 text-center">
                <ImageI18N
                    src="/img/page/body-size/size-bottom-en.webp"
                    w={512}
                    h={512}
                    cls="img-fluid mb-3 px-4"
                    alt={_("SIZE.IMG")}
                />
                {/* <img src="/img/size_bottom.512.webp" className="img-fluid mb-3 px-4" height={512} alt={_("SIZE.IMG")} /> */}
            </div>
            <Footer />
        </>
    );
}
