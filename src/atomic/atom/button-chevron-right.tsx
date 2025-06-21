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
                        <div className="icon arrow-initial">
                            <svg
                                width="9"
                                height="16"
                                viewBox="0 0 9 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M1.06641 14.9999L7.66641 8.39994L1.06641 1.79994"
                                    stroke="white"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <div className="icon arrow-hover">
                            <svg
                                width="35"
                                height="27"
                                viewBox="0 0 35 27"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <g clip-path="url(#clip0_6619_2573)">
                                    <path
                                        d="M13 12C12.4477 12 12 12.4477 12 13C12 13.5523 12.4477 14 13 14L13 12ZM33.7071 13.7071C34.0976 13.3166 34.0976 12.6834 33.7071 12.2929L27.3431 5.92893C26.9526 5.53841 26.3195 5.53841 25.9289 5.92893C25.5384 6.31946 25.5384 6.95262 25.9289 7.34315L31.5858 13L25.9289 18.6569C25.5384 19.0474 25.5384 19.6805 25.9289 20.0711C26.3195 20.4616 26.9526 20.4616 27.3431 20.0711L33.7071 13.7071ZM13 14L33 14L33 12L13 12L13 14Z"
                                        fill="white"
                                    />
                                </g>
                                <defs>
                                    <clipPath id="clip0_6619_2573">
                                        <rect
                                            width="27"
                                            height="35"
                                            fill="white"
                                            transform="translate(0 27) rotate(-90)"
                                        />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>

                        {/* <span className="icon arrow"></span> */}
                    </div>
                    <span className="button-text">{text}</span>
                </button>
            </div>
        </a>
    );
};

export default ButtonChevronRight;
