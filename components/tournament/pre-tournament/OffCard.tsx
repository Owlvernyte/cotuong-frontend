"use client"

import React, { useState } from "react"
import Pagination from "./Pagination"
import Banner from "../Banner"
import TournamentCard from "../TournamentCard"
import Image from "next/image"
import PlayerInformation from "@/components/player/PlayerInformation"

interface User {
  id: number
  name: string
  avatarSrc: string
  email: string
  win: number
}

interface Tournament {
  id: number
  name: string
  bannerSrc: string
  users: User[]
}

const users: User[] = [
  {
    id: 1,
    name: "John Doe",
    avatarSrc: "/avatars/avatar1.png",
    email: "john.doe@example.com",
    win: 5,
  },
  {
    id: 2,
    name: "Jane Doe",
    avatarSrc: "/avatars/avatar1.png",
    email: "jane.doe@example.com",
    win: 6,
  },
  {
    id: 3,
    name: "Bob Smith",
    avatarSrc: "/avatars/avatar1.png",
    email: "bob.smith@example.com",
    win: 6,
  },
  {
    id: 4,
    name: "Bob Smith",
    avatarSrc: "/avatars/avatar1.png",
    email: "bob.smith@example.com",
    win: 5,
  },
  {
    id: 5,
    name: "Bob Smith",
    avatarSrc: "/avatars/avatar1.png",
    email: "bob.smith@example.com",
    win: 4,
  },
]

const tournaments: Tournament[] = [
  {
    id: 1,
    name: "Tournament 1",
    bannerSrc: "/icons/Cup.svg",
    users: users.slice(0, 3),
  },
  {
    id: 2,
    name: "Tournament 2",
    bannerSrc: "/icons/Cup.svg",
    users: users.slice(2, 5),
  },
]

const OffCard = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
  }

  const itemsPerPage = 1

  const startIndex = (currentPage - 1) * itemsPerPage

  const endIndex = startIndex + itemsPerPage

  const startDate = new Date()

  const date = startDate.getDate()
  const month = startDate.getMonth() + 1
  const year = startDate.getFullYear()

  return (
    <TournamentCard>
      <div className="text-3xl pb-8 pt-4 pl-4 text-bamboo-100">
        BẢNG CÁC GIẢI ĐẤU
      </div>

      {/* Hard code */}
      <div
        id="tournament-list"
        className="inline-grid grid-cols-1 md:grid-cols-8 gap-4"
      >
        <div className="col-span-1 md:col-span-2">
          <Banner
            title={tournaments[0].name}
            subtitle={`${date}/${month}/${year}`}
          />
        </div>

        <div id="top1" className="col-span-1 md:col-span-2">
          <div className="flex flex-col space-y-2">
            <div className="card rounded-md w-full h-48 justify-center items-center bg-bamboo-200">
              <div className="card-body h-full flex flex-row justify-center items-center">
                <Image
                  src="/medals/top1.svg"
                  alt="top1"
                  width={100}
                  height={100}
                />
                <p className="text-7xl text-dirt-400 px-2">123</p>
              </div>
            </div>

            <div className="card rounded-md w-full h-full justify-center items-center bg-bamboo-300">
              <div className="card-body">
                <PlayerInformation
                  username="Player 1"
                  avatarSrc="/avatars/avatar1.png"
                  hasFlag
                  flagSrc="/flags/VN.svg"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="top2" className="col-span-1 md:col-span-2">
          <div className="flex flex-col space-y-2">
            <div className="card rounded-md w-full h-48 justify-center items-center bg-bamboo-200">
              <div className="card-body h-full flex flex-row justify-center items-center">
                <Image
                  src="/medals/top2.svg"
                  alt="top2"
                  width={100}
                  height={100}
                />
                <p className="text-7xl text-dirt-400 px-2">65</p>
              </div>
            </div>

            <div className="card rounded-md w-full h-full justify-center items-center bg-bamboo-300">
              <div className="card-body">
                <PlayerInformation
                  username="Player 2"
                  avatarSrc="/avatars/avatar6.png"
                  hasFlag
                  flagSrc="/flags/VN.svg"
                />
              </div>
            </div>
          </div>
        </div>

        <div id="top3" className="col-span-1 md:col-span-2">
          <div className="flex flex-col space-y-2">
            <div className="card rounded-md w-full h-48 justify-center items-center bg-bamboo-200">
              <div className="card-body h-full flex flex-row justify-center items-center">
                <Image
                  src="/medals/top3.svg"
                  alt="top3"
                  width={100}
                  height={100}
                />
                <p className="text-7xl text-dirt-400 px-2">4</p>
              </div>
            </div>

            <div className="card rounded-md w-full h-full justify-center items-center bg-bamboo-300">
              <div className="card-body">
                <PlayerInformation
                  username="Player 3"
                  avatarSrc="/avatars/avatar2.png"
                  hasFlag
                  flagSrc="/flags/VN.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(tournaments.length / itemsPerPage)}
        onPageChange={handlePageChange}
      />
    </TournamentCard>
  )
}

export default OffCard
