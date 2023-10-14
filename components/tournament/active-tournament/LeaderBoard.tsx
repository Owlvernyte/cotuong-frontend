import React from "react";
import Image from "next/image";
import PlayerInformation from "@/components/player/PlayerInformation";


interface PlayerData {
  username: string;
  avatarSrc: string;
  flagSrc: string;
  win: number;
  loss: number;
  draw: number;
  score: number;
}

// Note: Sử dụng data mẫu tạm thời
const sampleData: PlayerData[] = [
  {
    username: "User1",
    avatarSrc: "/avatars/avatar1.png",
    flagSrc: "/flags/VN.svg",
    win: 120,
    loss: 42,
    draw: 2,
    score: 9999,
  },
  {
    username: "User2",
    avatarSrc: "/avatars/avatar2.png",
    flagSrc: "/flags/US.svg",
    win: 365,
    loss: 45,
    draw: 6,
    score: 3333,
  },
  {
    username: "User3",
    avatarSrc: "/avatars/avatar3.png",
    flagSrc: "/flags/CA.svg",
    win: 664,
    loss: 432,
    draw: 26,
    score: 22,
  },
];

sampleData.sort((a, b) => b.score - a.score);

const LeaderBoard: React.FC = () => {
  return (
    <div className="flex justify-center items-center ">
        
      <table className="table bg-bamboo-300 text-bamboo-100 rounded-md text-xl w-3/6 ">
        <thead className="text-bamboo-100 text-xl">
          <tr>
            <th>Top</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>         
            <th></th>
            <th></th>
            <th></th>
            <th>Thắng</th>
            <th>
              <div className="w-12">
                <Image
                  src="/diemthitnuong.svg"
                  alt="Score"
                  width={120}
                  height={120}
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </th>
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
      <td></td>
      <td></td>
      <td></td>     
      <td></td>
      <td></td> 
      <td></td> 
      <td>
        {data.win} 
      </td>
      <td>{data.score}</td>
    </tr>
  );
};

export default LeaderBoard;
