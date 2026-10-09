import React from "react";
import ButtonLinkStylePlain from "@/atomic/atom/buttonLinkStylePlain";
import "@/sass/molecule/card-title-text-list-button.scss";

type CardTitleTextListButtonProps = {
    title: string;
    description: string;
    subtitle: string;
    listItems: string[];
    buttonText: string;
    buttonLink: string;
    buttonColor?: string;
};

const CardTitleTextListButton: React.FC<CardTitleTextListButtonProps> = ({
    title,
    description,
    subtitle,
    listItems,
    buttonText,
    buttonLink,
    buttonColor,
}) => {
    return (
        <div className="card-title-text-list-button">
            <h2>{title}</h2>
            <p className="card-title-text-list-button__description">{description}</p>
            <h3>{subtitle}</h3>
            <ul>
                {listItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <div className="fs-4 rounded-5 py-2 mt-auto">
                <ButtonLinkStylePlain
                    text={buttonText}
                    link={buttonLink}
                    buttonColor={buttonColor}
                />
            </div>
        </div>
    );
};

export default CardTitleTextListButton;