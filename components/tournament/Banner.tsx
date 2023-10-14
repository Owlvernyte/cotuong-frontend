import Header from '@/components/layouts/Header'
import React from 'react'
import LeaderBoard from './active-tournament/LeaderBoard'
import Image from 'next/image'

interface Props {
    title: string
    subtitle: string
    imgSrc?: string
}

export default function Banner({ title, subtitle, imgSrc }: Props) {
    return (
        <div className="flex justify-center items-center w-full h-full">
            <div className="flex flex-col items-center justify-center bg-dirt-300 rounded shadow h-full w-full ">
                <h4 className="text-center text-bamboo-100 text-lg font-bold mb-2">
                    {title}
                </h4>
                <img
                    className="w-40 h-40"
                    src={imgSrc ?? '/icons/Cup.svg'}
                    alt="nyte"
                />
                <div className="text-dirt-200 text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl py-2">
                    {subtitle}
                </div>
            </div>
        </div>
    )
}
