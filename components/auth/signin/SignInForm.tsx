"use client"

import Image from "next/image"
import Link from "next/link"
import React from "react"

function SignInForm() {
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
          placeholder="Tên Người Dùng/Email"
          className="input input-bordered border-bamboo-400 input-lg w-full m-2 bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-lg"
        />
      </div>

      <div className="flex flex-row justify-start w-full ">
        <Image
          src="/icons/secondary/Pass_word.svg"
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

      <div className="w-full flex justify-between mt-2 mb-4">
        <div className="flex flex-row pl-20">
          <input
            type="checkbox"
            checked={isChecked}
            className="checkbox checkbox-primary checkbox-sm mt-1 mr-1"
            onChange={handleCheckboxClick}
          />
          <p className="text-lg text-bamboo-300">Nhớ tôi</p>
        </div>
        <div className="pr-3">
          <Link href={"/"} className="link text-lg text-bamboo-300">
            Quên mật khẩu?
          </Link>
        </div>
      </div>

      <div className="px-2 mt-10">
        <button className="btn btn-primary w-full">Tiếp Tục</button>
      </div>
    </form>
  )
}

export default SignInForm
