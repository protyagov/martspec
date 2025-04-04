import React from "react";
import ButtonChevronRight from "@/atomic/atom/button-chevron-right"; // Импортируем новый компонент
import LinkStyledButton from "@/atomic/atom/link-styled-button";

type CardAppSmallProps = {
  iconSrc: string;
  iconAlt: string;
  title: string;
  subtitle: string;
  content: string;
  button: {
    text: string;
    link: string;
    color?: string;
    textColor?: string;
    buttonType: "LinkStyledButton" | "ButtonChevronRight";
  };
  backgroundColor?: string;
};

const CardAppSmall: React.FC<CardAppSmallProps> = ({
  iconSrc,
  iconAlt,
  title,
  subtitle,
  content,
  button,
  backgroundColor = "#FFFFFF",
}) => {
  return (
    <div
      className="card-app-small d-flex flex-column align-items-start px-4 py-4 rounded-5"
      style={{ backgroundColor }}
    >
      {/* Верхняя часть с иконкой, заголовком и подзаголовком */}
      <div className="d-flex align-items-center gap-3 mb-4">
        <div className="icon">
          <img src={iconSrc} alt={iconAlt} width={50} height={50} />
        </div>
        <div>
          <h1 className="mb-1">{title}</h1>
          <h2 className="fs-5">{subtitle}</h2>
        </div>
      </div>

      {/* Описание */}
      <p className="fs-5 mb-5">{content}</p>

      {/* Кнопка с использованием LinkStyledButton или ButtonChevronRight */}
      {button.buttonType === "LinkStyledButton" ? (
        <LinkStyledButton
            text={button.text}
            link={button.link}
            color={button.color}
            textColor={button.textColor}
            className="link-button fs-4 rounded-5 py-2 px-5 mt-auto"
        />
      ) : (
        <ButtonChevronRight
          text={button.text}
          link={button.link}
          className="fs-4 rounded-5 p-0 mt-auto" 
        />
      )}
      
    </div>
  );
};

export default CardAppSmall;