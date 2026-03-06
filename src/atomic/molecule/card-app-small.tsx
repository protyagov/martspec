import React from "react";
import ButtonChevronRight from "@/atomic/atom/button-chevron-right";
import ButtonLinkStylePlain from "../atom/buttonLinkStylePlain";

type CardAppSmallProps = {
    iconSrc: string;
    iconAlt: string;
    title: string;
    subtitle: string;
    content: string;
    button: {
        text: string;
        link: string;
        color?: string;
        textColor?: string;
        buttonType: "ButtonLinkStylePlain" | "ButtonChevronRight";
    };
    backgroundColor?: string;
};

const CardAppSmall: React.FC<CardAppSmallProps> = ({
    iconSrc,
    iconAlt,
    title,
    subtitle,
    content,
    button,
    backgroundColor = "#FFFFFF",
}) => {
    return (
        <div
            className="card-app-small d-flex flex-column align-items-start px-4 py-4 rounded-5 h-100"
            style={{ backgroundColor }}
        >
            {/* Верхняя часть с иконкой, заголовком и подзаголовком */}
            <div className="d-flex align-items-center gap-3 mb-4">
                <div className="icon">
                    <img src={iconSrc} alt={iconAlt} width={50} height={50} />
                </div>
                <div>
                    <h1 className="mb-1">{title}</h1>
                    <h2 className="fs-5">{subtitle}</h2>
                </div>
            </div>

            <p className="mb-4">{content}</p>

            {button.buttonType === "ButtonLinkStylePlain" ? (
                <ButtonLinkStylePlain text={button.text} link={button.link} />
            ) : (
                <ButtonChevronRight text={button.text} link={button.link} />
            )}
        </div>
    );
};

export default CardAppSmall;
