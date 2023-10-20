import StoreKeys from '@/lib/constants/storeKeys'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import React from 'react'
import Game from './Game'
import { User } from '@/features/user/user.types'

function Room({ params }: { params: { id: string } }) {
    const cookieStore = cookies()
    const tokenCookie = cookieStore.get(StoreKeys.ACCESS_TOKEN)
    const userCookie = cookieStore.get(StoreKeys.USER)
    const token = tokenCookie && tokenCookie.value
    const user = userCookie && (JSON.parse(userCookie.value) as User)
    if (!token || !user) return redirect('/signin')
    return <Game roomCode={params.id} accessToken={token} user={user} />
}

export default Room
