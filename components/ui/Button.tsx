import React from "react";
import Image from "next/image";

interface ButtonProps {
  text: string;
  buttonVariants?: string;
  startIcon?: boolean;
  endIcon?: boolean;
  startIconSrc?: string;
  startIconAlt?: string;
  startIconWidth?: number;
  startIconHeight?: number;
  endIconSrc?: string;
  endIconAlt?: string;
  endIconWidth?: number;
  endIconHeight?: number;
}

const Button: React.FC<ButtonProps> = ({
  text,
  buttonVariants = "btn-primary",
  startIcon = false,
  endIcon = false,
  startIconSrc = "",
  startIconAlt = "",
  startIconWidth = 20,
  startIconHeight = 20,
  endIconSrc = "",
  endIconAlt = "",
  endIconWidth = 20,
  endIconHeight = 20,
}) => {
  return (
    <button className={`btn ${buttonVariants} btn-md`}>
      {startIcon && (
        <>
          <Image
            src={startIconSrc}
            alt={startIconAlt}
            width={startIconWidth}
            height={startIconHeight}
          />
          {text}
        </>
      )}
      {!startIcon && !endIcon && <span>{text}</span>}
      {endIcon && (
        <>
          {startIcon && !text && <span>&nbsp;</span>}
          {text && !startIcon && <span>{text}</span>}
          <Image
            src={endIconSrc}
            alt={endIconAlt}
            width={endIconWidth}
            height={endIconHeight}
          />
        </>
      )}
    </button>
  );
};

export default Button;
