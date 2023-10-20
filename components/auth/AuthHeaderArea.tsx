import { User } from '@/features/user/user.types'
import { cookies } from 'next/headers'
import Image from 'next/image'
import Link from 'next/link'
import SignoutBtn from './SignoutBtn'

function AuthHeaderArea() {
    const cookieStore = cookies()
    const userCookie = cookieStore.get('user')
    const user = userCookie && (JSON.parse(userCookie.value) as User)

    return (
        <>
            {user ? (
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="">
                        <div className="flex space-x-2 text-secondary items-center justify-between hover:underline cursor-pointer">
                            <span>{`Xin chào, ${user.userName}!`}</span>
                            <Image
                                src="/assets/icons/primary/User_circle_duotone.svg"
                                alt="Icon People"
                                width={32}
                                height={32}
                            />
                        </div>
                    </label>
                    <ul
                        tabIndex={0}
                        className="menu dropdown-content z-[1] p-2 shadow bg-primary text-primary-content rounded-md w-52 mt-6"
                    >
                        <li>
                            <Link
                                className="hover:bg-bamboo-300 hover:text-bamboo-100"
                                href={`/users/${user.id}`}
                            >
                                <Image
                                    src="/assets/icons/primary/User_fill.svg"
                                    alt="Profile Icon"
                                    width={25}
                                    height={25}
                                />
                                {`Hồ sơ`}
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:bg-bamboo-300 hover:text-bamboo-100"
                                href={`/settings/account`}
                            >
                                <Image
                                    src="/assets/icons/primary/Key_alt_fill.svg"
                                    alt="Account Icon"
                                    width={25}
                                    height={25}
                                />
                                {`Tài khoản`}
                            </Link>
                        </li>
                        <li>
                            <SignoutBtn />
                        </li>
                    </ul>
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
