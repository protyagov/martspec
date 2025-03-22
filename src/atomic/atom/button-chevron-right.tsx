import React from "react";
import "@/sass/atom/button-chevron-right.scss";

interface ButtonChevronRight {
    text: string;
    link: string;
    className?: string;
}

const ButtonChevronRight: React.FC<ButtonChevronRight> = ({ text, link, className = "" }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={`btn-chevron-right ${className}`}>
            <div id="container">
                <button className="learn-more">
                    <div className="circle">
                    <img src="/img/atom/button_chevron_right/arrow-initial.svg"
                    className="icon arrow-initial"
                    />
                    <img src="/img/atom/button_chevron_right/arrow-hover.svg"
                    className="icon arrow-hover"
                    />
                        {/* <span className="icon arrow"></span> */}
                    </div>
                    <span className="button-text">{text}</span>
                </button>
            </div>
        </a>
    );
};

export default ButtonChevronRight;
