import React from "react";
import { Locale } from "src/i18n/locale";

export interface ImageI18NModel {
    src: string;    // image url. Should have postfix with .en. EX: /img/vitamin.en.512.webp
    alt?: string;   // alt text to show when image fails to load
    cls?: string;   // classNames to apply from css
    h: number;      // element height
    w: number;      // element width
}


export default function ImageI18N(props: ImageI18NModel) {
    const loImg = props.src.replace("-en.", `-${Locale.language}.`);

    return <img src={loImg} width={props.w} height={props.h} className={props.cls} alt={props.alt}
        onError={e => e.currentTarget.src = props.src} />
}
