'use client'

import useUser from '@/features/user/useUser'
import { useStore } from '@/lib/zustand/store'
import { useRouter, usePathname } from 'next/navigation'
import React, { PropsWithChildren } from 'react'

function AuthProvider({ children }: PropsWithChildren) {
    const { data, isLoading } = useUser()
    const { authorized, authorize, unauthorize, setUser, eraseUser } =
        useStore()
    const router = useRouter()
    const pathname = usePathname()
    const inAuthPath =
        pathname.startsWith('/signin') || pathname.startsWith('/signup')

    React.useEffect(() => {
        if (data) {
            authorize()
            setUser(data)
        } else {
            unauthorize()
            eraseUser()
        }
    }, [authorize, data, unauthorize])

    React.useEffect(() => {
        if (authorized) {
            if (inAuthPath) {
                router.push('/')
                return
            }
            return
        }
        router.replace('/signin')
    }, [authorized, router, pathname, inAuthPath])

    return (
        <>
            {isLoading ? (
                <div className="flex h-full w-full justify-center items-center">
                    <span className="loading loading-spinner"></span>
                </div>
            ) : (
                children
            )}
        </>
    )
}

export default AuthProvider
