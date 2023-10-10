import Image from "next/image"
import Link from "next/link"
import React from "react"

function Header() {
  return (
    <div className="navbar bg-primary">
      <div className="flex-1 px-2 inline-flex items-center space-x-6">
        <Link href="/">
          <Image
            src="/thitnuong.svg"
            alt="Logo Thit Nuong"
            width={40}
            height={40}
          />
        </Link>
        <Link className="text-bamboo-100 hover:underline" href={"/"}>
          {"Liên hệ"}
        </Link>
        <Link className="text-bamboo-100 hover:underline" href={"/"}>
          {"Phòng"}
        </Link>
        <Link className="text-bamboo-100 hover:underline" href={"/"}>
          {"Giải đấu"}
        </Link>
      </div>
      <div className="flex-none space-x-2">
        <Link className="btn btn-secondary px-12" href={"/signin"}>
          {"Đăng nhập"}
        </Link>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost rounded-btn">
            <Image
              src="/icons/primary/Setting_fill.svg"
              alt="Icon Settings"
              width={25}
              height={25}
            />
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content z-[1] p-2 shadow bg-primary text-primary-content rounded-md w-52 mt-4"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
