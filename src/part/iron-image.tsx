import React from "react";


export interface AvatarModel {
    imgLo: string;
    imgHi: string;
    text?: string;
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

    return <span>
        {/* @ts-ignore */}
        <img src={props.imgLo} ref={photoImg} style={{ width: "100%"}} alt={props.text} />
    </span>
}
