'use client' // Error components must be Client Components

import React from 'react'

function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    return (
        <div className="flex h-full w-full justify-center items-center">
            <div className="flex flex-col justify-center items-center">
                <span>{'Có lỗi rồi, thử lại nhé!'}</span>
                <button
                    className="btn btn-primary btn-block btn-sm"
                    onClick={() => reset()}
                >
                    {'Thử lại'}
                </button>
            </div>
        </div>
    )
}

export default Error
