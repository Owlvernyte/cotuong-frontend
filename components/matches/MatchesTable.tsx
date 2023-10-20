import React from "react";
import Image from "next/image";
import PlayerInformation from "@/components/player/PlayerInformation";

interface PlayerData {
  username: string;
  avatarSrc: string;
  flagSrc: string;
  result: string;
  playTime: string;
  score: number;
}

// Note: Sử dụng data mẫu tạm thời
const sampleData: PlayerData[] = [
  {
    username: "User1",
    avatarSrc: "/assets/avatars/avatar1.png",
    flagSrc: "/assets/flags/VN.svg",
    result: "win",
    playTime: "40 phút",
    score: 9999,
  },
  {
    username: "User2",
    avatarSrc: "/assets/avatars/avatar2.png",
    flagSrc: "/assets/flags/US.svg",
    result: "win",
    playTime: "40 phút",
    score: 3333,
  },
  {
    username: "User3",
    avatarSrc: "/assets/avatars/avatar3.png",
    flagSrc: "/assets/flags/CA.svg",
    result: "win",
    playTime: "40 phút",
    score: 22,
  },
  {
    username: "User4",
    avatarSrc: "/assets/avatars/avatar3.png",
    flagSrc: "/assets/flags/CA.svg",
    result: "win",
    playTime: "40 phút",
    score: 22,
  },
  {
    username: "User5",
    avatarSrc: "/assets/avatars/avatar3.png",
    flagSrc: "/assets/flags/CA.svg",
    result: "win",
    playTime: "40 phút",
    score: 22,
  },
];

sampleData.sort((a, b) => b.score - a.score);

const LeaderBoardTable: React.FC = () => {
  return (
    <div className="overflow-x-auto w-full flex-1">
      <table className="table bg-bamboo-300 text-bamboo-100 text-lg rounded-md">
        <thead className="text-bamboo-100 text-lg">
          <tr>
            <th>SST</th>
            <th>Bạn đấu với</th>
            <th>Quốc gia</th>
            <th>Kết quả</th>
            <th>Tổng thời gian</th>
            <th>Điểm</th>
          </tr>
        </thead>
        <tbody>
          {sampleData.map((data, index) => (
            <LeaderBoardRow key={index} data={data} rank={index + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

interface LeaderBoardRowProps {
  data: PlayerData;
  rank: number;
}

const LeaderBoardRow: React.FC<LeaderBoardRowProps> = ({ data, rank }) => {
  return (
    <tr>
      <th>{rank}</th>
      <td>
        <PlayerInformation
          username={data.username}
          avatarSrc={data.avatarSrc}
        />
      </td>
      <td>
        <div className="w-12">
          <Image
            src={data.flagSrc}
            alt="Flag"
            width={40}
            height={40}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </td>
      <td>{data.result}</td>
      <td>{data.playTime}</td>
      <td>{data.score}</td>
    </tr>
  );
};

export default LeaderBoardTable;
