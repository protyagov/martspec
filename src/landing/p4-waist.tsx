import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { Footer } from "src/part/footer";
import IronImage from "src/part/iron-image";
import NavigationBar from "src/part/navbar";

export default function P4WaistLine() {
    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5">
            <img src="/img/waist.svg" className="mx-auto" alt={_("WAIST.IMG")} height={512} width={512} />
            <h1 className="text-center pt-3 ">{_("WAIST.HEAD")}</h1>


            <section>
                <p className="mt-4">{_("WAIST.ABOUT")}</p>
                <a href={`https://apps.apple.com/${_("APPSTORE")}/app/id1506250420`}
                    target="_blank" title={_("MAIN.P3.DWN")} className="ms-btn-apple"
                    style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                </a>
            </section>


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


            <div className="pb-5 text-center">
                <IronImage imgLo="/img/p_waist_screens.64.webp" imgHi="/img/p_waist_screens.512.webp" text={_("WAIST.IMG")} h={512} w={512} />
            </div>

        </div>

        <Footer />
    </>

}
