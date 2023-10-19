'use client'

import useRegister from '@/features/user/useRegister'
import StoreKeys from '@/lib/constants/storeKeys'
import localStorageService from '@/lib/services/localStorage.service'
import Image from 'next/image'
import React from 'react'

function SignUpForm() {
    const {
        mutate: register,
        data: response,
        isLoading,
        error,
        isError,
    } = useRegister()

    const handleSubmit = React.useCallback(
        function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
            e.preventDefault()

            const registerData = {
                username: e.currentTarget['username'].value as string,
                email: e.currentTarget['email'].value as string,
                password: e.currentTarget['password'].value as string,
                confirmPassword: e.currentTarget['confirmPassword']
                    .value as string,
            }

            register(registerData)
        },
        [register]
    )

    React.useEffect(() => {
        if (response && response.token) {
            localStorageService.set(StoreKeys.ACCESS_TOKEN, response.token)
            // refetch()
            location.reload()
        }
    }, [response])

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex flex-row justify-start w-full ">
                <Image
                    src="/icons/secondary/User_fill.svg"
                    alt="User Logo"
                    width={80}
                    height={80}
                />
                <input
                    required
                    type="text"
                    name="username"
                    placeholder="Tên người dùng"
                    className="input input-bordered border-bamboo-400 input-lg w-full m-2 bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-lg"
                />
            </div>

            <div className="flex flex-row justify-start w-full ">
                <Image
                    src="/icons/secondary/Message_alt_fill.svg"
                    alt="Mail Logo"
                    width={80}
                    height={80}
                />
                <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="input input-bordered border-bamboo-400 input-lg w-full m-2 bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-lg"
                />
            </div>

            <div className="flex flex-row justify-start w-full ">
                <Image
                    src="/icons/secondary/Unlock_fill.svg"
                    alt="Password Logo"
                    width={80}
                    height={80}
                />
                <input
                    required
                    type="password"
                    name="password"
                    placeholder="Mật khẩu"
                    className="input input-bordered border-bamboo-400 input-lg w-full m-2 bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-lg"
                />
            </div>

            <div className="flex flex-row justify-start w-full ">
                <Image
                    src="/icons/secondary/Unlock_fill.svg"
                    alt="Password Logo"
                    width={80}
                    height={80}
                />
                <input
                    required
                    type="password"
                    name="confirmPassword"
                    placeholder="Xác nhận Mật khẩu"
                    className="input input-bordered border-bamboo-400 input-lg w-full m-2 bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-lg"
                />
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
                        <span>{error.response?.data.title}</span>
                        {!!error.response?.data.errors &&
                            Object.keys(error.response.data.errors).map(
                                (key) => (
                                    <span key={key}>
                                        {error.response?.data.errors?.[key]}
                                    </span>
                                )
                            )}
                    </div>
                </div>
            )}

            <div className="px-2 mt-10">
                <button
                    type="submit"
                    disabled={isLoading}
                    className="btn btn-primary w-full"
                >
                    Tiếp Tục
                </button>
            </div>
        </form>
    )
}

export default SignUpForm
