import React from "react";

interface TitleProps {
  text: string;
  textAlign?: string;
}

const Title: React.FC<TitleProps> = ({ text, textAlign = "text-center" }) => {
  return (
    <div
      className={`${textAlign} text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl`}
    >
      {text}
    </div>
  );
};

export default Title;
