'use client'

import useLogin from '@/features/user/useLogin'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function SignInForm() {
    const [isChecked, setIsChecked] = React.useState(false)
    const {
        mutate: login,
        data: response,
        isLoading,
        error,
        isError,
    } = useLogin()

    const handleCheckboxClick = () => {
        setIsChecked(!isChecked)
    }

    const handleSubmit = React.useCallback(
        function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
            e.preventDefault()

            const loginData = {
                userNameOrEmail: e.currentTarget['username'].value as string,
                password: e.currentTarget['password'].value as string,
            }

            login(loginData)
        },
        [login]
    )

    React.useEffect(() => {
        if (response) {
            // refetch()
            location.reload()
        }
    }, [response])

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-row justify-start w-full ">
                <Image
                    src="/assets/icons/secondary/User_fill.svg"
                    alt="User Logo"
                    width={80}
                    height={80}
                />
                <input
                    required
                    type="text"
                    name="username"
                    placeholder="Tên Người Dùng/Email"
                    className="input input-bordered border-bamboo-400 input-lg w-full m-2 bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-lg"
                />
            </div>

            <div className="flex flex-row justify-start w-full ">
                <Image
                    src="/assets/icons/secondary/Unlock_fill.svg"
                    alt="Password Logo"
                    width={80}
                    height={80}
                />
                <input
                    required
                    type="password"
                    name="password"
                    placeholder="Mật Khẩu"
                    className="input input-bordered border-bamboo-400 input-lg w-full m-2 bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-lg"
                />
            </div>

            <div className="w-full flex justify-between mt-2 mb-4">
                <label className="flex flex-row pl-20">
                    <input
                        type="checkbox"
                        name="rememberMe"
                        checked={isChecked}
                        className="checkbox checkbox-primary checkbox-sm mt-1 mr-1"
                        onChange={handleCheckboxClick}
                    />
                    <p className="text-lg text-bamboo-300">Nhớ tôi</p>
                </label>
                <div className="pr-3">
                    <Link href={'/'} className="link text-lg text-bamboo-300">
                        Quên mật khẩu?
                    </Link>
                </div>
            </div>

            {isError && (
                <div className="px-2 mb-4">
                    <div className="alert alert-error">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="stroke-current shrink-0 h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                        <span>{(error as any).message}</span>
                    </div>
                </div>
            )}

            <div className="px-2 mt-4">
                <button
                    type="submit"
                    disabled={isLoading}
                    className="btn btn-primary w-full"
                >
                    {isLoading && (
                        <span className="loading loading-spinner"></span>
                    )}
                    Tiếp Tục
                </button>
            </div>
        </form>
    )
}

export default SignInForm
