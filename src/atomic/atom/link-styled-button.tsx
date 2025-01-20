import React from 'react';

interface LinkStyledButtonProps {
  text: string;   
  link: string;   
  color?: string;  
  textColor?: string;  
  className?: string; 
}

const LinkStyledButton: React.FC<LinkStyledButtonProps> = ({
  text, 
  link, 
  color = "#8079CC",  
  textColor = "#fff",  
  className = ""
}) => {
  return (
    <a 
      href={link} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`btn ${className}`} 
      style={{ backgroundColor: color, color: textColor }}  
    >
      {text}
    </a>
  );
};

export default LinkStyledButton;