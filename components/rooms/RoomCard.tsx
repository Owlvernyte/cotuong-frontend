"use client"

import Image from "next/image"
import Link from "next/link"
import React from "react"

interface RoomCardProps {
  idRoom: string
  numberOfViewers: number
  player1: string
  player2: string
  linkRoom: string
}

const RoomCard: React.FC<RoomCardProps> = ({
  idRoom,
  numberOfViewers,
  player1,
  player2,
  linkRoom,
}) => {
  return (
    <div className="card bg-dirt-200 rounded-md hover:bg-dirt-100">
      <div className="card-body p-4">
        <div className="w-full">
          <p className="text-md">ID: {idRoom || "..."}</p>

          <div className="flex flex-row pb-2 items-center justify-center">
            <Image
              src="/assets/icons/secondary/Eye_fill.svg"
              alt="Eye Icon"
              width={25}
              height={25}
            />
            <p className="text-md pl-1">{numberOfViewers || 0}</p>
          </div>

          <div className="w-full h-[1px] border-1 bg-dirt-400 solid"></div>

          <div className="flex flex-col justify-center items-center py-2">
            {player1 ? (
              <p id="player1" className="text-md text-bamboo-400">
                {player1}
              </p>
            ) : (
              <p className="text-md text-bamboo-100">{"[Chưa Có]"}</p>
            )}

            <div id="board-room" className="py-2 hover:blur-sm relative">
              <Link href={linkRoom}>
                <Image
                  src="/assets/game/board/banco1.svg"
                  alt="Board Image"
                  width={150}
                  height={150}
                />
              </Link>
            </div>

            {player2 ? (
              <p id="player2" className="text-md text-bamboo-400">
                {player2}
              </p>
            ) : (
              <p className="text-md text-bamboo-100">{"[Chưa Có]"}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default RoomCard
