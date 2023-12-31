'use client'

import React from 'react'
import IconButton from '@/components/ui/IconButton'
import useCheckAuthorization from '@/features/user/useCheckAuthorization'

const UpdateEmailForm: React.FC = () => {
    const { data: user } = useCheckAuthorization()

    return (
        <div className="flex flex-col py-2">
            <div className="text-bamboo-100 text-left text-sm md:text-lg lg:text-xl xl:text-xl 2xl:text-2xl font-normal">
                Email
            </div>
            <div className="items-center inline-flex flex-row pt-4 gap-4 w-full">
                <div className="input input-bordered input-lg w-full bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 py-4">
                    {user?.email ?? 'Trống'}
                </div>
                <IconButton
                    iconSrc="/assets/icons/secondary/Edit.svg"
                    iconAlt="Icon Edit"
                    onClick={() =>
                        (window as any).modal_update_email.showModal()
                    }
                    buttonVariants="btn-neutral"
                    buttonSize="btn-lg"
                />
                <dialog id="modal_update_email" className="modal">
                    <div className="modal-box w-full bg-bamboo-400">
                        <form method="dialog">
                            <IconButton
                                iconSrc="/assets/icons/primary/Dell_fill.svg"
                                iconAlt="Icon Close"
                                buttonVariants="btn-primary"
                                buttonStyle="btn-circle"
                                className="absolute right-2 top-2"
                            />
                            <h3 className="text-3xl text-bamboo-100 py-4">
                                Thay đổi Email
                            </h3>
                            <div className="px-4">
                                <input
                                    type="text"
                                    name="email"
                                    defaultValue={user?.email}
                                    placeholder="Email mới"
                                    className="input input-bordered input-lg w-full bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-lg mb-5"
                                />
                                <input
                                    type="password"
                                    name="currentPassword"
                                    placeholder="Nhập mật khẩu xác nhận"
                                    className="input input-bordered input-lg w-full bg-bamboo-100 placeholder-dirt-400 placeholder-opacity-50 text-lg"
                                />
                                <div className="modal-action">
                                    <input
                                        type="submit"
                                        value="Cập Nhật"
                                        className="btn btn-md btn-secondary"
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                    {/* closes when clicked outside */}
                    <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                    </form>
                </dialog>
            </div>
        </div>
    )
}

export default UpdateEmailForm
