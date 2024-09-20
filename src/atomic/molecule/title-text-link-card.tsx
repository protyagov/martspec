import * as React from "react";

interface Props {
    title: string;
    text: string;
    link: Link;
    image?: string;
    bgColor?: string;
    className?: string;
    additionalClass?: string;
    alt?: string;
    arrowImage?: React.ReactNode; 
}

interface Link {
    text: string;
    href: string;
}

const TitleTextLinkCard = ({
    title,
    text,
    link,
    image,
    alt,
    bgColor = "#FFFFFF",
    className = "col-lg-4",
    additionalClass = "",
    arrowImage = null
}: Props): JSX.Element => {
    return (
        <div className={className}>
            <div className={`title-text-link-card ${additionalClass}`} style={{ backgroundColor: bgColor }}>
                {image && <img className="card-image" src={image} alt={alt} />}
                <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <a href={link.href} target="_blank" rel="noopener noreferrer">
                        <span>{link.text}</span>
                        {arrowImage} 
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TitleTextLinkCard;
