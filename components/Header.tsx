import Link from 'next/link'
import React from 'react'

function Header() {
    return (
        <div className="bg-primary min-h-[50px] h-fit p-2 flex justify-between items-center w-full">
            <div className="px-2 inline-flex items-center space-x-6">
                <div>
                    <img src="/thitnuong.svg" alt="thitnuong"></img>
                </div>
                <Link className="text-bamboo-100 hover:underline" href={'/'}>
                    {'Liên hệ'}
                </Link>
                <Link className="text-bamboo-100 hover:underline" href={'/'}>
                    {'Phòng'}
                </Link>
                <Link className="text-bamboo-100 hover:underline" href={'/'}>
                    {'Giải đấu'}
                </Link>
            </div>
            <div className="inline-flex items-center space-x-2">
                <button className="btn btn-secondary px-12">
                    {'Đăng nhập'}
                </button>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost rounded-btn">
                        <img src="/icons/Setting_fill.svg"></img>
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
