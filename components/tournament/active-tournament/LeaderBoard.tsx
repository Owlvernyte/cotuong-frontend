import React from "react"
import PlayerInformation from "@/components/player/PlayerInformation"

interface PlayerData {
  username: string
  avatarSrc: string
  flagSrc: string
  win: number
}

// Note: Sử dụng data mẫu tạm thời
const sampleData: PlayerData[] = [
  {
    username: "User1",
    avatarSrc: "/assets/avatars/avatar1.png",
    flagSrc: "/assets/flags/VN.svg",
    win: 120,
  },
  {
    username: "User2",
    avatarSrc: "/assets/avatars/avatar2.png",
    flagSrc: "/assets/flags/US.svg",
    win: 365,
  },
  {
    username: "User3",
    avatarSrc: "/assets/avatars/avatar3.png",
    flagSrc: "/assets/flags/CA.svg",
    win: 664,
  },
]

sampleData.sort((a, b) => b.win - a.win)

const LeaderBoard: React.FC = () => {
  return (
    <div className="flex justify-center items-center ">
      <table className="table bg-bamboo-300 text-bamboo-100 rounded-md text-xl">
        <thead className="text-bamboo-100 text-xl">
          <tr>
            <th>Top</th>
            <th></th>
            <th>Thắng</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((data, index) => (
            <LeaderBoardRow key={index} data={data} rank={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

interface LeaderBoardRowProps {
  data: PlayerData
  rank: number
}

const LeaderBoardRow: React.FC<LeaderBoardRowProps> = ({ data, rank }) => {
  return (
    <tr>
      <td>#{rank}</td>
      <td>
        <PlayerInformation
          username={data.username}
          avatarSrc={data.avatarSrc}
          hasFlag
          flagSrc={data.flagSrc}
        />
      </td>
      <td>{data.win}</td>
    </tr>
  )
}

export default LeaderBoard
