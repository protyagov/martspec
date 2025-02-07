import React, { CSSProperties, ReactNode } from "react";
import _ from "@/i18n/locale";
import ImageI18N from "@/atomic/atom/img-i18n";

type CallToActionProps = {
    title: string;
    subtitle?: string;
    textList?: string[];
    button?: ReactNode;
    imgPosition?: "left" | "right";
    bgColor?: CSSProperties;
};

type WithImage<Props> = Props & {
    imgSrc: string;
    imgAlt: string;
};

type WithoutImage<Props> = Props & {
    imgSrc: never;
    imgH?: never;
    imgW?: never;
    imgAlt: never;
};

export default function CallToAction(props: WithImage<CallToActionProps> | WithoutImage<CallToActionProps>) {
    const { title, subtitle, textList, button, bgColor, imgSrc, imgAlt, imgPosition = "right" } = props;
    const marginBot = { marginBottom: "3rem" };

    return (
        <div className="row text-lg-start text-center page-bottom">
            <div className="col-12 block bg-blue" style={bgColor}>
                {imgPosition === "left" && (
                    <ImageI18N src={imgSrc} h={400} w={400} cls="ms-base-image ms-lg-auto" alt={imgAlt} />
                )}

                <div>
                    <h2>{_(title)}</h2>
                    {subtitle && (
                        <p className="flex-grow-1" style={marginBot}>
                            {_(subtitle)}
                        </p>
                    )}
                    {/* TODO: создать компонент для отображения textList c возможностью передачи цвета буллет-поинтов, локализацией и улучшенной стилизацией */}
                    {textList && (
                        <ul style={{ listStyleType: "disc", paddingLeft: "1rem" }}>
                            {textList.map((item, index) => (
                                <li key={index}>{_(item)}</li>
                            ))}
                        </ul>
                    )}
                    {button}
                </div>

                {imgPosition === "right" && (
                    <ImageI18N src={imgSrc} h={400} w={400} cls="ms-base-image ms-lg-auto me-lg-0" alt={imgAlt} />
                )}
            </div>
        </div>
    );
}
