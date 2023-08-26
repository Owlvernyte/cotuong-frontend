'use client'

import Button from '@/components/button'
import { TypoH1 } from '@/components/typography'
import { useStore } from '@/lib/zustand/store'
import Image from 'next/image'

export default function Home() {
    const { count, increase } = useStore()
    return (
        <div className="container p-4 h-full">
            <TypoH1>Cờ Tướng</TypoH1>
            <Button
                // className="w-full"
                rounded="md"
                variant="solid"
                size="md"
                onClick={() => increase(1)}
            >
                Nhấn để tăng: {count}
            </Button>
            <div className='grid grid-col-1'>
                {new Array<number>(30).fill(0).map((_, i) => (
                    <Button key={`menu_btn_${i}`}>{i}</Button>
                ))}
            </div>
        </div>
    )
}
