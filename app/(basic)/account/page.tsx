"use client";

import React from "react";

export default function Account() {
  return (
    <div className="flex items-center justify-center h-full ">
      <div
        id="profile-card"
        className=" bg-primary rounded-md shadow-lg w-11/12 sm:w-5/6 md:w-3/4 lg:w-2/3 xl:w-1/2  h-full "
      >
        <div className="flex flex-row justify-center items-center p-2 text-center space-x-2">
          <h1 className="text-bamboo-100 text-5xl md:text-5xl pt-14 drop-shadow-lg">
            TÀI KHOẢN CỦA BẠN
          </h1>
        </div>
        <div className="p-2 flex flex-col w-11/12 ">
          <div className="text-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-normal pt-8 pl-24 ">
            Tên Người Dùng
          </div>
          <div className="p-2 items-center inline-flex flex-row pl-24 pt-7 gap-8 w-full ">
            <div className="input input-bordered input-lg w-full bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-xl pt-4 ">
              Owlvernyte
            </div>
            <button
              className="btn btn-lg bg-bamboo-200"
              onClick={() => (window as any).my_modal_1.showModal()}
            >
              <img
                className="drop-shadow-lg"
                src="/thitnuong.svg"
                alt="icon_quan_co"
              />
            </button>
            <dialog id="my_modal_1" className="modal">
              <form
                method="dialog"
                className="modal-box w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-2/6 bg-bamboo-400"
              >
                <button className="btn btn-xs btn-circle absolute right-2 top-2 bg-bamboo-100">
                  ✕
                </button>
                <h3 className="text-3xl text-bamboo-100 pt-4 pb-6">
                  Thay Đổi Tên Tài Khoản!
                </h3>
                <div className="px-4 input-xs">
                  <input
                    type="text"
                    name="n_name"
                    placeholder="Nhập tên tài khoản"
                    className="input input-bordered input-lg w-full bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-lg mb-4"
                  />
                  <input
                    type="text"
                    name="ac_password"
                    placeholder="Nhập mật khẩu"
                    className="input input-bordered input-lg w-full bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-lg"
                  />
                  <div className="modal-action absolute bottom-4 right-4">
                    <input
                      type="submit"
                      value="Submit"
                      className="btn bg-bamboo-100"
                    />
                  </div>
                </div>
              </form>
            </dialog>
          </div>
        </div>
        <div className="p-2 flex flex-col w-11/12">
          <div className="text-bamboo-100 text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-normal pl-24">
            Email
          </div>
          <div className="p-2 items-center inline-flex flex-row pl-24 pt-7 gap-8 w-full">
            <div className="input input-bordered input-lg w-full bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 pt-4">
              Owlvernyte@gmail.com
            </div>
            <button
              className="btn btn-lg bg-bamboo-200"
              onClick={() => (window as any).my_modal_2.showModal()}
            >
              <img
                className="drop-shadow-lg"
                src="/thitnuong.svg"
                alt="icon_quan_co"
              />
            </button>
            <dialog id="my_modal_2" className="modal">
              <form
                method="dialog"
                className="modal-box w-full sm:w-3/4 md:w-2/3 lg:w-1/2 h-2/6 bg-bamboo-400"
              >
                <button className="btn btn-xs btn-circle absolute right-2 top-2 bg-bamboo-100">
                  ✕
                </button>
                <h3 className="text-3xl text-bamboo-100 pt-4 pb-6">
                  Thay Đổi Email!
                </h3>
                <div className="px-4 input-xs">
                  <input
                    type="text"
                    name="n_mail"
                    placeholder="Email mới"
                    className="input input-bordered input-lg w-full bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-xl mb-4"
                  />
                  <input
                    type="text"
                    name="mc_password"
                    placeholder="Nhập mật khẩu"
                    className="input input-bordered input-lg w-full bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-xl"
                  />
                  <div className="modal-action absolute bottom-4 right-4">
                    <input
                      type="submit"
                      value="Submit"
                      className="btn bg-bamboo-100"
                    />
                  </div>
                </div>
              </form>
            </dialog>
          </div>
        </div>

        <div className="p-2 flex flex-col w-11/12 ">
          <div className="text-bamboo-100  text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-normal pl-24 pt-4 ">
            Mật Khẩu
          </div>
          <div className="p-2 items-center inline-flex flex-col  pl-24 pt-7 gap-8 w-full ">
            <input
              type="text"
              name="password"
              placeholder="Mật khẩu hiện tại"
              className="input input-bordered input-lg w-full bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-xl"
            />
            <input
              type="text"
              name="n_password"
              placeholder="Mật khẩu mới"
              className="input input-bordered input-lg w-full bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-xl"
            />
            <input
              type="text"
              name="rn_password"
              placeholder="Xác nhận mật khẩu mới"
              className="input input-bordered input-lg w-full bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-xl"
            />
            <button className="btn input-lg w-full bg-bamboo-100">
              Cập Nhật Mật Khẩu{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
