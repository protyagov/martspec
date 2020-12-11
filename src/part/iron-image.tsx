import React from "react";


export interface AvatarModel {
    imgLo: string;
    imgHi: string;
    size?: string;
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

    return <span className="rr-img">
        {/* @ts-ignore */}
        <img src={props.imgLo} style={{ '--image-size': props.size }} ref={photoImg} />
    </span>
}
