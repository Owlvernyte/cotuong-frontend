import React from "react";
import MatchesTable from "@/components/matches/MatchesTable";
function Matches() {
  return (
    <div className="flex flex-col h-full justify-center items-center w-full py-4">
      <h1 className="text-5xl py-8">Lịch Sử Đấu</h1>
      <MatchesTable />
    </div>
  );
}

export default Matches;
