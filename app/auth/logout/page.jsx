"use client";
import Header from "@/components/Header";
import React from "react";

export default function Logout() {
  return (
    <>
      <Header />
      <div className="w-full h-[900px] flex justify-center items-center">
        <div className="w-[1600px] h-[850px] bg-bamboo-200 rounded-[5px] shadow-xl flex">
          <div className="w-[100px] h-full flex flex-col justify-between">
            <div className="w-[51px] h-[51px] ">
              <img className="w-[51px] h-[51px]" src="/nyte2.svg" alt="nyte" />
            </div>
            <div className="w-[100px] h-[30px] text-center text-orange-200 text-xs font-normal p-[30px]">
              cotuong.nyte.tk
            </div>
          </div>
          <div className="w-[700px] h-full flex flex-col items-center justify-center">
            <p className="w-[425px] h-[200px] text-yellow-900 text-6xl font-normal ">
              Hãy tiếp tục <br />
              ăn thịt nướng <br />
              cùng cờ tướng
            </p>
            <p className="w-[425px] h-[100px] text-neutral-500 text-2xl font-normal self-center ">
              Giải đấu đang chờ bạn
            </p>
          </div>
          <div className="w-[2px] h-full rotate-180 origin-center border-1 bg-[#3c6255] solid"></div>
          <div className="w-[800px] h-full relative flex  items-center flex-col box-border justify-between">
            <h1 className="text-center text-yellow-900 text-5xl font-normal inline-block pt-24 pb-14">
              CHÀO MỪNG BẠN TRỞ LẠI!
            </h1>
            <div className="flex flex-col justify-start w-[500px] grow">
              <div className="pb-6 flex justify-start w-full ">
                <img
                  className="w-[51px] h-[51px]"
                  src="/icons/User_cicrle_duotone.svg"
                  alt="nyte"
                />
                <input
                  type="text"
                  placeholder="Tên Người Dùng"
                  className="h-[51px] grow input input-bordered border-solid border-2 border-bamboo-500"
                />
              </div>
              <div className="pb-6 flex justify-center">
                <img
                  className="w-[51px] h-[51px]"
                  src="/icons/Pass_word.svg"
                  alt="nyte"
                />
                <input
                  type="text"
                  placeholder="Mật Khẩu"
                  className="h-[51px] grow input input-bordered w-full  border-solid border-2 border-bamboo-500 "
                />
              </div>
              <div className="w-[500px] flex justify-between pb-[12px] pl-[50px]">
                <p className="flex w-[80px]">
                  <img
                    className="w-[14px] h-[16px] self-center"
                    src="/icons/check.svg"
                    alt="nyte"
                  />
                  Nhớ tôi
                </p>
                <p>Quên mật khẩu?</p>
              </div>
              <div className="pb-6 mx-auto w-[500px]">
                <button className="btn btn-active btn-accent w-full">
                  Tiếp Tục
                </button>
              </div>
              <div className="w-[500px]">
                <p className="text-center py-3.5 underline underline-offset-4 block">
                  Bạn có muốn đăng nhập không ?
                </p>
                <div className="flex items-center">
                  <div className="w-[225px] h-[1px] rotate-180 origin-center border-1 bg-[#3c6255] solid"></div>
                  <p className="w-[50px] text-center py-3.5 text-bamboo-300 inline-block">
                    Hoặc
                  </p>
                  <div className="w-[225px] h-[1px] rotate-180 origin-center border-1 bg-[#3c6255] solid"></div>
                </div>
              </div>

              <div className="h-[100px] w-[500px] flex items-end justify-between">
                <button className="btn btn-active btn-accent">
                  <img
                    className="w-[48px] h-[40px] pr-3"
                    src="/google.svg"
                    alt="nyte"
                  />
                  Tiếp tục với Google
                </button>

                <button className="btn btn-active btn-accent border-solid border-2 border-bamboo-500 inline-block">
                  <img
                    className="w-[48px] h-[40px] inline-block pr-3"
                    src="/discord.svg"
                    alt="nyte"
                  />
                  Tiếp tục với Discord
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
