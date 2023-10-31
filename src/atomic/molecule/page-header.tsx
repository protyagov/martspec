import React from "react";
import _, { Locale } from "src/i18n/locale";

type PageHeaderProps = {
    PAGE: string;
    appId?: number;
};

type WithImage<Props> = Props & {
    imgSrc: string;
    imgH: number;
    imgW: number;
};

type WithoutImage<Props> = Props & {
    imgSrc?: never;
    imgH?: never;
    imgW?: never;
};

type CreateElementIfTranslatedArgs = {
    type: string;
    KEY: string;
}

export default function PageHeader(props: (
    | WithImage<PageHeaderProps>
    | WithoutImage<PageHeaderProps>
)) {
    const { PAGE, appId, imgSrc, imgH, imgW } = props;

    const createElementIfTranslated = ({type, KEY}: CreateElementIfTranslatedArgs) => {  
        const isTranslated = Locale.hasKey(KEY) && !!_(KEY).length;
        return isTranslated && React.createElement(
            type,
            { key: KEY },
            _(KEY)
        );
    };

    return (
        <div className="ms-base-new">
        <section className="page-header text-center">
            <div className="row">
                <div className="col">
                    {imgSrc && (
                        <img
                            src={imgSrc}
                            height={imgH}
                            width={imgW}
                            className="ms-base-image"
                            alt={_(`${PAGE}.IMG`)}
                        />
                    )}

                    <div className="headings">
                        <h1>{_(`${PAGE}.HEAD`)}</h1>
                        {
                            [
                                {KEY: `${PAGE}.ABOUT_1`, type: "h3"},
                                {KEY: `${PAGE}.ABOUT_2`, type: "p"},
                                {KEY: `${PAGE}.ABOUT`, type: "p"},                    
                            ].map(from => createElementIfTranslated(from))
                        }
                    </div>

                    {appId && (
                        <a
                            href={`https://apps.apple.com/${_(
                                "COUNTRY_CODE"
                            )}/app/id${appId}?l=${Locale.language}`}
                            target="_blank"
                            title={_(`${PAGE}.DWN`)}
                            className="ms-btn-apple"
                            style={{
                                backgroundImage:
                                    "url(/img/apple_btn/" +
                                    Locale.language +
                                    ".svg)",
                            }}
                        ></a>
                    )}
                </div>
            </div>
        </section>
        </div>
    );
}
