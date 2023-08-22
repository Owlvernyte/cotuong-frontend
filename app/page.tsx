'use client'

import Button from '@/components/Button'
import { useStore } from '@/lib/zustand/store'
import Image from 'next/image'

export default function Home() {
    const { count, increase } = useStore()
    return (
        <main className='container p-4'>
            <Button onClick={() => increase(1)}>Click to increase: {count}</Button>
        </main>
    )
}
