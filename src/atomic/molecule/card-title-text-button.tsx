import * as React from "react";

interface Props {
    title: string;
    textType: "p" | "ul"; 
    textContent: string | string[]; 
    buttonText: string;
    buttonLink: string;
}

const CardTitleTextButton = ({
    title,
    textType = "p", 
    textContent,
    buttonText,
    buttonLink
}: Props): JSX.Element => {
    return (
        <section>
            <div className="row col-lg-6">
                <div>
                    <h2>{title}</h2>
                    {textType === "ul" && Array.isArray(textContent) ? (
                        <ul>
                            {textContent.map((item, index) => (
                                <li key={index} className="mb-4">{item}</li>
                            ))}
                        </ul>
                    ) : textType === "p" && typeof textContent === "string" ? (
                        <p>{textContent}</p>
                    ) : null}
                    <div className="btn-container">
                        <a href={buttonLink} className="btn">
                            {buttonText}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CardTitleTextButton;
