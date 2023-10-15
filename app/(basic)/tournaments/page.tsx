'use client'

import OnCard from '@/components/tournament/active-tournament/OnCard'
import OffCard from '@/components/tournament/pre-tournament/OffCard'
import React from 'react'

export default function Home() {
    return (
        <div className="flex justify-center min-h-screen">
            <div className="container flex flex-col space-y-8 max-w-screen-2xl py-10">
                <OnCard />
                <OffCard />
            </div>
        </div>
    )
}
