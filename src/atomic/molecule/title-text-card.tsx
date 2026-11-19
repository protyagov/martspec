import React from "react";

interface TitleTextCardProps {
    title: string;
    text: string;
    bgColor?: string;
    className?: string;
}

const TitleTextCard = ({
    title,
    text,
    bgColor = "#FFFFFF",
    className = "col-lg-4",
}: TitleTextCardProps): JSX.Element => {
    return (
        <div className={className}>
            <div className="block" style={{ backgroundColor: bgColor }}>
                <h3>{title}</h3>
                <p>{text}</p>
            </div>
        </div>
    );
};

export default TitleTextCard;
