import Image from 'next/image'
import React, { PropsWithChildren } from 'react'

function WaitingContainer({ children }: PropsWithChildren) {
    return (
        <div
            className={
                'h-full flex flex-col space-y-2 justify-center items-center'
            }
        >
            <Image
                src={'/thitnuong.svg'}
                width={128}
                height={128}
                alt="Thit Nuong"
                className='animate-spin'
            />
            {children}
        </div>
    )
}

export default WaitingContainer
