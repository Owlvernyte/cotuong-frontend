import React from "react"
import Button from "@/components/ui/Button"
import PlayerData from "./PlayerData"
import PlayerInformation from "@/components/player/PlayerInformation"

interface PlayerData {
  username: string
  avatarSrc: string
  flagSrc: string
  rank: number
  win: number
  loss: number
  draw: number
}

// Note: Sử dụng data mẫu tạm thời
const sampleData: PlayerData = {
  username: "User1",
  avatarSrc: "/avatars/avatar1.png",
  flagSrc: "/flags/VN.svg",
  rank: 1,
  win: 120,
  loss: 42,
  draw: 2,
}

interface SelfInfoProps {
  data: PlayerData
}
const SelfInfo: React.FC = () => {
  return (
    <div className="flex flex-col justify-center w-full h-full space-y-2">
      <div className="flex flex-col p-4 bg-dirt-300 w-full h-full rounded-md justify-between">
        <div className="text-lg items-center text-bamboo-100 my-2 md:my-0">
          Vị trí hiện tại của bạn:
        </div>
        <div>
          <PlayerInformation
            username="Username 1"
            avatarSrc="/avatars/avatar1.png"
            hasFlag
            flagSrc="/flags/VN.svg"
          />

          <div className="flex flex-row justify-around w-full">
            <div className="text-bamboo-100 py-2 flex flex-col justify-center items-center">
              <p className="text-xl">Top</p>
              <p className="text-2xl py-2">{sampleData.rank}</p>
            </div>

            <div className="text-bamboo-100 py-2 flex flex-col justify-center items-center">
              <p className="text-xl">Thắng</p>
              <p className="text-2xl py-2">{sampleData.win}</p>
            </div>
          </div>
        </div>
      </div>
      <Button text="Tham gia" buttonVariants="btn-secondary" />
    </div>
  )
}

export default SelfInfo
