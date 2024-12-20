import React, { SVGProps, useState, useEffect } from "react";

interface ScrollButtonProps extends SVGProps<SVGSVGElement> {
    color?: string;
}

const MOBILE_WIDTH = 767;
  
export default function ScrollButton({ color = "#1686FF", ...props }: ScrollButtonProps) {

    const [visible, setVisible] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const isScreenSmall = window.innerWidth <= MOBILE_WIDTH;

    const circleAttributes = isScreenSmall ? { r: 30, cx: 30, cy: 30 } : { r: 35, cx: 35, cy: 35 };
    const pathAttributes = isScreenSmall ? "M40.5 34L30 24L19 34" : "M45.5 39L35 29L24 39";

    useEffect(() => {
        let scrollTimeout: ReturnType<typeof setTimeout> | null = null;

        const toggleVisible = () => {
            const scrolled = window.scrollY || document.documentElement.scrollTop;
            setVisible(scrolled > 300);
        };
    
        const handleScrollEnd = () => {
            if (scrollTimeout) {
            clearTimeout(scrollTimeout);
            }

            scrollTimeout = setTimeout(() => {
                setScrolling(false); 
            }, 20);
        };
    
        window.addEventListener("scroll", toggleVisible);
        window.addEventListener("scroll", handleScrollEnd);
    
        return () => {
            window.removeEventListener("scroll", toggleVisible);
            window.removeEventListener("scroll", handleScrollEnd);
            if (scrollTimeout) {
                clearTimeout(scrollTimeout);
            }
        };
    }, []);


    const scrollToTop = () => {
        if (scrolling) return;

        setScrolling(true);
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div 
            className={`wrapper-scroll-btn ${visible ? "" : "hidden"} ms-s-offset m-0`}
        >
            <button
                onClick={scrollToTop}
                className={`scroll-btn ${scrolling ? "scrolling" : ""}`}
                aria-label="Scroll to Top"
            >
                <svg 
                    aria-label="chevron up icon"
                    viewBox="0 0 70 70" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    {...props}
                >
                    <circle 
                        r={circleAttributes.r}
                        cx={circleAttributes.cx}
                        cy={circleAttributes.cy}
                        fill={color}
                    />
                    <path 
                        stroke="white" 
                        strokeWidth="3" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d={pathAttributes}
                    >
                    </path>
                </svg>
            </button>
        </div>
    );
}
