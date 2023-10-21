'use client'

import StoreKeys from '@/lib/constants/storeKeys'
import localStorageService from '@/lib/services/localStorage.service'
import Image from 'next/image'
import React from 'react'

function SignoutBtn() {
    return (
        <a
            className="hover:bg-bamboo-300 hover:text-bamboo-100"
            onClick={() => {
                document.cookie = `${StoreKeys.ACCESS_TOKEN}=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`
                document.cookie = `user=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`
                localStorageService.remove(StoreKeys.ACCESS_TOKEN)
                location.reload()
            }}
        >
            <Image
                src="/assets/icons/primary/Unlock_fill.svg"
                alt="Signout Icon"
                width={25}
                height={25}
            />
            {'Đăng xuất'}
        </a>
    )
}

export default SignoutBtn
