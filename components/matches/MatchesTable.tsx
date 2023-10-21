"use client"
import React from "react"
import Image from "next/image"
import PlayerInformation from "@/components/player/PlayerInformation"
import IconButton from "../ui/IconButton"

interface PlayerData {
  username: string
  avatarSrc: string
  flagSrc: string
  result: string
  playTime: string
  score: number
}

// Note: Sử dụng data mẫu tạm thời
const sampleData: PlayerData[] = [
  {
    username: "User1",
    avatarSrc: "/assets/avatars/avatar1.png",
    flagSrc: "/assets/flags/VN.svg",
    result: "Thắng",
    playTime: "40 phút",
    score: -10,
  },
  {
    username: "User2",
    avatarSrc: "/assets/avatars/avatar2.png",
    flagSrc: "/assets/flags/US.svg",
    result: "Thắng",
    playTime: "12 phút",
    score: 20,
  },
  {
    username: "User3",
    avatarSrc: "/assets/avatars/avatar3.png",
    flagSrc: "/assets/flags/CA.svg",
    result: "Thắng",
    playTime: "3 phút",
    score: 10,
  },
  {
    username: "User4",
    avatarSrc: "/assets/avatars/avatar3.png",
    flagSrc: "/assets/flags/CA.svg",
    result: "Thua",
    playTime: "24 phút",
    score: -5,
  },
  {
    username: "User5",
    avatarSrc: "/assets/avatars/avatar3.png",
    flagSrc: "/assets/flags/CA.svg",
    result: "Hoà",
    playTime: "12 phút",
    score: -10,
  },
]

const MatchesTable: React.FC = () => {
  return (
    <div className="w-full h-full rounded-xl bg-bamboo-400 p-8">
      <div className="overflow-x-auto w-full flex-1">
        <table className="table text-bamboo-100 text-lg">
          <thead>
            <tr className="text-dirt-400 text-lg bg-bamboo-200 border-none">
              <th className="rounded-l-md text-center">SST</th>
              <th>Bạn đấu với</th>
              <th>Kết quả</th>
              <th className="text-center">Tổng thời gian</th>
              <th className="rounded-r-md text-center">Điểm</th>
            </tr>
          </thead>
          <tbody>
            {sampleData.map((data, index) => (
              <MatchesRow key={index} data={data} index={index + 1} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

interface MatchesRowProps {
  data: PlayerData
  index: number
}

const MatchesRow: React.FC<MatchesRowProps> = ({ data, index }) => {
  return (
    <tr className="border-none">
      <th className="text-center">{index}</th>
      <td>
        <div className="group flex space-x-2">
          <PlayerInformation
            username={data.username}
            avatarSrc={data.avatarSrc}
            hasFlag
            flagSrc={data.flagSrc}
          />
          <IconButton
            iconSrc="/assets/icons/primary/Add_Friend.svg"
            iconAlt="add friend"
            className="btn-neutral bg-bamboo-300 border-transparent invisible group-hover:visible"
          />
        </div>
      </td>
      <td>
        <div className="flex space-x-2 group items-center">
          <p className="text-xl">{data.result}</p>
          <IconButton
            iconSrc="/assets/icons/primary/Result.svg"
            iconAlt="result"
            className="btn-neutral bg-bamboo-300 border-transparent invisible group-hover:visible"
          />
        </div>
      </td>
      <td className="text-center">{data.playTime}</td>
      <td className="text-center">
        {data.score > 0 ? <p>+{data.score}</p> : <p>{data.score}</p>}
      </td>
    </tr>
  )
}

export default MatchesTable
