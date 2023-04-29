import * as React from "react";
import _, { Locale } from "src/i18n/locale";

interface VitaminItemProps {
    id: string;
}

export default function VitaminItem(props: VitaminItemProps) {
    return (
        <div className="row d-flex vit-item">
            <div className="order-1 vit-header">
                <span className="vit-icon">{_("VITAMIN." + props.id + ".HEAD")}</span>
                <span className="vit-name">{_("VITAMIN." + props.id + ".NAME")}</span>
            </div>
            <div className="order-lg-2 order-3 vit-desk">{_("VITAMIN." + props.id + ".DESK")}</div>
            <div className="order-lg-3 order-2 vit-arrow">
                <a href={Locale.i18nLink(`vitamin/${props.id}`)}>
                    <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.2168 7.47363C12.1699 8.00098 11.9414 8.41699 11.5312 8.72168L2.42578 14.6455C2.12109 14.833 1.81055 14.9326 1.49414 14.9443C1.22461 14.9443 0.972656 14.874 0.738281 14.7334C0.246094 14.4521 0 14.0361 0 13.4854C0.0117188 12.8877 0.269531 12.4482 0.773438 12.167L7.99805 7.47363L0.984375 2.95605C0.960938 2.94434 0.931641 2.92676 0.896484 2.90332C0.298828 2.5752 0 2.12402 0 1.5498C0 1.28027 0.0703125 1.02246 0.210938 0.776367C0.503906 0.295898 0.931641 0.0556641 1.49414 0.0556641C1.66992 0.0556641 1.92773 0.125977 2.26758 0.266602L11.5312 6.19043C11.5664 6.21387 11.6074 6.24316 11.6543 6.27832C12.0293 6.59473 12.2168 6.99316 12.2168 7.47363Z" fill="currentColor" />
                    </svg>
                </a>
            </div>
        </div>
    )
}