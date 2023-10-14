import type { Metadata } from 'next'
import { Paytone_One } from 'next/font/google'
import './globals.css'
import Providers from '@/components/layouts/Providers'

const paytone = Paytone_One({
    subsets: ['latin', 'vietnamese'],
    weight: '400',
    variable: '--font-paytone',
})

export const metadata: Metadata = {
    title: 'Cờ tướng Thịt nướng',
    description: 'Play Vietnamese Chess while BBQing!',
    viewport: 'user-scalable=no, initial-scale=1.0',
    icons: ['/thitnuong.svg'],
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={paytone.className}>
                <Providers>{children}</Providers>
            </body>
        </html>
    )
}
