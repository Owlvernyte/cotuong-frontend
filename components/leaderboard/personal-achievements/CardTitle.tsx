import React from "react";
import Image from "next/image";
import Link from "next/link";
import PlayerInformation from "../../player/PlayerInformation";

interface PlayerData {
  username: string;
  avatarSrc: string;
  flagSrc: string;
}

// Note: Sử dụng data mẫu tạm thời
const sampleData: PlayerData = {
  username: "User1",
  avatarSrc: "/avatars/avatar1.png",
  flagSrc: "/flags/VN.svg",
};

const CardTitle: React.FC = () => {
  return (
    <div className="flex flex-col justify-between items-center md:flex-row px-6 py-4">
      {/* Note: Còn hard code phần avatar & flag */}
      <PlayerInformation
        username={sampleData.username}
        avatarSrc={sampleData.avatarSrc}
        hasFlag
        flagSrc={sampleData.flagSrc}
      />

      {/* Note: Link cotuong.nyte.tk chưa có */}
      <div className="flex items-center space-x-1">
        <Link href={"/cotuong.nyte.tk"} className="text-bamboo-100 opacity-70">
          cotuong.nyte.tk
        </Link>
        <Image src="/thitnuong.svg" alt="Logo" width={50} height={50} />
      </div>
    </div>
  );
};

export default CardTitle;
