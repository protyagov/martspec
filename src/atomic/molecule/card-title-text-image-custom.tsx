import React, { CSSProperties, useState, useEffect} from "react";
import "@/sass/molecule/card-title-text-image-custom.scss";
import TextLinkArrow from "@/atomic/molecule/text-link-arrow";
import RightArrowIcon from "@/atomic/atom/right-arrow-icon";

interface ActionLink {
    text: string;
    href: string;
}

export interface BackgroundImage {
    src: string;
    width: number;
    height: number;
}

interface CardTitleTextImageCustomProps {
    title: string;
    text: string;
    bgColor?: CSSProperties["color"];
    titleColor?: CSSProperties["color"];
    textColor?: CSSProperties["color"];
    titleFontSize?: CSSProperties["fontSize"];
    textFontSize?: CSSProperties["fontSize"];
    titleFontFam?: CSSProperties["fontFamily"];
    textFontFam?: CSSProperties["fontFamily"];
    imgSrc?: string;
    imgPosition?: "left-bottom" | "right-bottom" | "center-bottom";
    shadow?: boolean;
    cardHeight?: string;
    cardMobileHeight?: string;
    imgH?: string;
    imgMobileH?: string;
    responsive?: boolean;
    actionLink?: ActionLink;
    primaryColor?: CSSProperties["color"];
    linkHoverColor?: CSSProperties["color"];
    mobileBreakpoint?: number;
}

export default function CardTitleTextImageCustom({
    title,
    text,
    bgColor,
    titleColor = "#212529",
    textColor = "#595959",
    titleFontSize = "1.5rem",
    textFontSize = "1.25rem",
    titleFontFam = "",
    textFontFam = "",
    imgSrc,
    imgPosition = "right-bottom",
    shadow = true,
    cardHeight = "100%",
    cardMobileHeight,
    imgH = "100%",
    imgMobileH,
    responsive = true,
    actionLink,
    primaryColor,
    linkHoverColor,
    mobileBreakpoint = 855,
}: CardTitleTextImageCustomProps): React.ReactNode {
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= mobileBreakpoint);
        };
        
        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, [mobileBreakpoint]);
    const currentImgH = imgMobileH && isMobile ? imgMobileH : imgH;
    const currentCardHeight = cardMobileHeight && isMobile ? cardMobileHeight : cardHeight;
    return (
        <div
            className={`card-title-text h-100 rounded-5 p-lg-5 p-4 pb-5 position-relative ${shadow ? "shadow" : ""} ${responsive ? "responsive-card" : ""}`}
            style={{ 
                backgroundColor: bgColor,
                minHeight: currentCardHeight,
                width: "auto",
                
            }}
        >
            <div className="position-relative" style={{ zIndex: 2 }}>
            <h3
                className="mb-3 mt-0 pe-5 lh-sm"
                style={{
                    color: titleColor,
                    fontSize: titleFontSize,
                    fontFamily: titleFontFam,
                }}
            >
                {title}
            </h3>
            <p
                className="text mb-0  lh-sm"
                style={{
                    color: textColor,
                    fontSize: textFontSize,
                    fontFamily: textFontFam,
                }}
            >
                {text}
            </p>
            </div>
            
            {actionLink && (
                <div className="card-action pt-4">
                    <TextLinkArrow
                        rightIcon={<RightArrowIcon />}
                        text={actionLink.text} // Передаем явно
                        href={actionLink.href} // Передаем явно
                        color={primaryColor}
                        hoverColor={linkHoverColor}
                    />
                </div>
            )}
            
            {imgSrc && (
                <div 
                    className="position-absolute "
                    style={{
                        bottom: 0,
                        ...(imgPosition === "right-bottom" ? { right: 0 } : 
                            imgPosition === "left-bottom" ? { left: 0 } : 
                            imgPosition === "center-bottom" ? { center: 0 } : 
                            { left: "50%"}),
                        width: "auto",
                        height: currentImgH,
                        overflow: "hidden"
                    }}
                >
                    <img 
                        src={imgSrc}
                        className="h-100"
                        style={{
                            objectFit: "cover",
                            transition: "transform 3s ease"
                        }}
                    />
                </div>
            )}
        </div>
    );
}