import React from "react"
import MatchesTable from "@/components/matches/MatchesTable"

function Matches() {
  return (
    <div className="flex justify-center">
      <div className="container max-w-screen-2xl px-10 py-4">
        <div id="matches">
          <h1 className="text-6xl text-center py-8">LỊCH SỬ ĐẤU</h1>
          <MatchesTable />
        </div>
      </div>
    </div>
  )
}

export default Matches
