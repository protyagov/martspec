import React from "react";
import _, { Locale } from "@/i18n/locale";

interface ButtonAppleProps {
    appId: number;
    appDownloadTitle: string;
  }

  const ButtonApple: React.FC<ButtonAppleProps> = ({ appId, appDownloadTitle }) => {
    return (
      <a
        href={`https://apps.apple.com/${_(
          "COUNTRY_CODE"
        )}/app/id${appId}?l=${Locale.language}&l=${Locale.language}`}
        target="_blank"
        title={_(appDownloadTitle)}
        className="ms-btn-apple"
        style={{
          backgroundImage: `url(/img/apple_btn/${Locale.language}.svg)`,
        }}
      ></a>
    );
  };

  export default ButtonApple;