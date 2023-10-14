"use client"

import React from "react"

const ChangePasswordForm: React.FC = () => {
  return (
    <div className="flex flex-col py-2">
      <div className="text-bamboo-100 text-left text-sm md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-normal">
        Mật Khẩu
      </div>
      <form>
        <div className="items-center inline-flex flex-col pt-4 gap-4 w-full">
          <input
            type="password"
            name="currentPassword"
            placeholder="Mật khẩu hiện tại"
            className="input input-bordered input-lg w-full bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-xl"
          />
          <input
            type="password"
            name="newPassword"
            placeholder="Mật khẩu mới"
            className="input input-bordered input-lg w-full bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-xl"
          />
          <input
            type="password"
            name="confirmNewPassword"
            placeholder="Xác nhận mật khẩu mới"
            className="input input-bordered input-lg w-full bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-xl"
          />
          <button type="submit" className="btn btn-secondary btn-lg w-full">
            Cập Nhật Mật Khẩu
          </button>
        </div>
      </form>
    </div>
  )
}

export default ChangePasswordForm
