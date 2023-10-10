import React from "react"
import Image from "next/image"

interface IconButtonProps {
  iconSrc: string
  iconAlt: string
  iconWidth?: number
  iconHeight?: number
  buttonVariants?: string
  onClick?: () => void
  className?: string 
}

const IconButton: React.FC<IconButtonProps> = ({
  iconSrc,
  iconAlt,
  iconWidth = 20,
  iconHeight = 20,
  buttonVariants = "btn-secondary",
  onClick,
  className = "", 
}) => {
  return (
    <button className={`icon-button btn btn-lg text-xl ${buttonVariants} ${className}`} onClick={onClick}>
      <Image
        src={iconSrc}
        alt={iconAlt}
        width={iconWidth}
        height={iconHeight}
        style={{ width: "auto", height: "auto" }}
      />
    </button>
  )
}

export default IconButton
