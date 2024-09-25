import * as React from "react";

interface Props {
    //necessary
    title: string;
    text: string;
    link: Link;
    //optional
    className?: string;
    additionalClass?: string;
    bgColor?: string;
    borderClass?: boolean; 
    hasShadow?: boolean; 
    imageOpacity?: number; 
    image?: string;
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
    className = "col-lg-4",
    additionalClass = "",
    bgColor = "#FFFFFF",
    borderClass = false,
    hasShadow = false,
    imageOpacity = 1, 
    image,
    alt,
    arrowImage = null,
   
}: Props): JSX.Element => {
    return (
        <div className={className}>
            <div 
                className={`title-text-link-card ${additionalClass} ${borderClass ? 'dark-1px-border' : ''} ${hasShadow ? 'box-shadow' : ''}`} 
                style={{ backgroundColor: bgColor }}
            >
                {image && (
                    <img 
                        className="card-image" 
                        src={image} 
                        alt={alt} 
                        style={{ opacity: imageOpacity }} 
                    />
                )}
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
