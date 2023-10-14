import React, { PropsWithChildren } from 'react'

function TournamentCard({ children }: PropsWithChildren) {
    return (
        <div className="bg-bamboo-400 flex flex-col space-y-4 rounded shadow w-full py-8 px-10">
            {children}
        </div>
    )
}

export default TournamentCard
