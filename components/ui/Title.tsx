import React from "react"

interface TitleProps {
  text: string
  textAlign?: string
  textColor?: string
  className?: string
}

const Title: React.FC<TitleProps> = ({
  text,
  textAlign = "text-center",
  textColor = "text-dirt-400",
  className = "",
  ...props
}) => {
  return (
    <div
      className={`${textAlign} ${textColor} text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl ${className}`}
      {...props}
    >
      {text}
    </div>
  )
}

export default Title
