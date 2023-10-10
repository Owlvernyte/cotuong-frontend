"use client"

import React from "react"

const ChangePasswordForm: React.FC = () => {
  return (
    <div className="p-2 flex flex-col">
      <div className="text-bamboo-100  text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-normal pt-4 ">
        Mật Khẩu
      </div>
      <div className="p-2 items-center inline-flex flex-col pt-7 gap-8 w-full">
        <input
          type="text"
          name="password"
          placeholder="Mật khẩu hiện tại"
          className="input input-bordered input-lg w-full bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-xl"
        />
        <input
          type="text"
          name="n_password"
          placeholder="Mật khẩu mới"
          className="input input-bordered input-lg w-full bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-xl"
        />
        <input
          type="text"
          name="rn_password"
          placeholder="Xác nhận mật khẩu mới"
          className="input input-bordered input-lg w-full bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-xl"
        />
        <button className="btn btn-secondary btn-lg w-full">
          Cập Nhật Mật Khẩu{" "}
        </button>
      </div>
    </div>
  )
}

export default ChangePasswordForm
