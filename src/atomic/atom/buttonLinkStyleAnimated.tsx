import React from "react";

interface AnimatedLinkButtonProps {
    text: string;
    link: string;
}

const ButtonLinkStyleAnimated: React.FC<AnimatedLinkButtonProps> = ({ text, link }) => {
    return (
        <a href={link} rel="noopener noreferrer" className="link-button-animated fs-4 rounded-5 py-2 px-5 mt-auto">
            {text}
        </a>
    );
};

export default ButtonLinkStyleAnimated;
