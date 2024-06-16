import React from "react";

interface Props {
    title: string;
    text: string;
    link: Link;
    image?: string;
    bgColor?: string;
    className?: string;
    alt?: string;
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
    className = "col-lg-4"
}: Props): JSX.Element => {
    return (
        <div className={className}>
            <div className="title-text-link-card" style={{ backgroundColor: bgColor }}>
                <img src={image} alt={alt}/>
                <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <a href={link.href}>
                        <span>{link.text}</span>
                        <img src="/img/arrow-right.svg" width={6} height={12} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default TitleTextLinkCard;
