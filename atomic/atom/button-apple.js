import React from "react";
import _, { Locale } from "src/i18n/locale";
const ButtonApple = ({ appId, appDownloadTitle }) => {
    return (React.createElement("a", { href: `https://apps.apple.com/${_("COUNTRY_CODE")}/app/id${appId}?l=${Locale.language}`, target: "_blank", title: _(appDownloadTitle), className: "ms-btn-apple", style: {
            backgroundImage: `url(/img/apple_btn/${Locale.language}.svg)`,
        } }));
};
export default ButtonApple;
//# sourceMappingURL=button-apple.js.map