import * as React from "react";
import LinkStyledButton from "@/atomic/atom/link-styled-button";

interface Props {
    title: string;
    textContent: string[];  
    buttonText: string;
    buttonLink: string;
    buttonColor?: string;  
}

const CardTitleTextButton = ({
    title,
    textContent,
    buttonText,
    buttonLink,
    buttonColor,
}: Props): JSX.Element => {
    return (
        <div className="card-title-text-button">
            <h2>{title}</h2>
            <ul>
                {textContent.map((item, index) => (
                    <li key={index} className="mb-4">{item}</li>
                ))}
            </ul>

            <div className="fs-4 rounded-5 py-2 mt-auto">
                <LinkStyledButton
                    text={buttonText}  
                    link={buttonLink}  
                    color={buttonColor} 
                />
            </div>
        </div>
    );
};

export default CardTitleTextButton;
