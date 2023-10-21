import Image from 'next/image'
import React from 'react'

type MatchPlayerProps = {
    start?: boolean
    avatarSrc?: string
    displayName?: string
    flagSrc?: string
    userId?: string
}

function MatchPlayer({
    userId = 'Unknown',
    start = true,
    avatarSrc = '/assets/avatars/avatar1.png',
    displayName = 'Unknown',
    flagSrc = '/assets/flags/VN.svg',
}: MatchPlayerProps) {
    const containerCn =
        'flex-1 flex items-center ' + start ? 'justify-start' : 'justify-end'

    return (
        <div className={containerCn} title={userId}>
            <div className="px-4 flex justify-between items-center space-x-8">
                <div className="avatar">
                    <div className="w-20 rounded-full shadow-lg">
                        <Image
                            src={avatarSrc}
                            width={100}
                            height={100}
                            alt={`Avatar ${displayName}`}
                            style={{ width: 'auto', height: 'auto' }}
                        />
                    </div>
                </div>
                <span className="text-3xl">{displayName}</span>
                <div className="w-16 shadow-lg">
                    <Image
                        src={flagSrc}
                        alt="Flag"
                        width={100}
                        height={100}
                        style={{ width: 'auto', height: 'auto' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default MatchPlayer
