import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { Footer } from "src/atomic/organism/footer";
import NavigationBar from "src/atomic/organism/navbar";
import ImageI18N from "src/atomic/atom/img-i18n";

export default function BodySize() {
    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5">
            <section>
                <img src="/img/page/body_size/size_head.svg" height={512} width={512} alt={_("SIZE.IMG")} />
                <h1 className="text-center pt-3 ">{_("SIZE.HEAD")}</h1>
            </section>


            <section>
                <p className="mt-4">{_("SIZE.ABOUT")}</p>
                <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1564205068?l=${Locale.language}`}
                    target="_blank" title={_("MAIN.P4.DWN")} className="ms-btn-apple"
                    style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                </a>
            </section>

            {/* Body compostion */}
            <section>
                <h4>{_("SIZE.HEAD1")}</h4>
                <p className="mt-3">{_("SIZE.DESC1")}</p>
            </section>

            <ImageI18N src="/img/page/body_size/size_middle.en.512.webp" w={512} h={512} cls="mx-auto img-fluid" alt={_("SIZE.IMG")} />

            {/* Chest and Bust */}
            <section>
                <h4>{_("SIZE.HEAD2")}</h4>
                <p className="mt-3">{_("SIZE.DESC2")}</p>
            </section>

            {/* Waist Circumferance */}
            <section>
                <h4>{_("SIZE.HEAD3")}</h4>
                <p className="mt-3">
                    <a href="https://www.heart.org/en/news/2019/03/19/waist-size-predicts-heart-attacks-better-than-bmi-especially-in-women" target="_blank">
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
                <p className="mt-3">{_("WAIST.DESC1")}
                    <a href="https://www.nhlbi.nih.gov/health/educational/lose_wt/risk.htm" target="_blank">
                        <br /><small><i>{_("WAIST.LINK1")}</i></small>
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
            <ImageI18N src="/img/page/body_size/size_bottom.en.512.webp" w={512} h={512} cls="img-fluid mb-3 px-4" alt={_("SIZE.IMG")} />
            {/* <img src="/img/size_bottom.512.webp" className="img-fluid mb-3 px-4" height={512} alt={_("SIZE.IMG")} /> */}
        </div>
        <Footer />
    </>
}