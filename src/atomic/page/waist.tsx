import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { Footer } from "src/atomic/organism/footer";
import NavigationBar from "src/atomic/organism/navbar";
import PageHeader from "../molecule/page-header";

export default function WaistLine() {
    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5">

            <PageHeader
                PAGE="WAIST" appId={1506250420}
                imgSrc="/img/page/waistline/waist.svg" imgH={468} imgW={430}
            />

            <section>
                <h4>{_("WAIST.HEAD3")}</h4>
                <p className="mt-3">{_("WAIST.DESC3")}</p>
            </section>

            {/* Better than BMI */}
            <section>
                <h4>{_("WAIST.HEAD2")}</h4>
                <p className="mt-3">
                    <a href="https://www.heart.org/en/news/2019/03/19/waist-size-predicts-heart-attacks-better-than-bmi-especially-in-women" target="_blank">
                        {_("WAIST.LINK2")}
                    </a>
                    {_("WAIST.DESC2")}
                </p>
            </section>


            <section>
                {/* Medical Fact */}
                <h4>{_("WAIST.HEAD1")}</h4>
                <p className="mt-3">{_("WAIST.DESC1")}
                    <a href="https://www.nhlbi.nih.gov/health/educational/lose_wt/risk.htm" target="_blank">
                        <br /><small><i>{_("WAIST.LINK1")}</i></small>
                    </a>
                </p>
            </section>

            <section>
                {/* Elevated Cardio Risk */}
                <h4>{_("WAIST.HEAD4")}</h4>
                <p className="mt-3">
                    <ul>
                        <li>{_("WAIST.DESC4_1")}</li>
                        <li>{_("WAIST.DESC4_2")}</li>
                        <li>{_("WAIST.DESC4_3")}</li>
                        <li><i><small>{_("WAIST.DESC4_4")}
                            <a href="https://www.ahajournals.org/doi/10.1161/CIRCULATIONAHA.107.739714" target="_blank">
                                Circulation, Vol. 117, No. 13
                            </a>
                            , &nbsp;
                            <a href="https://www.cnn.com/2008/HEALTH/conditions/11/12/healthmag.waist.death.risk/" target="_blank">
                                CNN
                            </a>
                        </small></i>
                        </li>
                    </ul>
                </p>
            </section>


            <div className="container mb-5 pb-5 text-center">
                <img src="/img/page/waistline/waist-app.webp" alt={_("WAIST.IMG")} className="ms-base-image" width="512px" height="512px" />
            </div>

        </div>

        <Footer />
    </>

}
