"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

interface AuthCardProps {
  titles: string[]
  subtitles: string[]
  formTitle: string
  formComponent: React.ReactNode
  extensionLink: string
  titleLink: string
}

const AuthCard: React.FC<AuthCardProps> = ({
  titles,
  subtitles,
  formTitle,
  formComponent,
  extensionLink,
  titleLink,
}) => {
  return (
    <div className="card lg:card-side bg-bamboo-200 rounded-md shadow-xl">
      <div className="card-body w-full lg:border-r-bamboo-400 lg:border-r-2">
        <div className="card-title">
          <Image src="/assets/nyte2.svg" alt="Nyte Logo" width={50} height={50} />
        </div>

        <div className="w-full py-40 h-full flex flex-col justify-center items-center">
          <div className="flex flex-col">
            {titles.map((t) => (
              <p key={t} className="text-dirt-400 text-6xl py-2">
                {t}
              </p>
            ))}
            <div className="py-4">
              {subtitles.map((s) => (
                <p key={s} className="text-bamboo-300 text-2xl py-1">
                  {s}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="card-actions justify-start">
          <Link href={"https://cotuong.nyte.tk/"} className="text-bamboo-100">
            cotuong.nyte.tk
          </Link>
        </div>
      </div>

      <div className="card-body w-full">
        <div className="text-5xl text-center my-6">{formTitle}</div>

        <div className="my-2">{formComponent}</div>

        <div className="text-center text-lg py-2">
          <Link href={extensionLink} className="link">
            {titleLink}
          </Link>
        </div>
        <div className="card-actions justify-center">
          <div>
            <div className="flex items-center">
              <div className="w-72 h-[1px] border-1 bg-bamboo-400 solid"></div>
              <p className="text-center p-3.5 text-bamboo-300 text-xl inline-block">
                hoặc
              </p>
              <div className="w-72 h-[1px] border-1 bg-bamboo-400 solid"></div>
            </div>
          </div>
          <div className="flex flex-row">
            <button className="w-80 mx-2 btn btn-lg btn-accent">
              <Image
                src="/assets/google.svg"
                alt="Google Logo"
                width={40}
                height={40}
              />
              Tiếp tục với Google
            </button>

            <button className="w-80 mx-2 btn btn-lg btn-accent">
              <Image
                src="/assets/discord.svg"
                alt="Discord Logo"
                width={40}
                height={40}
              />
              Tiếp tục với Discord
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AuthCard
