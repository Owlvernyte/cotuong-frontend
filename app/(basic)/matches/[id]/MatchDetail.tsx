'use client'

import useGetMatchById from '@/features/match/useGetMatchById'
import React from 'react'
import MatchPlayer from './MatchPlayer'
import useCheckAuthorization from '@/features/user/useCheckAuthorization'
import { MatchResult } from '@/features/match/match.types'
import LoadingBBQ from '@/components/ui/LoadingBBQ'

function MatchDetail({ matchId }: { matchId: string }) {
    const { data: user, isLoading: authorizing } = useCheckAuthorization()
    const {
        data: match,
        isLoading: isQuerying,
        isError,
    } = useGetMatchById(matchId)
    const player1 =
        match &&
        match.userMatches.find((userMatch) => userMatch.id === user?.id)

    const player2 =
        match &&
        match.userMatches.find((userMatch) => userMatch.id !== user?.id)

    if ((!isQuerying && !match) || isError || (!authorizing && !user)) {
        return (
            <>
                <h2 className={'text-2xl'}>{'Không tìm thấy'}</h2>
            </>
        )
    }

    return (
        <>
            <div className="w-full flex justify-between items-center">
                <h2 className={'text-2xl'}>
                    {isQuerying ? 'Đang tải' : 'Kết Quả'}
                </h2>
                {match && (
                    <span>{new Date(match.matchDate).toLocaleString()}</span>
                )}
            </div>
            <div className="py-2">
                <span>{'Tổng thời gian: 0 phút'}</span>
            </div>
            <div className="w-full flex justify-between items-center flex-1 h-full overflow-x-auto">
                {isQuerying ? (
                    <LoadingBBQ />
                ) : (
                    <>
                        <MatchPlayer
                            displayName={player1?.userName}
                            userId={player1?.id}
                        />

                        <div className="bg-bamboo-200 text-dirt-300 px-12 py-4 rounded-md shadow-lg">
                            {player1 && MatchResult[player1.result]}
                        </div>

                        <MatchPlayer
                            start={false}
                            displayName={player2?.userName}
                            userId={player2?.id}
                        />
                    </>
                )}
            </div>
        </>
    )
}

export default MatchDetail
