import * as React from "react";
import _ from "src/i18n/locale"
import { Footer } from "src/part/footer";
import IronImage from "src/part/iron-image";
import NavigationBar from "src/part/navbar";

export default function P7Emotion() {
    return <>
        <NavigationBar />

        <div className="ms-base-page pb-5">
            <IronImage imgLo="/img/p_emotion_screens3.64.webp" imgHi="/img/p_emotion_screens3.512.webp" text={_("MAIN.P7.IMG")} h={512} w={512} />
            <h1 className="text-center pt-3 ">{_("MAIN.P7.HEAD")}</h1>

            <section>
                <p className="mt-4">{_("PRODUCT.P7.ABOUT_1")}</p>
                <p className="mt-4">{_("PRODUCT.P7.ABOUT_2")}</p>
                <a href={`https://apps.apple.com/${_("APPSTORE")}/app/id1562956213`}
                    target="_blank" title={_("MAIN.P7.DWN")} className="float-center" >
                    <span className="ms-btn-apple" />
                </a>
            </section>

            <section>
                <h4>{_("PRODUCT.P7.HEAD1")}</h4>
                <p className="mt-3">{_("PRODUCT.P7.DESC1_1")}</p>
                <p className="mt-3">{_("PRODUCT.P7.DESC1_2")}</p>
            </section>

            <div className="text-center">
                <IronImage imgLo="/img/p_emotion_screens2.64.webp" imgHi="/img/p_emotion_screens2.512.webp" text={_("MAIN.P7.IMG")} h={512} w={512} />
            </div>

            <section>
                <h4>{_("PRODUCT.P7.HEAD2")}</h4>
                <p className="mt-3">{_("PRODUCT.P7.DESC2_1")}</p>
                <p className="mt-3">{_("PRODUCT.P7.DESC2_2")}</p>
            </section>

            <section>
                <h4>{_("PRODUCT.P7.HEAD3")}</h4>
                <p className="mt-3">{_("PRODUCT.P7.DESC3_1")}</p>
                <p className="mt-3">{_("PRODUCT.P7.DESC3_2")}</p>
            </section>

            <div className="pb-5 text-center">
                <IronImage imgLo="/img/p_emotion_screens4.64.webp" imgHi="/img/p_emotion_screens4.512.webp" text={_("MAIN.P3.IMG")} h={512} w={512} />
            </div>

            <section>
                <h4>{_("PRODUCT.P7.HEAD4")}</h4>
                <p className="mt-3">{_("PRODUCT.P7.DESC4")}</p>
            </section>

            <section>
                <h4>{_("PRODUCT.P7.HEAD5")}</h4>
                <p className="mt-3">{_("PRODUCT.P7.DESC5_1")}</p>
                <p className="mt-3">{_("PRODUCT.P7.DESC5_2")}</p>
            </section>
        </div>

        <div className="pb-5 text-center">
            <IronImage imgLo="/img/p_emotion_screens.64.webp" imgHi="/img/p_emotion_screens.512.webp" text={_("MAIN.P7.IMG")} h={512} w={512} />
        </div>

        <Footer />
    </>
}
