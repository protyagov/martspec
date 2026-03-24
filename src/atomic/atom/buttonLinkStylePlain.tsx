import React from "react";

interface AnimatedLinkButtonProps {
    text: string;
    link: string;
    buttonColor?: string;
}

const ButtonLinkStylePlain: React.FC<AnimatedLinkButtonProps> = ({ text, link, buttonColor }) => {
    return (
        <a
            href={link}
            style={{ backgroundColor: buttonColor }}
            rel="noopener noreferrer"
            className="link-button-plain fs-4 rounded-5 px-5 mt-auto"
        >
            {text}
        </a>
    );
};

export default ButtonLinkStylePlain;
