import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import PlayerData from './PlayerData'

interface PlayerData {
    username: string
    avatarSrc: string
    flagSrc: string
    rank: number
    win: number
    loss: number
    draw: number
}

// Note: Sử dụng data mẫu tạm thời
const sampleData: PlayerData = {
    username: 'User1',
    avatarSrc: '/avatars/avatar1.png',
    flagSrc: '/flags/VN.svg',
    rank: 1,
    win: 120,
    loss: 42,
    draw: 2,
}

interface SelfInfoProps {
    data: PlayerData
}
const SelfInfo: React.FC = () => {
    return (
        <div className="flex flex-col justify-center w-full h-full space-y-2">
            <div className="flex flex-col p-4 bg-dirt-300 w-full h-full  rounded-md justify-between">
                {/* Note: Còn hard code phần avatar & flag */}
                <div className="text-lg items-center text-bamboo-100">
                    Vi tri cua ban hien tai:
                </div>
                <PlayerData
                    username={sampleData.username}
                    avatarSrc={sampleData.avatarSrc}
                    rank={sampleData.rank}
                    win={sampleData.win}
                />
            </div>
            <Button text="Tham gia" buttonVariants='btn-secondary'/>
        </div>
    )
}

export default SelfInfo
