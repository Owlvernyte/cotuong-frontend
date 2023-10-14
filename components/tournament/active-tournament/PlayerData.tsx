import React from "react";
import Image from "next/image";

interface PlayerDataProps {
  username: string;
  textColor?: string;
  textSize?: string;
  avatarSrc: string;
  avatarSize?: number;
  imageWidth?: number;
  imageHeight?: number;
  rank?: number;
  win?: number;

}

const PlayerData: React.FC<PlayerDataProps> = ({
  username,
  textColor = "text-bamboo-100",
  textSize = "text-2xl",
  avatarSrc,
  avatarSize = 12,
  imageWidth = 100,
  imageHeight = 100,
   rank,
  win
}) => {
  return (
    <div className="space-x-3 items-center  ">
      <div className="flex flex-col md:flex-row">
        
      <div className="avatar">
        <div className={`w-${avatarSize} rounded-full`}>
          <Image
            src={avatarSrc}
            alt="Avatar"
            width={imageWidth}
            height={imageHeight}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
      </div>
      <div className={`${textColor} ${textSize} py-2 pl-2`}>{username}</div>
      
      </div>
      <div className="flex flex-row">
      <div className={`${textColor} ${textSize} py-2 pr-24 flex flex-col items-center`}>
        <div>Top</div> 
      {rank}</div>
      <div className={`${textColor} ${textSize} py-2 flex flex-col items-center`}>
        <div>Win</div> 
      {win}</div>
      </div>
      {/* Dự kiến: Thêm phần điểm + trạng thái hoạt động */}
    </div>
  );
};

export default PlayerData;
