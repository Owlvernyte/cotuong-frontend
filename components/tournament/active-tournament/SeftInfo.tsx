import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import PlayerData from "./PlayerData";

interface PlayerData {
  username: string;
  avatarSrc: string;
  flagSrc: string;
  rank: number;
  win: number;
  loss: number;
  draw: number;
 
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
};

interface SelfInfoProps {
  data: PlayerData;
}
const SelfInfo: React.FC = () => {
  return (
    <div className="flex flex-col justify-center w-2/6 pl-4 pr-7 h-full">
    <div className="flex flex-col pl-4 bg-dirt-300 w-full h-full">
      {/* Note: Còn hard code phần avatar & flag */}
      <div className="pt-8 pb-4 text-lg items-center text-bamboo-100">Vi tri cua ban hien tai:</div>
      <PlayerData
            username={sampleData.username}
            avatarSrc={sampleData.avatarSrc}
            rank={sampleData.rank}
            win={sampleData.win}
          />
    
    </div>
  
    <div className=" btn-primary flex flex-col justify-between items-center text-xl bg-bamboo-100 text-dirt-300 w-full py-4 mt-4">
      Tham Gia
    </div>
    </div>
  );
};

export default SelfInfo;
