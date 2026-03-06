import * as React from "react";
import ButtonLinkStylePlain from "@/atomic/atom/buttonLinkStylePlain";

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
                    <li key={index} className="mb-4">
                        {item}
                    </li>
                ))}
            </ul>

            <div className="fs-4 rounded-5 py-2 mt-auto">
                <ButtonLinkStylePlain text={buttonText} link={buttonLink} buttonColor={buttonColor} />
            </div>
        </div>
    );
};

export default CardTitleTextButton;
