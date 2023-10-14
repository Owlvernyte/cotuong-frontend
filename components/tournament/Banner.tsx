import React from "react"
import Image from "next/image"

interface Props {
  title: string
  subtitle: string
  imgSrc?: string
}

export default function Banner({ title, subtitle, imgSrc }: Props) {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex flex-col items-center justify-center bg-dirt-300 rounded-md shadow h-full w-full py-2">
        <h4 className="text-center text-bamboo-100 text-3xl font-bold mb-2">
          {title}
        </h4>
        <Image
          src={imgSrc ?? "/icons/Cup.svg"}
          alt="Banner"
          width={150}
          height={150}
          className="py-2"
        />
        <div className="text-bamboo-100 text-xl py-2">{subtitle}</div>
      </div>
    </div>
  )
}
