import React, { SVGProps, useState, useEffect } from "react";

interface ScrollButtonProps extends SVGProps<SVGSVGElement> {
    color?: string;
  }
  
  export default function ScrollButton({ color = "#1686FF", ...props }: ScrollButtonProps) {
    
    const [visible, setVisible] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
        const toggleVisible = () => {
            const scrolled = window.scrollY || document.documentElement.scrollTop;
            setVisible(scrolled > 300);
        };
    
        const handleScrollEnd = () => {
            if (window.scrollY === 0) {
                setScrolling(false);
            }
        };
    
        window.addEventListener("scroll", toggleVisible);
        window.addEventListener("scroll", handleScrollEnd);
    
        return () => {
            window.removeEventListener("scroll", toggleVisible);
            window.removeEventListener("scroll", handleScrollEnd);
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
            style={{ "--color-btn": color } as React.CSSProperties}
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
                    <rect />
                    <path />
                </svg>
            </button>
        </div>
    );
}
