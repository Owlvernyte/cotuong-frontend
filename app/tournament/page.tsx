"use client";
import Header from "@/components/Header";
import React from "react";

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full h-[900px] justify-center items-center flex flex-col">
        <div className="w-[1400px] h-[300px] bg-bamboo-400 rounded shadow mb-6">
          <div className="w-full h-[50px] justify-between items-start inline-flex">
            <h1 className="text-center text-dirt-100 text-lg font-normal mx-[15px] my-[15px]">
              GIẢI ĐẤU ĐANG DIỄN RA
            </h1>
            <p className="text-center text-dirt-100 text-xs font-normal mx-[15px] my-[15px]">
              Còn lại: 3 giờ 2 phút 5 giây
            </p>
          </div>
          <div className="w-full h-[250px] flex justify-between items-center">
            <div className="flex items-center justify-center w-[200px]  h-[220px] bg-dirt-300 rounded shadow mx-[15px] my-[15px]">
              <img
                className="w-[150px] h-[150px]"
                src="/icons/Cup.svg"
                alt="nyte"
              />
            </div>

            <div className="grid grid-cols-3 grid-rows-3 justify-items-center w-96 h-[220px] bg-bamboo-300 text-dirt-100 rounded shadow basis-3/5">
              <h3>Top</h3>
              <h3>UserName</h3>
              <h3>Win</h3>
              <h3>1</h3>
              <h3>Player 1</h3>
              <h3>12</h3>
              <h3>2</h3>
              <h3>Player 2</h3>
              <h3>10</h3>
            </div>

            <div className="w-64 h-[220px] bg-dirt-300 rounded shadow mx-[15px] my-[15px]"></div>
          </div>
        </div>
        <div className="w-[1400px] h-[500px] bg-bamboo-400 rounded shadow "></div>
      </div>
    </>
  );
}
