import { User } from '@/features/user/user.types'
import StoreKeys from '@/lib/constants/storeKeys'
import { cookies } from 'next/headers'
import Link from 'next/link'
import React from 'react'

type LinkProp = {
    title: string
    href: string
}

const publicLinks: LinkProp[] = [
    {
        title: 'Liên hệ',
        href: '/contact',
    },
]

const authLinks: LinkProp[] = [
    {
        title: 'Phòng',
        href: '/rooms',
    },
    {
        title: 'Giải đấu',
        href: '/tournaments',
    },
    {
        title: 'Lịch sử đấu',
        href: '/matches',
    },
]

function NavLinks() {
    const linkCn = 'text-bamboo-100 hover:underline'
    const cookieStore = cookies()
    const userCookie = cookieStore.get(StoreKeys.USER)
    const user = userCookie && (JSON.parse(userCookie.value) as User)
    return (
        <>
            {publicLinks.map((link) => (
                <Link
                    key={`navlink_${link.href}`}
                    className={linkCn}
                    href={link.href}
                >
                    {link.title}
                </Link>
            ))}
            {user &&
                authLinks.map((link) => (
                    <Link
                        key={`navlink_${link.href}`}
                        className={linkCn}
                        href={link.href}
                    >
                        {link.title}
                    </Link>
                ))}
        </>
    )
}

export default NavLinks
