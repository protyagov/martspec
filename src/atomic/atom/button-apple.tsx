import React from "react";
import _, { Locale } from "@/i18n/locale";

interface ButtonAppleProps {
    appId: number;
    appDownloadTitle: string;
}

const ButtonApple: React.FC<ButtonAppleProps> = ({ appId, appDownloadTitle }) => {
    const url = appId == 1
        ? `https://apps.apple.com/${_("COUNTRY_CODE")}/developer/martspec-llc/id1506250419`
        : `https://apps.apple.com/${_("COUNTRY_CODE")}/app/id/${appId}`;
    const bType = appId == 1 ? "visit" : "download"

    return <a
        href={`${url}?l=${Locale.language}`}
        target="_blank"
        className="ms-btn-apple">
        <img
            src={`/img/atom/button_apple/${bType}/${Locale.language}.svg`}
            alt={appDownloadTitle}
        />
    </a>
};

export default ButtonApple;
