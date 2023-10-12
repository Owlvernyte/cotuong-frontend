
import Header from "@/components/layouts/Header";
import React from "react";
import LeaderBoard from "./LeaderBoard";
import Schedule from "./Schedule";
import Banner from "./Banner";


export default function OnCard() {
  return (
    <>
     
          <div className="bg-bamboo-400 rounded shadow mb-6 pl-4">
           <div className="text-3xl pb-8 pt-4 pl-4">
            Giai dau dang dien ra
            </div>
            <div className=" flex flex-row pb-6">
            <Banner />
            <LeaderBoard />
            </div>
            
          
      </div>
    </>
  );
}