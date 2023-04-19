import React from "react";
import { Locale } from "src/i18n/locale";

export interface AvatarModel {
    imgLo: string;
    imgHi: string;
    text?: string;
    i18n?: boolean;
    h: number;
    w: number;
}


export default function IronImage(props: AvatarModel) {
    const photoImg = React.useRef<HTMLImageElement>(null);

    const loImg = props.i18n ? props.imgLo.replace(".64", `.${Locale.language}.64`) : props.imgLo
    const hiImg = props.i18n ? props.imgHi.replace(".512", `.${Locale.language}.512`) : props.imgHi

    React.useEffect(() => {
        if (!hiImg)
            return;
        const hdLoaderImg = new Image();
        hdLoaderImg.src = hiImg;
        hdLoaderImg.onload = () => {
            if (hiImg == null)
                return;

            photoImg.current.src = hdLoaderImg.src;
            photoImg.current.classList.add('fade-in');
        }
    }, [])

    {/* @ts-ignore */ }
    return <img src={loImg} ref={photoImg} width={props.w} height={props.h}

        className="ms-base-top-image" alt={props.text} />
}
