import type { Metadata } from 'next'
import { Paytone_One } from 'next/font/google'
import './globals.css'

const paytone = Paytone_One({
    subsets: ['latin', 'vietnamese'],
    weight: '400',
    variable: '--font-paytone',
})

export const metadata: Metadata = {
    title: 'Co tuong an thit nuong',
    description: 'Play Vietnamese Chess!',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={paytone.className}>
                {children}
            </body>
        </html>
    )
}
