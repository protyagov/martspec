import React, { CSSProperties } from "react";
import _, { Locale } from "src/i18n/locale";
import ButtonApple from "../atom/button-apple";

import ImageI18N from "../atom/img-i18n";

type CallToActionProps = {
    title: string;
    subtitle?: string;
    appId?: number;
    appCl?: string;
    appDownloadTitle?: string;
    style?: CSSProperties | undefined;
    background?: CSSProperties | undefined;

};

type WithImage<Props> = Props & {
    imgSrc: string;
    imgH: number;
    imgW: number;
    imgAlt: string;
};

type WithoutImage<Props> = Props & {
    imgSrc?: never;
    imgH?: never;
    imgW?: never;
    imgAlt?: never;
};
interface ImageI18NModel {
    src: string;    // image url. Should have postfix with .en. EX: /img/vitamin.en.512.webp
    alt?: string;   // alt text to show when image fails to load
    cls?: string;   // classNames to apply from css
    h: number;      // element height
    w: number;      // element width
}
export default function CallToAction(props: (
    | WithImage<CallToActionProps>
    | WithoutImage<CallToActionProps>

)) {
    const {
        title,
        subtitle,
        style,
        background,
        imgSrc,
        imgH,
        imgW,
        imgAlt,
        appCl,
        appId,
        appDownloadTitle,
    } = props;
const marginBot = {marginBottom: "3rem"}
    return (

        <div className="row text-lg-start text-center page-bottom">
            <div className="col-12 block "style={style}>
                    <div >
                        <h2>{ _(title) }</h2>
                        {  <p className="flex-grow-1" style={marginBot}
                        >{ _(subtitle) }</p> }
                        <ButtonApple
                        appId={appId}
                        appDownloadTitle={appDownloadTitle}
                        />
                    </div>
                <ImageI18N
                    src={imgSrc}
                    h={imgH}
                    w={imgW}
                    cls="ms-base-image ms-lg-auto me-lg-0"
                    alt={imgAlt}/>
            </div>
        </div>

    );
}
