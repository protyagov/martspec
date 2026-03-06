import React from "react";
import ImageI18N from "@/atomic/atom/img-i18n";
import ButtonLinkStyleAnimated from "@/atomic/atom/buttonLinkStyleAnimated";

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
      className={`card-app-large d-flex flex-wrap justify-content-between rounded-5 ${
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
        <p className="mt-4 content">{content}</p>

        {/* Кнопка */}
        <ButtonLinkStyleAnimated
          text={button.text}
          link={button.link}
        />
      </div>

      {/* Картинка */}
      <div className="img-container d-flex justify-content-center align-items-center mt-5 mt-xl-0 col-xl-6">
        <ImageI18N
          src={imageSrc}
          alt={imageAlt}
          cls="img-fluid rounded-5"
          h={342}
          w={559}
        />
      </div>
    </div>
  );
};

export default CardAppLarge;