"use client"

import React from "react"

import Title from "@/components/ui/Title"
import ChangePasswordForm from "@/components/account/forms/ChangePasswordForm"
import UpdateEmailForm from "@/components/account/forms/UpdateEmailForm"
import UpdateUsernameForm from "@/components/account/forms/UpdateUsernameForm"

export default function Account() {
  return (
    <div className="flex justify-center min-h-screen">
      <div className="container max-w-screen-2xl p-10">
        <div
          id="profile-card"
          className="bg-primary rounded-md shadow-lg flex-1 px-20 pb-10"
        >
          <div className="flex flex-row justify-center items-center p-2 text-center space-x-2">
            <Title
              text="TÀI KHOẢN CỦA BẠN"
              textColor="text-bamboo-100"
              className="drop-shadow-lg pt-14"
            />
          </div>
          <UpdateUsernameForm />
          <UpdateEmailForm />
          <ChangePasswordForm />
        </div>
      </div>
    </div>
  )
}
