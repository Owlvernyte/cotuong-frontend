'use client'

import { useStore } from '@/lib/zustand/store'
import Link from 'next/link'
import React from 'react'

function AuthHeaderArea() {
    const { authorized, user } = useStore()
    return (
        <>
            {authorized && user ? (
                <div className="flex space-x-2 text-secondary items-center justify-between">
                    <Link
                        href={`/users/${user.id}`}
                    >{`Xin chào, ${user.userName}!`}</Link>
                </div>
            ) : (
                <Link className="btn btn-secondary px-12" href={'/signin'}>
                    {'Đăng nhập'}
                </Link>
            )}
        </>
    )
}

export default AuthHeaderArea
