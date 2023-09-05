"use client";
import { useStore } from "@/lib/zustand/store";
import Image from "next/image";
// import QuanCoIcon from '@/public/h1_quanco.svg'

export default function Home() {
  return (
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
        <div className="w-full h-[250px] flex justify-around justify-center">
          <div className="w-[200px]  h-[220px] bg-dirt-300 rounded shadow"></div>

          <div className="w-96 h-44 bg-neutral-500 rounded shadow"></div>

          <div className="w-64 h-32 bg-yellow-800 rounded shadow"></div>
        </div>
      </div>
      <div className="w-[1400px] h-[500px] bg-bamboo-400 rounded shadow"></div>
    </div>
  );
}
