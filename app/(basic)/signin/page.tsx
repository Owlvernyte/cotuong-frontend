"use client"

import React from "react"
import AuthCard from "@/components/auth/AuthCard"
import SignInForm from "@/components/auth/signin/SignInForm"

export default function SignIn() {
  return (
    <div className="flex justify-center">
      <div className="container max-w-screen-2xl px-10 py-2">
        <div id="signin">
          <AuthCard
            titles={["Hãy tiếp tục", "ăn thịt nướng", "cùng Cờ Tướng"]}
            subtitles={["Giải đấu đang chờ bạn!"]}
            formTitle="Chào mừng bạn trở lại!"
            formComponent={<SignInForm />}
            extensionLink="/signup"
            titleLink="Bạn cần một tài khoản? Đăng Ký"
          />
        </div>
      </div>
    </div>
  )
}
