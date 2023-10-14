"use client"

import React from "react"
import AuthCard from "@/components/auth/AuthCard"
import SignUpForm from "@/components/auth/signup/SignUpForm"

export default function SignUp() {
  return (
    <div className="flex justify-center">
      <div className="container max-w-screen-2xl px-10 py-2">
        <div id="signup">
          <AuthCard
            titles={["Cờ Tướng", "ăn thịt nướng"]}
            subtitles={[
              "Hãy tham gia cộng đồng của",
              "chúng tôi để tạo nên những",
              "thành tích đặc biệt tại đây!",
            ]}
            formTitle="TẠO MỘT TÀI KHOẢN"
            formComponent={<SignUpForm />}
            extensionLink="/signin"
            titleLink="Bạn đã có tài khoản? Đăng Nhập"
          />
        </div>
      </div>
    </div>
  )
}
