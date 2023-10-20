import Image from 'next/image'
import React from 'react'

function SpinningBBQ({ size = 32 }: { size?: number }) {
    return (
        <Image
            src={'/assets/thitnuong.svg'}
            width={size}
            height={size}
            alt="Thit Nuong"
            className="animate-spin"
        />
    )
}

export default SpinningBBQ
