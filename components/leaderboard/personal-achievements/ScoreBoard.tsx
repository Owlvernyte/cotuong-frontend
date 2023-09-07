import React from "react";
import Image from "next/image";
import StatCard from "./StatCard";

const ScoreBoard: React.FC = () => {
  return (
    <div className="md:container bg-bamboo-400 rounded-b-md md:rounded-br-md text-bamboo-100 flex flex-col justify-between items-center md:flex-row py-2 px-20">
      {/* Note: Còn hard code số trận thắng, thua, hoà, điểm - để random số */}
      <StatCard
        label="Thắng"
        value={Math.floor(Math.random() * (100 - 0 + 1)) + 0}
      />

      <StatCard
        label="Thua"
        value={Math.floor(Math.random() * (100 - 0 + 1)) + 0}
      />

      <StatCard
        label="Hoà"
        value={Math.floor(Math.random() * (100 - 0 + 1)) + 0}
      />

      <div className="flex flex-row md:flex-col items-center">
        <div className="w-14 md:w-auto">
          <Image
            src="/diemthitnuong.svg"
            alt="Score"
            width={120}
            height={120}
          />
        </div>
        <div className="text-3xl px-2 md:text-2xl md:py-4">
          {Math.floor(Math.random() * (100 - 0 + 1)) + 0}
        </div>
      </div>
    </div>
  );
};

export default ScoreBoard;
