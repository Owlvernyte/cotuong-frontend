import Image from 'next/image'
import React from 'react'
import IconButton from '../ui/IconButton'
import { redirect } from 'next/navigation'
import CreateRoomButton from './CreateRoomButton'
import FindRoomButton from './FindRoomButton'
import { cookies } from 'next/headers'
import { User } from '@/features/user/user.types'
import StoreKeys from '@/lib/constants/storeKeys'

function ButtonsMenuList() {
    const cookieStore = cookies()
    const userCookie = cookieStore.get(StoreKeys.USER)
    const user = userCookie && (JSON.parse(userCookie.value) as User)

    return (
        <div className="flex flex-col xl:flex-row justify-center w-full">
            {user && <CreateRoomButton user={user} />}
            <FindRoomButton />
        </div>
    )
}

export default ButtonsMenuList
