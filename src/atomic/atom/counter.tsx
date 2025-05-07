import React, { useState } from "react";

interface CounterProps {
  title: string;
  subtitle: string;
  altText: string;
  titleColor?: string;
  subtitleColor?: string;
}

const Counter: React.FC<CounterProps> = ({ title, subtitle, altText, titleColor = "#1686FF", subtitleColor = "#151515" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event: React.MouseEvent) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  };

  return (
    <div 
      className="counter"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      style={{ position: "relative", display: "inline-block" }} 
    >
        <h2 className="fs-1 text-nowrap m-0 font-bold text-left lh-1" style={{ color: titleColor }}>{title}</h2>
        <p className="font-normal m-0 text-left" style={{ color: subtitleColor }}>{subtitle}</p>

        {isHovered && (
            <div 
              style={{
                position: "fixed",
                left: `${mousePosition.x + 10}px`,
                top: `${mousePosition.y + 10}px`,
                backgroundColor: "white",
                color: "black",
                padding: "6px",
                border: "1px solid black",
                borderRadius: "4px",
                fontSize: "14px",
                whiteSpace: "nowrap",
                zIndex: 1000,
                pointerEvents: "none"
              }}
            >
              {altText}
            </div>
        )}
    </div>
  );
};

export default Counter;
