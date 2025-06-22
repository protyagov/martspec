import React, { useState, CSSProperties } from "react";

interface ButtonChevronRightProps {
    text: string;
    link: string;
}

const ButtonChevronRight: React.FC<ButtonChevronRightProps> = ({ text, link }) => {
    const [isHovered, setIsHovered] = useState(false);
const learnMoreStyle: CSSProperties = {
    position: "relative",
    display: "inline-block",
    cursor: "pointer",
    outline: "none",
    border: 0,
    background: "transparent",
    width: "196px",
    height: "auto",
};

const circleStyle: CSSProperties = {
    position: "relative",
    display: "block",
    margin: 0,
    width: isHovered ? "100%" : "37px",
    height: "37px",
    background: "#1686FF",
    borderRadius: "18.5px",
    transition: "all 0.45s cubic-bezier(0.65, 0, 0.076, 1)",
};

const iconInitialStyle: CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "15px",
    width: "10px",
    height: "15px",
    background: "none",
    transform: "translateY(-50%)",
    transition: "all 0.45s cubic-bezier(0.65, 0, 0.076, 1)",
    display: isHovered ? "none" : "block",
};

const iconHoverStyle: CSSProperties = {
    position: "absolute",
    top: "50%",
    left: "5px",
    width: "30px",
    height: "15px",
    background: "none",
    transform: "translateY(-50%)",
    transition: "all 0.45s cubic-bezier(0.65, 0, 0.076, 1)",
    display: isHovered ? "block" : "none",
};


const textStyle: CSSProperties = {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: "8px 0",
    margin: "0 25px 0 55px",
    color: isHovered ? "#f4f4f4" : "#1686FF",
    fontFamily: "os4",
    textAlign: "center",
    textTransform: "none",
    whiteSpace: "nowrap",
    fontSize: "15px",
    transition: "all 0.45s cubic-bezier(0.65, 0, 0.076, 1)",
};

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <button
                style={learnMoreStyle}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div style={circleStyle}>
                    <div style={iconInitialStyle}>
                        <svg width="8.44" height="15" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M1.06641 14.9999L7.66641 8.39994L1.06641 1.79994"
                                stroke="white"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </div>

                    <div style={iconHoverStyle}>
                        <svg width="32.81" height="25.3" viewBox="0 0 35 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0)">
                                <path
                                    d="M13 12C12.4477 12 12 12.4477 12 13C12 13.5523 12.4477 14 13 14L13 12ZM33.7071 13.7071C34.0976 13.3166 34.0976 12.6834 33.7071 12.2929L27.3431 5.92893C26.9526 5.53841 26.3195 5.53841 25.9289 5.92893C25.5384 6.31946 25.5384 6.95262 25.9289 7.34315L31.5858 13L25.9289 18.6569C25.5384 19.0474 25.5384 19.6805 25.9289 20.0711C26.3195 20.4616 26.9526 20.4616 27.3431 20.0711L33.7071 13.7071ZM13 14L33 14L33 12L13 12L13 14Z"
                                    fill="white"
                                />
                            </g>
                            <defs>
                                <clipPath id="clip0">
                                    <rect width="27" height="35" fill="white" transform="translate(0 27) rotate(-90)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                </div>

                <span style={textStyle}>{text}</span>
            </button>
        </a>
    );
};

export default ButtonChevronRight;

