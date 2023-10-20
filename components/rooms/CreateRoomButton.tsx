'use client'

import useCreateRoom from '@/features/room/useCreateRoom'
import { User } from '@/features/user/user.types'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import React from 'react'

function CreateRoomButton({ user }: { user: User }) {
    const {
        mutate: createRoom,
        data,
        isLoading,
        error,
        isError,
    } = useCreateRoom()

    React.useEffect(() => {
        if (data) {
            redirect(`/rooms/${data.code}`)
        }
    }, [data])

    const handleClick = React.useCallback(
        function handleClick(userId: string) {
            createRoom({ hostUserId: userId })
        },
        [createRoom]
    )

    if (!user) return null

    return (
        <button
            onClick={() => handleClick(user.id)}
            className="btn btn-secondary btn-md xl:btn-lg w-50 m-2"
            disabled={isLoading}
        >
            {isLoading ? (
                <span className="loading loading-spinner"></span>
            ) : (
                <Image
                    src={'/assets/icons/secondary/Add_ring_fill.svg'}
                    alt="Create Icon"
                    width={35}
                    height={35}
                />
            )}
            TẠO PHÒNG
        </button>
    )
}

export default CreateRoomButton
