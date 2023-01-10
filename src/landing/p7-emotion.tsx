import * as React from "react";
import _, { Locale } from "src/i18n/locale";
import { Footer } from "src/part/footer";
import IronImage from "src/part/iron-image";
import NavigationBar from "src/part/navbar";

export default function P7Emotion() {
    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5">
            <IronImage imgLo="/img/p_emotion_screens3.64.webp" imgHi="/img/p_emotion_screens3.512.webp" text={_("EMOTION.IMG")} h={512} w={512} />
            <h1 className="text-center pt-3 ">{_("EMOTION.HEAD")}</h1>

            <section>
                <p className="mt-4">{_("EMOTION.ABOUT_1")}</p>
                <p className="mt-4">{_("EMOTION.ABOUT_2")}</p>
                <a href={`https://apps.apple.com/${_("COUNTRY_CODE")}/app/id1562956213?l=${Locale.language}`}
                    target="_blank" title={_("EMOTION.DWN")} className="ms-btn-apple"
                    style={{ backgroundImage: 'url(/img/apple_btn/' + Locale.language + '.svg)' }}>
                </a>
            </section>

            <section>
                <h4>{_("EMOTION.HEAD1")}</h4>
                <p className="mt-3">{_("EMOTION.DESC1_1")}</p>
                <p className="mt-3">{_("EMOTION.DESC1_2")}</p>
            </section>

            <div className="text-center">
                <IronImage imgLo="/img/p_emotion_screens2.64.webp" imgHi="/img/p_emotion_screens2.512.webp" text={_("EMOTION.IMG")} h={512} w={512} />
            </div>

            <section>
                <h4>{_("EMOTION.HEAD2")}</h4>
                <p className="mt-3">{_("EMOTION.DESC2_1")}</p>
                <p className="mt-3">{_("EMOTION.DESC2_2")}</p>
            </section>

            <section>
                <h4>{_("EMOTION.HEAD3")}</h4>
                <p className="mt-3">{_("EMOTION.DESC3_1")}</p>
                <p className="mt-3">{_("EMOTION.DESC3_2")}</p>
            </section>

            <div className="pb-5 text-center">
                <IronImage imgLo="/img/p_emotion_screens4.64.webp" imgHi="/img/p_emotion_screens4.512.webp" text={_("MAIN.P3.IMG")} h={512} w={512} />
            </div>

            <section>
                <h4>{_("EMOTION.HEAD4")}</h4>
                <p className="mt-3">{_("EMOTION.DESC4")}</p>
            </section>

            <section>
                <h4>{_("EMOTION.HEAD5")}</h4>
                <p className="mt-3">{_("EMOTION.DESC5_1")}</p>
                <p className="mt-3">{_("EMOTION.DESC5_2")}</p>
            </section>
        </div>

        <div className="pb-5 text-center">
            <IronImage imgLo="/img/p_emotion_screens.64.webp" imgHi="/img/p_emotion_screens.512.webp" text={_("EMOTION.IMG")} h={512} w={512} />
        </div>

        <Footer />
    </>
}
