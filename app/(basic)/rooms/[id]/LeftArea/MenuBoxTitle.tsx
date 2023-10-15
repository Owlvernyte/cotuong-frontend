import Image from 'next/image'
import React from 'react'

function MenuBoxTitle({
    roomCode,
    viewCount,
}: {
    roomCode: string
    viewCount: number
}) {
    return (
        <div className="w-full flex flex-col xl:flex-row space-y-2 justify-between items-center px-6 py-2">
            <p className="text-2xl text-bamboo-100 ">ID: {roomCode}</p>
            <div className="flex items-center text-bamboo-100 text-xl space-x-2">
                <Image
                    src="/icons/primary/Eye_fill.svg"
                    alt="Eye Icon"
                    width={30}
                    height={30}
                />
                <span>{viewCount}</span>
            </div>
        </div>
    )
}

export default MenuBoxTitle
