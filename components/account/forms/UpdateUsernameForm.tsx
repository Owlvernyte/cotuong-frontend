"use client"

import React from "react"

const UpdateUsernameForm: React.FC = () => {
  return (
    <div className="p-2 flex flex-col">
      <div className="text-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-left text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-normal pt-8">
        Tên Người Dùng
      </div>
      <div className="p-2 items-center inline-flex flex-row pt-7 gap-8 w-full ">
        <div className="input input-bordered input-lg w-full bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-xl pt-4">
          Owlvernyte
        </div>
        <button
          className="btn btn-lg btn-secondary"
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
                className="input input-bordered input-md w-full bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-lg mb-4"
              />
              <input
                type="text"
                name="ac_password"
                placeholder="Nhập mật khẩu"
                className="input input-bordered input-md w-full bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-lg"
              />
              <div className="modal-action">
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
  )
}

export default UpdateUsernameForm
