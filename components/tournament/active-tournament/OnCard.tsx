import React from 'react'
import LeaderBoard from './LeaderBoard'
import Banner from '../Banner'
import SelfInfo from './SeftInfo'
import CountdownS from './CountdownS'
import TournamentCard from '../TournamentCard'

export default function OnCard() {
    // Extract date/month/year from current date
    const startDate = new Date()

    const date = startDate.getDate()
    const month = startDate.getMonth() + 1
    const year = startDate.getFullYear()

    return (
        <TournamentCard>
            <div className="flex flex-row justify-between text-bamboo-100 text-3xl">
                <h3>GIẢI ĐẤU ĐANG DIỄN RA</h3>
                <CountdownS />
            </div>
            <div className="inline-grid grid-cols-9 gap-4">
                <div className="col-span-2">
                    <Banner
                        title="Alibaba"
                        subtitle={`${date}/${month}/${year}`}
                    />
                </div>
                <div className="col-span-4">
                    <LeaderBoard />
                </div>
                <div className="col-span-3">
                    <SelfInfo />
                </div>
            </div>
        </TournamentCard>
    )
}
