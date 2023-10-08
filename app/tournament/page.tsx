"use client";
import Header from "@/components/Header";
import React from "react";

export default function Home() {
  return (
    <>
      <Header />
      <div className="w-full h-[900px] justify-center items-center flex flex-col">
        <div className="w-10/12 h-80 bg-bamboo-400 rounded shadow mb-6">
          <div className="w-full h-1/5 justify-between items-center flex">
            <h1 className=" text-dirt-100 text-lg font-normal ">
              GIẢI ĐẤU ĐANG DIỄN RA
            </h1>
            <p className=" text-dirt-100 text-xs font-normal">
              Còn lại: 3 giờ 2 phút 5 giây
            </p>
          </div>
          <div className="w-full h-4/5 flex justify-between items-center">
            <div className="flex items-center justify-center w-[200px] h-[220px] bg-dirt-300 rounded shadow mx-[15px] ">
              <img
                className="w-40 h-40"
                src="/icons/Cup.svg"
                alt="nyte"
              />
            </div>

            <div className="h-[220px] bg-bamboo-300 text-dirt-100 rounded shadow basis-3/5 flex justify-center">
              <table className="w-full h-full">
                <thead>
                  <th>Top</th>
                  <th>UserName</th>
                  <th>Win</th>
                </thead>

                <tbody>
                  <tr className="text-center">
                    <td>1</td>
                    <td>Player 1</td>
                    <td>6</td>
                  </tr>
                  <tr className="text-center">
                    <td>2</td>
                    <td>Player 2</td>
                    <td>11</td>
                  </tr>
                  <tr className="text-center">
                    <td>3</td>
                    <td>Player 3</td>
                    <td>5</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-col h-[220px] justify-between items-center">
              <div className="w-64 h-40 bg-dirt-300 rounded shadow mx-[15px]"></div>
              <button className="btn btn-wide">Tham Gia</button>
            </div>
          </div>
        </div>
        <div className="w-10/12 h-[500px] bg-bamboo-400 rounded shadow "></div>
      </div>
    </>
  );
}
