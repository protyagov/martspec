import React from "react";
import ImageI18N from "@/atomic/atom/img-i18n";
import CardImage from "./card-image";
import LinkStyledButton from "@/atomic/atom/link-styled-button";

type CardAppLargeProps = {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  content: string;
  button: {
    text: string;
    link: string;
    color?: string;
  };
  imageSrc: string;
  imageAlt?: string;
  useI18NImage?: boolean;
  isImageOnLeft?: boolean;
  backgroundColor?: string;
};

const CardAppLarge: React.FC<CardAppLargeProps> = ({
  icon,
  title,
  subtitle,
  content,
  button,
  imageSrc,
  imageAlt = "Image",
  useI18NImage = false,
  isImageOnLeft = false,
  backgroundColor = "#FFFFFF",
}) => {
  return (
    <div
      className={`card-app-large d-flex flex-wrap justify-content-between px-5 py-4 rounded-4 ${
        isImageOnLeft ? "flex-row-reverse" : "flex-row"
      }`}
      style={{ backgroundColor }}
    >
      {/* Текстовый блок */}
      <div className="col-12 col-xl-5 d-flex flex-column gap-3 text-start">
        {/* Иконка + Заголовки */}
        <div className="d-flex align-items-center gap-4">
          <div>{icon}</div>
          <div>
            <h1 className="mb-1">{title}</h1>
            <h2 className="fs-4">{subtitle}</h2>
          </div>
        </div>

        {/* Описание */}
        <p className="fs-4 mt-4 mb-5">{content}</p>

        {/* Кнопка */}
        <LinkStyledButton
          text={button.text}
          link={button.link}
          color={button.color}
          className="link-button fs-4 rounded-5 py-2 px-5"
        />
      </div>

      {/* Картинка */}
      <div className="img-container d-flex justify-content-center align-items-center mt-5 mt-xl-0 col-xl-6">
        {useI18NImage ? (
          <ImageI18N
            src={imageSrc}
            alt={imageAlt}
            cls="img-fluid rounded-4"
            h={342}
            w={559}
          />
        ) : (
          <CardImage
            imgSrc={imageSrc}
            imgAlt={imageAlt}
            imgH={342}
            imgW={559}
            alignItems="center"
            justifyContent="center"
          />
        )}
      </div>
    </div>
  );
};

export default CardAppLarge;
