"use client"

import Image from "next/image"
import Link from "next/link"
import React from "react"

function SignUpForm() {
  const [isChecked, setIsChecked] = React.useState(false)

  const handleCheckboxClick = () => {
    setIsChecked(!isChecked)
  }

  return (
    <form>
      <div className="flex flex-row justify-start w-full ">
        <Image
          src="/icons/secondary/User_fill.svg"
          alt="User Logo"
          width={80}
          height={80}
        />
        <input
          type="text"
          name="username"
          placeholder="Tên Người Dùng"
          className="input input-bordered border-bamboo-400 input-lg w-full m-2 bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-lg"
        />
      </div>

      <div className="flex flex-row justify-start w-full ">
        <Image
          src="/icons/secondary/Message_alt_fill.svg"
          alt="Mail Logo"
          width={80}
          height={80}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="input input-bordered border-bamboo-400 input-lg w-full m-2 bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-lg"
        />
      </div>

      <div className="flex flex-row justify-start w-full ">
        <Image
          src="/icons/secondary/Unlock_fill.svg"
          alt="Password Logo"
          width={80}
          height={80}
        />
        <input
          type="password"
          name="currentPassword"
          placeholder="Mật Khẩu"
          className="input input-bordered border-bamboo-400 input-lg w-full m-2 bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-lg"
        />
      </div>

      <div className="px-2 mt-10">
        <button className="btn btn-primary w-full">Tiếp Tục</button>
      </div>
    </form>
  )
}

export default SignUpForm
