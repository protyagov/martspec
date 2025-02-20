import React, { CSSProperties, ReactNode } from "react";
import _ from "@/i18n/locale";
import ImageI18N from "@/atomic/atom/img-i18n";

type CallToActionProps = {
    title: string;
    subtitle?: string;
    textList?: ReactNode[];
    textListTitle?: string;
    button?: ReactNode;
    imgPosition?: "left" | "right";
    bgColor?: CSSProperties["color"];
};

type WithImage<Props> = Props & {
    imgSrc: string;
    imgH?: number;
    imgW?: number;
    imgAlt: string;
};

type WithoutImage<Props> = Props & {
    imgSrc?: never;
    imgH?: never;
    imgW?: never;
    imgAlt?: never;
};

export default function CallToAction(props: WithImage<CallToActionProps> | WithoutImage<CallToActionProps>) {
    const { title, subtitle, textList, textListTitle, button, bgColor="#d6e3fc", imgSrc="", imgH=400, imgW=400, imgAlt, imgPosition = "right" } = props;
    const marginBot = { marginBottom: "3rem" };

    return (
        <div className="row text-lg-start text-center page-bottom">
            <div className="col-12 block" style={{backgroundColor: bgColor}}>
                {imgPosition === "left" && (
                    <ImageI18N src={imgSrc} h={imgH} w={imgW} cls="ms-base-image ms-lg-auto" alt={imgAlt} />
                )}

                <div>
                    <h2>{_(title)}</h2>
                    {subtitle && (
                        <p className="flex-grow-1" style={marginBot}>
                            {_(subtitle)}
                        </p>
                    )}
                    {/* TODO: создать компонент для отображения textList c возможностью передачи цвета буллет-поинтов, локализацией и улучшенной стилизацией */}
                    {textListTitle && (
                        <h3>{_(textListTitle)}</h3>
                    )}
                    {textList && (
                        <ul style={{ listStyleType: "disc", paddingLeft: "1rem" }}>
                            {textList.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                    {button}
                </div>

                {imgPosition === "right" && (
                    <ImageI18N src={imgSrc} h={imgH} w={imgW} cls="ms-base-image ms-lg-auto me-lg-0" alt={imgAlt} />
                )}
            </div>
        </div>
    );
}
