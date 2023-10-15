import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import WaitingContainer from './WaitingContainer'

function Disconnected() {
    return (
        <WaitingContainer>
            <span>{`Mất kết nối do phòng không tồn tại hoặc có vấn đề gì đó...`}</span>
            <Link className={'btn btn-primary'} href="/rooms">
                {'Quay về'}
            </Link>
        </WaitingContainer>
    )
}

export default Disconnected
