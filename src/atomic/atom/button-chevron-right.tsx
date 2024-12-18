import React from "react";
import "@/sass/atom/button-chevron-right.scss";

interface ButtonChevronRight {
    text: string;
    link: string;
    className?: string;
}

const ButtonChevronRight: React.FC<ButtonChevronRight> = ({ text, link, className = "" }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={`btn btn-chevron-right ${className}`}>
            <div id="container">
                <button className="learn-more">
                    <span className="circle">
                        <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">{text}</span>
                </button>
            </div>
        </a>
    );
};

export default ButtonChevronRight;
