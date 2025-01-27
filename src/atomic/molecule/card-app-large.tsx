import React from "react";
import ImageI18N from "@/atomic/atom/img-i18n";
import LinkStyledButton from "@/atomic/atom/link-styled-button";

type CardAppLargeProps = {
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
  };
  imageSrc: string;
  imageAlt?: string;
  isImageOnLeft?: boolean;
  backgroundColor?: string;
};

const CardAppLarge: React.FC<CardAppLargeProps> = ({
  iconSrc,
  iconAlt,
  title,
  subtitle,
  content,
  button,
  imageSrc,
  imageAlt = "Image",
  isImageOnLeft = false,
  backgroundColor = "#FFFFFF",
}) => {
  return (
    <div
      className={`card-app-large d-flex flex-wrap justify-content-between rounded-4 ${
        isImageOnLeft ? "flex-row-reverse" : "flex-row"
      }`}
      style={{ backgroundColor }}
    >
      {/* Текстовый блок */}
      <div className="col-12 col-xl-5 d-flex flex-column gap-3 text-start">
        {/* Иконка + Заголовки */}
        <div className="d-flex align-items-center gap-4">
          <div className="icon">
            <img src={iconSrc} alt={iconAlt} width={70} height={70} />
          </div>
          <div>
            <h1 className="mb-1">{title}</h1>
            <h2 className="fs-5">{subtitle}</h2>
          </div>
        </div>

        {/* Описание */}
        <p className="fs-5 mt-4 mb-4">{content}</p>

        {/* Кнопка */}
        <LinkStyledButton
          text={button.text}
          link={button.link}
          color={button.color}
          textColor={button.textColor}
          className="link-button fs-4 rounded-5 py-2 px-5 mt-auto"
        />
      </div>

      {/* Картинка */}
      <div className="img-container d-flex justify-content-center align-items-center mt-5 mt-xl-0 col-xl-6">
        <ImageI18N
          src={imageSrc}
          alt={imageAlt}
          cls="img-fluid rounded-4"
          h={342}
          w={559}
        />
      </div>
    </div>
  );
};

export default CardAppLarge;