import React from "react";
import Image from "next/image";
import PlayerInformation from "@/components/player/PlayerInformation";

// Note: Sử dụng data mẫu tạm thời
const sampleData = [
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

const LeaderBoardTable: React.FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="table bg-bamboo-300 text-bamboo-100 text-lg rounded-md">
        <thead className="text-bamboo-100 text-lg">
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th>Thắng / Thua / Hoà</th>
            <th>
              <div className="w-12">
                <Image
                  src="/diemthitnuong.svg"
                  alt="Score"
                  width={120}
                  height={120}
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

const LeaderBoardRow: React.FC<{
  data: {
    username: string;
    avatarSrc: string;
    flagSrc: string;
    win: number;
    loss: number;
    draw: number;
    score: number;
  };
  rank: number;
}> = ({ data, rank }) => {
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
        <Image src={data.flagSrc} alt="Flag" width={40} height={40} />
      </td>
      <td>
        {data.win} / {data.loss} / {data.draw}
      </td>
      <td>{data.score}</td>
    </tr>
  );
};

export default LeaderBoardTable;
