import React from 'react'

function LoadingBBQ() {
    return (
        <div className="flex space-x-2 justify-center items-center">
            <span className="loading loading-spinner"></span>
            <span>{'Đang nướng thịt, bạn chờ tí nhé!'}</span>
        </div>
    )
}

export default LoadingBBQ
