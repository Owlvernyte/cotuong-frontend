import PlayerInformation from '@/components/player/PlayerInformation'
import React from 'react'

export type PlayerAreaProps = {
    playerIndex: number
    userName?: string
    avatarSrc?: string
    flagSrc?: string
    label?: string
}

function PlayerArea({
    playerIndex,
    userName,
    avatarSrc,
    flagSrc,
    label,
}: PlayerAreaProps) {
    return (
        <div className="bg-primary w-full h-full rounded-md shadow-lg p-2 flex flex-col items-center overflow-y-auto">
            <div id={`player${playerIndex}`} className="self-start pl-4 py-2">
                <PlayerInformation
                    username={userName ?? `Waiting for player`}
                    avatarSrc={avatarSrc ?? '/assets/avatars/avatar1.png'}
                    avatarSize={50}
                    imageWidth={70}
                    imageHeight={70}
                    hasFlag
                    flagSrc={flagSrc ?? '/assets/flags/VN.svg'}
                    hasScore
                    scoreValue={0}
                />
            </div>

            <div className="w-full h-[1px] border-1 bg-bamboo-100 solid"></div>

            <div
                id={`player${playerIndex}-captured-pieces`}
                className="h-full"
            ></div>

            <div
                id={`countdown_steps_player${playerIndex}`}
                className="card rounded-md w-52 bg-bamboo-300 shadow-lg"
            >
                <div className="p-4">
                    <p className="text-center text-xl text-bamboo-100">
                        {label ?? 'CÒN LẠI - 00:00'}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PlayerArea
