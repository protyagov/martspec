import React from "react";


export interface AvatarModel {
    imgLo: string;
    imgHi: string;
    text?: string;
    h: number;
    w: number;
}


export default function IronImage(props: AvatarModel) {
    const photoImg = React.useRef<HTMLImageElement>(null);

    React.useEffect(() => {
        if (!props.imgHi)
            return;
        const hdLoaderImg = new Image();
        hdLoaderImg.src = props.imgHi;
        hdLoaderImg.onload = () => {
            if (props.imgHi == null)
                return;

            photoImg.current.src = hdLoaderImg.src;
            photoImg.current.classList.add('fade-in');
        }
    }, [])

    {/* @ts-ignore */ }
    return <img src={props.imgLo} ref={photoImg} width={props.w} height={props.h}

        className="mx-auto img-fluid" alt={props.text} />
}
