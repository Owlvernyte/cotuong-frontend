'use client'
import useCountdown from '@/lib/hooks/useCountdown'
import React from 'react'

const CountdownS: React.FC = () => {
    const { timeRemaining } = useCountdown({ deadline: new Date('01/01/2024') })

    return (
        <div className="text-dirt-200 text-sm md:text-base items-center justify-center">
            Còn lại: {timeRemaining.days} ngày {timeRemaining.hours} giờ{' '}
            {timeRemaining.minutes} phút {timeRemaining.seconds} giây
        </div>
    )
}

export default CountdownS
