import Image from 'next/image'
import React from 'react'

function LoadingBBQ() {
    return (
        <div className="flex space-x-2 justify-center items-center">
             <Image
                src={'/assets/thitnuong.svg'}
                width={32}
                height={32}
                alt="Thit Nuong"
                className='animate-spin'
            />
            <span>{'Đang nướng thịt, bạn chờ tí nhé!'}</span>
        </div>
    )
}

export default LoadingBBQ
