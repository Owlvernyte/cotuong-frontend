'use client'

import Image from 'next/image'
import React from 'react'

function Match({ params }: { params: { id: string } }) {
    return (
        <div className="h-full flex flex-col justify-center items-center">
            <h1 className="text-5xl py-8">{'CHI TIẾT LỊCH SỬ ĐẤU'}</h1>
            <div className="flex-1 w-full h-full grid grid-cols-5 grid-rows-3 gap-4 py-2 text-bamboo-100">
                <div className="bg-bamboo-400 col-span-3 row-span-1 rounded-md p-4 flex flex-col">
                    <div className="w-full flex justify-between items-center">
                        <h2 className={'text-2xl'}>{'Kết Quả'}</h2>
                        <span>{'14/09/2023'}</span>
                    </div>
                    <div className="py-2">
                        <span>{'Tổng thời gian: 0 phút'}</span>
                    </div>
                    <div className="w-full flex justify-between items-center flex-1 h-full">
                        <Player />

                        <div>VS</div>

                        <Player start={false} />
                    </div>
                </div>
                <div className="bg-bamboo-400 col-span-3 row-span-2 rounded-md p-4">
                    <span>Coming soon</span>
                </div>
                <div className="bg-dirt-400 col-start-4 col-end-6 row-start-1 row-span-3 rounded-md p-4">
                    <span>Coming soon</span>
                </div>
            </div>
        </div>
    )
}

export default Match

function Player({ start = true }: { start?: boolean }) {
    const containerCn =
        'flex-1 flex items-center ' + start ? 'justify-start' : 'justify-end'

    return (
        <div className={containerCn}>
            <div className="flex justify-between items-center space-x-4">
                <div className="avatar">
                    <div className="w-24 rounded-full">
                        <Image
                            src="/assets/avatars/avatar1.png"
                            style={{
                                width: 'auto',
                                height: 'auto',
                            }}
                            width={86}
                            height={86}
                            alt="Avatar Player 1"
                        />
                    </div>
                </div>
                <span className="text-3xl">Player 1</span>
            </div>
        </div>
    )
}
