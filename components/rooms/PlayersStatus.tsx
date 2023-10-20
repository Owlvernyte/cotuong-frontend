"use client"

import React from "react"
import PlayerInformation from "../player/PlayerInformation"

// Sử dụng data mẫu
interface PlayerData {
  username: string
  avatarSrc: string
  flagSrc: string
  status: "Rảnh tay" | "Đang chơi"
}

const players: PlayerData[] = [
  {
    username: "Player 1",
    avatarSrc: "/assets/avatars/avatar1.png",
    flagSrc: "/assets/flags/VN.svg",
    status: "Rảnh tay",
  },
  {
    username: "Player 2",
    avatarSrc: "/assets/avatars/avatar2.png",
    flagSrc: "/assets/flags/BO.svg",
    status: "Đang chơi",
  },
  {
    username: "Player 3",
    avatarSrc: "/assets/avatars/avatar3.png",
    flagSrc: "/assets/flags/AC.svg",
    status: "Rảnh tay",
  },
  {
    username: "Player 4",
    avatarSrc: "/assets/avatars/avatar4.png",
    flagSrc: "/assets/flags/VN.svg",
    status: "Đang chơi",
  },
  {
    username: "Player 5",
    avatarSrc: "/assets/avatars/avatar5.png",
    flagSrc: "/assets/flags/AZ.svg",
    status: "Đang chơi",
  },
  {
    username: "Player 6",
    avatarSrc: "/assets/avatars/avatar6.png",
    flagSrc: "/assets/flags/VN.svg",
    status: "Rảnh tay",
  },
  {
    username: "Player 7",
    avatarSrc: "/assets/avatars/avatar6.png",
    flagSrc: "/assets/flags/VN.svg",
    status: "Rảnh tay",
  },
]

function PlayersStatus() {
  return (
    <div>
      <div
        id="statuses"
        className="flex flex-col justify-start space-y-2 lg:flex-row lg:space-x-2 lg:space-y-0"
      >
        <div className="tooltip " data-tip="Rảnh tay">
          <div className="card bg-bamboo-300 items-center h-full w-28 rounded-md shadow-md">
            <div className="card-body flex flex-row p-3">
              <div className="btn btn-xs btn-circle btn-success"></div>
              <div className="text-lg text-bamboo-100">
                {players.filter((p) => p.status === "Rảnh tay").length}
              </div>
            </div>
          </div>
        </div>

        <div className="tooltip " data-tip="Đang chơi">
          <div className="card bg-bamboo-300 items-center h-full w-28 rounded-md shadow-md">
            <div className="card-body flex flex-row p-3">
              <div className="btn btn-xs btn-circle btn-error"></div>
              <div className="text-lg text-bamboo-100">
                {players.filter((p) => p.status === "Đang chơi").length}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="player-list" className="flex flex-col py-4 space-y-4">
        {players.map((p) => (
          <PlayerInformation
            key={p.username}
            username={p.username}
            textSize="md:text-4xl"
            avatarSrc={p.avatarSrc}
            avatarSize={50}
            imageWidth={70}
            imageHeight={70}
            hasFlag
            flagSrc={p.flagSrc}
            hasStatus
            status={p.status}
          />
        ))}
      </div>
    </div>
  )
}

export default PlayersStatus
