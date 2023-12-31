import ExtraInformation from "@/components/leaderboard/extra-information/ExtraInformation"
import Title from "@/components/ui/Title"
import PersonalAchievement from "@/components/leaderboard/personal-achievements/PersonalAchievements"
import LeaderBoardTable from "@/components/leaderboard/leaderboard-table/LeaderBoardTable"

export default function LeaderBoard() {
  return (
    <div className="flex justify-center">
      <div className="container max-w-screen-2xl px-10 py-4">
        <div id="leaderBoard">
          <Title text="BẢNG XẾP HẠNG" textAlign="text-left" />
          <ExtraInformation />
          <PersonalAchievement />
          <LeaderBoardTable />
        </div>
      </div>
    </div>
  )
}
