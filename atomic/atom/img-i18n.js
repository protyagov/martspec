import React from "react";
import { Locale } from "src/i18n/locale";
export default function ImageI18N(props) {
    const loImg = props.src.replace("-en.", `-${Locale.language}.`);
    return React.createElement("img", { src: loImg, width: props.w, height: props.h, className: props.cls, alt: props.alt, onError: e => e.currentTarget.src = props.src });
}
//# sourceMappingURL=img-i18n.js.map