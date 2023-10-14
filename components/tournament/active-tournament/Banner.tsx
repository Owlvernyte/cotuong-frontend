import Header from "@/components/layouts/Header";
import React from "react";
import LeaderBoard from "./LeaderBoard";
import Schedule from "./Schedule";
import Image from "next/image";

export default function Banner() {
  return (
    <>
      <div className="flex justify-left items-center w-1/5">
        <div className="flex flex-col items-center justify-center bg-dirt-300 rounded shadow mx-[15px] h-full w-full ">
          <div className="text-center text-lg font-bold mb-2">Women's Day</div>
          <img className="w-40 h-40" src="/icons/Cup.svg" alt="nyte" />
          <Schedule />
        </div>
      </div>
    </>
  );
}
