'use client'

import React from 'react'
import Image from 'next/image'
import PlayerInformation from '@/components/player/PlayerInformation'
import IconButton from '../ui/IconButton'
import useGetMatches from '@/features/match/useGetMatches'
import LoadingBBQ from '../ui/LoadingBBQ'
import useCheckAuthorization from '@/features/user/useCheckAuthorization'
import { MatchResult } from '@/features/match/match.types'
import Link from 'next/link'

type RowData = {
    username: string
    avatarSrc: string
    flagSrc: string
    result: string
    playTime: string
    score: number
    id: string
}

const MatchesTable: React.FC = () => {
    const { data, isLoading: isQuerying } = useGetMatches()
    const { data: user, isLoading: authorizing } = useCheckAuthorization()

    const matches: RowData[] | undefined =
        user &&
        data &&
        data.map((match) => {
            const userMatch = match.userMatches.find(
                (userM) => userM.id == user.id
            )
            const opponentUserMatch = match.userMatches.find(
                (userM) => userM.id != user.id
            )

            return {
                username: opponentUserMatch?.userName ?? 'Unknown',
                result: userMatch?.result
                    ? MatchResult[userMatch.result]
                    : 'Unknown',
                playTime: '0 phut',
                score: 0,
                id: match.id,
                avatarSrc: '/assets/avatars/avatar1.png',
                flagSrc: '/assets/flags/VN.svg',
            }
        })

    if (isQuerying || authorizing) return <LoadingBBQ />

    if (!matches || !user) return null

    return (
        <div className="w-full h-full rounded-xl bg-bamboo-400 p-8">
            <div className="overflow-x-auto w-full flex-1">
                <table className="table text-bamboo-100 text-lg">
                    <thead>
                        <tr className="text-dirt-400 text-lg bg-bamboo-200 border-none">
                            <th className="rounded-l-md text-center">SST</th>
                            <th>Bạn đấu với</th>
                            <th>Kết quả</th>
                            <th className="text-center">Tổng thời gian</th>
                            <th className="rounded-r-md text-center">Điểm</th>
                        </tr>
                    </thead>
                    <tbody>
                        {matches &&
                            matches.map((data, index) => (
                                <MatchesRow
                                    key={data.id}
                                    data={data}
                                    index={index + 1}
                                />
                            ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

interface MatchesRowProps {
    data: RowData
    index: number
}

const MatchesRow: React.FC<MatchesRowProps> = ({ data, index }) => {
    return (
        <tr className="border-none">
            <th className="text-center">{index}</th>
            <td>
                <div className="group flex space-x-2">
                    <PlayerInformation
                        username={data.username}
                        avatarSrc={data.avatarSrc}
                        hasFlag
                        flagSrc={data.flagSrc}
                    />
                    <IconButton
                        iconSrc="/assets/icons/primary/Add_Friend.svg"
                        iconAlt="add friend"
                        className="btn-neutral bg-bamboo-300 border-transparent invisible group-hover:visible"
                    />
                </div>
            </td>
            <td>
                <Link
                    href={`/matches/${data.id}`}
                    className="flex space-x-2 group items-center"
                >
                    <p className="text-xl">{data.result}</p>
                    <IconButton
                        iconSrc="/assets/icons/primary/Result.svg"
                        iconAlt="result"
                        className="btn-neutral bg-bamboo-300 border-transparent invisible group-hover:visible"
                    />
                </Link>
            </td>
            <td className="text-center">{data.playTime}</td>
            <td className="text-center">
                {data.score > 0 ? <p>+{data.score}</p> : <p>{data.score}</p>}
            </td>
        </tr>
    )
}

export default MatchesTable
