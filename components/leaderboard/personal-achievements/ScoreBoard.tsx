import React from "react";
import Image from "next/image";
import StatCard from "./StatCard";

const getRandomValue = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const ScoreBoard: React.FC = () => {
  const win = getRandomValue(0, 100);
  const loss = getRandomValue(0, 100);
  const draw = getRandomValue(0, 100);
  const score = getRandomValue(0, 100);

  return (
    <div className="md:container bg-bamboo-400 rounded-b-md md:rounded-br-md text-bamboo-100 flex flex-col justify-between items-center md:flex-row py-2 px-20">
      <StatCard label="Thắng" value={win} />
      <StatCard label="Thua" value={loss} />
      <StatCard label="Hoà" value={draw} />

      <div className="flex flex-row md:flex-col items-center">
        <div className="w-14 md:w-auto">
          <Image
            src="/assets/diemthitnuong.svg"
            alt="Score"
            width={120}
            height={120}
            style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="text-3xl px-2 md:text-2xl md:py-4">{score}</div>
      </div>
    </div>
  );
};

export default ScoreBoard;
