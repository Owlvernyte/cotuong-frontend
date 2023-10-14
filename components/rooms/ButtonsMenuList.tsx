"use client"

import Image from "next/image"
import React from "react"

function ButtonsMenuList() {
  return (
    <div className="flex flex-col xl:flex-row justify-center w-full">
      <button className="btn btn-secondary btn-md xl:btn-lg w-50 m-2">
        <Image
          src={"/icons/secondary/Add_ring_fill.svg"}
          alt="Create Icon"
          width={35}
          height={35}
        />
        TẠO PHÒNG
      </button>

      <button className="btn btn-secondary btn-md xl:btn-lg w-50 m-2">
        <Image
          src={"/icons/secondary/Search_alt_fill.svg"}
          alt="Create Icon"
          width={35}
          height={35}
        />
        TÌM PHÒNG
      </button>
    </div>
  )
}

export default ButtonsMenuList
