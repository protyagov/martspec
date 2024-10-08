import React from 'react';
import '@/sass/molecule/bullet-list.scss'; 

interface BulletListProps {
  items: string[];
  iconColor: string;
  className?: string; 
}

const BulletList: React.FC<BulletListProps> = ({ items, iconColor, className }) => {
  return (
      <ul className={className}>
        {items.map((item, index) => (
          <li key={index}>
            <svg
              className="bullet-list__icon"
              width="23"
              height="23"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.0007 23.6663C18.4442 23.6663 23.6673 18.4432 23.6673 11.9997C23.6673 5.55618 18.4442 0.333008 12.0007 0.333008C5.55715 0.333008 0.333984 5.55618 0.333984 11.9997C0.333984 18.4432 5.55715 23.6663 12.0007 23.6663ZM18.2668 8.30718C18.3214 8.25095 18.3641 8.1843 18.3923 8.11121C18.4206 8.03813 18.4338 7.9601 18.4313 7.88178C18.4287 7.80346 18.4104 7.72646 18.3774 7.65538C18.3444 7.5843 18.2975 7.52059 18.2393 7.46805C18.1812 7.41552 18.1131 7.37524 18.039 7.34961C17.965 7.32398 17.8865 7.31354 17.8083 7.3189C17.7302 7.32427 17.6539 7.34532 17.584 7.38082C17.5141 7.41632 17.4522 7.46553 17.4017 7.52551L10.414 15.2471L6.56982 11.5773C6.45796 11.4704 6.30822 11.4123 6.15354 11.4158C5.99885 11.4193 5.85189 11.4842 5.74498 11.596C5.63808 11.7079 5.57999 11.8576 5.58349 12.0123C5.58699 12.167 5.6518 12.3139 5.76365 12.4208L10.0418 16.5042L10.4752 16.9183L10.8772 16.4738L18.2668 8.30718Z"
                fill={iconColor}
              />
            </svg>
            <span className="bullet-list__text">{item}</span>
          </li>
        ))}
      </ul>
  );
};

export default BulletList;
