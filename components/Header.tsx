import Link from 'next/link'
import React from 'react'
import Button from './button'

function Header() {
    return (
        <div className="bg-bamboo-400 min-h-[50px] h-fit p-2 flex justify-between items-center">
            <div className="inline-flex items-center space-x-4">
                <Link href={'/'}>Trang chu</Link>
                <Link href={'/'}>Trang chu</Link>
                <Link href={'/'}>Trang chu</Link>
            </div>
            <div className="inline-flex items-center">
                <Button size='icon'>
                    Icon
                </Button>
                <Button size='icon'>
                    Icon
                </Button>
            </div>
        </div>
    )
}

export default Header
