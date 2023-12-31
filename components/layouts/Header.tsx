import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AuthHeaderArea from '../auth/AuthHeaderArea'
import NavLinks from './NavLinks'

function Header() {
    return (
        <div className="navbar bg-primary">
            <div className="flex-1 px-2 inline-flex items-center space-x-6">
                <Link href="/">
                    <Image
                        src="/assets/thitnuong.svg"
                        alt="Logo Thit Nuong"
                        width={40}
                        height={40}
                        style={{ width: 'auto', height: 'auto' }}
                    />
                </Link>
                <NavLinks />
            </div>
            <div className="flex-none space-x-2">
                <AuthHeaderArea />
                <div className="dropdown dropdown-end">
                    <label
                        tabIndex={0}
                        className="btn btn-circle btn-ghost hover:bg-bamboo-300"
                    >
                        <Image
                            src="/assets/icons/primary/Setting_fill.svg"
                            alt="Icon Settings"
                            width={25}
                            height={25}
                        />
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu dropdown-content z-[1] p-2 shadow bg-primary text-primary-content rounded-md w-52 mt-4"
                    >
                        <li>
                            <Link
                                className="hover:bg-bamboo-300 hover:text-bamboo-100"
                                href={'/'}
                            >
                                <Image
                                    src="/assets/icons/primary/sound_max_fill.svg"
                                    alt="Sound Icon"
                                    width={25}
                                    height={25}
                                />
                                Âm thanh
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:bg-bamboo-300 hover:text-bamboo-100"
                                href={'/contact'}
                            >
                                <Image
                                    src="/assets/icons/primary/Question_fill.svg"
                                    alt="Sound Icon"
                                    width={25}
                                    height={25}
                                />
                                Trợ giúp
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
