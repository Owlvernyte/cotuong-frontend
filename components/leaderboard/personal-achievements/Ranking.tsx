import React from "react";
import Image from "next/image";

interface RankingProps {
  medalSrc?: string;
  top: number;
}

const medalImages = [
  "/assets/medals/top1.svg",
  "/assets/medals/top2.svg",
  "/assets/medals/top3.svg",
];

const Ranking: React.FC<RankingProps> = ({
  medalSrc: customMedalSrc = "/assets/medals/normal_top.svg",
  top,
}) => {
  const medalSrc = top <= 3 ? medalImages[top - 1] : customMedalSrc;
  return (
    <div className="bg-bamboo-300 md:rounded-bl-md text-center p-4 md:px-20 md:py-10">
      <div className="flex flex-col items-center">
        <Image src={medalSrc} alt="Medal" width={120} height={120} style={{ width: "auto", height: "auto" }} />
        <div className="text-bamboo-100 text-3xl">{top}</div>
      </div>
    </div>
  );
};

export default Ranking;
