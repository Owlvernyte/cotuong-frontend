import Image from 'next/image'
import Link from 'next/link'
import React, { PropsWithChildren } from 'react'

function WaitingContainer({ children }: PropsWithChildren) {
    return (
        <div
            className={
                'h-full flex flex-col space-y-2 justify-center items-center'
            }
        >
            {children}
            <Link className={'btn btn-primary'} href="/rooms">
                {'Quay về'}
            </Link>
        </div>
    )
}

export default WaitingContainer
