import Image from "next/image";

import ExtraInformation from "@/components/leaderboard/extra-information/ExtraInformation";

import Title from "@/components/ui/Title";
import PersonalAchievement from "@/components/leaderboard/personal-achievements/PersonalAchievements";
import LeaderBoardTable from "@/components/leaderboard/leaderboard-table/LeaderBoardTable";

export default function LeaderBoard() {
  return (
    <div className="flex justify-center h-screen">
      <div className="container max-w-screen-2xl p-10">
        <Title text="BẢNG XẾP HẠNG" textAlign="text-left" />
        <ExtraInformation />
        <PersonalAchievement />
        <LeaderBoardTable />

        {/* Fix (tạm thời): Phần chân content để không bị cắt bảng khi scroll */}
        <div className="p-20" />
      </div>
    </div>
  );
}
