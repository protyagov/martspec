import * as React from "react";
import TextLinkArrow from "./text-link-arrow";

interface Props {
    // Necessary props
    title: string;
    text: string;
    link: LinkProps;
    // Optional props
    className?: string;
    additionalClass?: string;
    bgColor?: string;
    image?: string;
    alt?: string;
    arrowImage?: React.ReactNode;
    hoverColor?: string;
}

interface LinkProps {
    text: string;
    href: string;
}

const TitleTextLinkCard: React.FC<Props> = ({
    title,
    text,
    link,
    className = "col-lg-4",
    additionalClass = "",
    bgColor = "#FFFFFF",
    image,
    alt = "Image",
    arrowImage = null,
    hoverColor=""
}: Props): JSX.Element => {
    return (
        <div className={className}>
            <div className={`title-text-link-card ${additionalClass}`} style={{ backgroundColor: bgColor }}>
                {image && (
                    <img
                        className="card-image"
                        src={image}
                        alt={alt}
                    />
                )}
                <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <TextLinkArrow
                        href={link.href}
                        rightIcon={arrowImage}
                        text={link.text}
                        isNewTab={true}
                        hoverColor={hoverColor}
                    />
                </div>
            </div>
        </div>
    );
};

export default TitleTextLinkCard;
