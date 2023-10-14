import Header from "@/components/layouts/Header";
import React from "react";
import LeaderBoard from "./LeaderBoard";
import Schedule from "./Schedule";
import Banner from "./Banner";
import SelfInfo from "./SeftInfo";
import Countdown from "./CountdownS";

export default function OnCard() {
  return (
    <>
      <div className="bg-bamboo-400 rounded shadow mb-6 pl-4 w-full">
        <div className="flex flex-row justify-between text-3xl pb-8 pt-4 pl-4">
          <div className="">Giai dau dang dien ra</div>
          <Countdown />
        </div>
        <div className=" flex flex-row pb-6">
          <Banner />
          <LeaderBoard />
          <SelfInfo />
        </div>
      </div>
    </>
  );
}
