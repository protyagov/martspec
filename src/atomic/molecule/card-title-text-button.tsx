import * as React from "react";

interface Props {
    title: string;
    textContent: string[]; // Должен быть массив строк для списка
    buttonText: string;
    buttonLink: string;
}

const CardTitleTextButton = ({
    title,
    textContent,
    buttonText,
    buttonLink
}: Props): JSX.Element => {
    return (
        <div className="card-title-text-button">
            <div className="">
            <h2>{title}</h2>
            <ul>
                {textContent.map((item, index) => (
                    <li key={index} className="mb-4">{item}</li>
                ))}
            </ul>
            <div className="btn-container">
                <a href={buttonLink} className="btn">
                    {buttonText}
                </a>
            </div>
            </div>
            
        </div>
    );
};

export default CardTitleTextButton;
