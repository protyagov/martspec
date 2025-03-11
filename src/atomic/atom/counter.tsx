import React from "react";

interface CounterProps {
  title: string;
  titleColor?: string;
  subtitle: string;
  subtitleColor?: string;
}

const Counter: React.FC<CounterProps> = ({ title, titleColor = "#1686FF", subtitle, subtitleColor = "#151515" }) => {
  return (
    <div className="counter flex flex-col items-start justify-center w-auto">
        <h2 className="fs-1 text-nowrap m-0 font-bold text-left lh-1" style={{ color: titleColor }}>{title}</h2>
        <p className="font-normal m-0 text-left" style={{ color: subtitleColor }}>{subtitle}</p>
    </div>
  );
};

export default Counter;
