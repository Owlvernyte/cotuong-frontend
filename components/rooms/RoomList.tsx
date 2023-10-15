'use client'

import React from 'react'
import RoomCard from './RoomCard'
import useGetRooms from '@/features/room/useGetRooms'
import LoadingBBQ from '../ui/LoadingBBQ'

function RoomList() {
    const { data: rooms, isLoading, isError, refetch } = useGetRooms()

    if (isLoading) {
        return <LoadingBBQ />
    }

    if (!rooms || isError) {
        return (
            <div
                onClick={() => refetch()}
                className="hover:underline text-xl cursor-pointer"
            >
                {'Đã có lỗi xảy ra :( Click vào đây để thử lại.'}
            </div>
        )
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:md:grid-cols-5 gap-2 grid-flow-row-dense">
            {rooms.map((r) => (
                <div key={`room_${r.code}`} className="col-span-1">
                    <RoomCard
                        idRoom={r.code}
                        numberOfViewers={
                            r.countUser - 2 <= 0 ? 0 : r.countUser - 2
                        }
                        player1={
                            r.hostUser?.fullName ?? r.hostUser?.userName ?? ''
                        }
                        player2={
                            r.opponentUser?.fullName ??
                            r.opponentUser?.userName ??
                            ''
                        }
                        linkRoom={`/rooms/${r.code}`}
                    />
                </div>
            ))}
        </div>
    )
}

export default RoomList
