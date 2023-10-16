import Image from 'next/image'
import React from 'react'
import MenuBoxTitle, { MenuBoxTitleProps } from './MenuBoxTitle'
import Link from 'next/link'

export type MenuBoxProps = {} & MenuBoxTitleProps

function MenuBox({ roomCode, viewCount }: MenuBoxProps) {
    return (
        <div
            id="menu"
            className="h-full bg-primary w-full rounded-md shadow-lg p-2 flex flex-col items-center overflow-y-auto"
        >
            {/* Hard Code */}
            <MenuBoxTitle roomCode={roomCode} viewCount={viewCount} />

            <div className="w-full h-[1px] border-1 bg-bamboo-100 solid"></div>

            <div className="text-center text-md md:text-4xl text-bamboo-100 my-4">
                00:00:00 trôi qua
            </div>

            <div className="flex flex-col space-y-2 items-center xl:space-y-0 xl:flex-row xl:space-x-2 my-1">
                <button className="btn btn-secondary btn-md w-48 text-lg">
                    Tạm Dừng
                </button>
                <button className="btn btn-secondary btn-md w-48 text-lg">
                    Cầu Hoà
                </button>
            </div>

            <div className="flex flex-col space-y-2 items-center xl:space-y-0 xl:flex-row xl:space-x-2 my-1">
                <Link
                    href={'/rooms'}
                    className="btn btn-secondary btn-md w-48 text-lg"
                >
                    Rời Phòng
                </Link>
                <button
                    className="btn btn-secondary btn-md w-48 text-lg"
                    // onClick={startBtnHandler}
                >
                    Bắt Đầu
                </button>
            </div>
        </div>
    )
}

export default MenuBox
