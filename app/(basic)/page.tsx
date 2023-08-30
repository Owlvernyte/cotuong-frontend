'use client'
import { useStore } from '@/lib/zustand/store'
import Image from 'next/image'
// import QuanCoIcon from '@/public/h1_quanco.svg'

export default function Home() {
    return (
        <div className="flex justify-center h-full bg-red-500">
            <div className="container flex flex-col h-full">
                <div className="screen flex flex-col space-y-4 justify-center items-center pb-40 h-full">
                    <div className="flex flex-row justify-center items-center p-2 text-center space-x-2">
                        <img
                            className="w-[96px] md:w-[128px] drop-shadow-lg"
                            src="/h1_quanco.svg"
                            alt="icon_quan_co"
                        ></img>
                        <h1 className="text-4xl md:text-8xl drop-shadow-lg">Cờ Tướng</h1>
                    </div>
                    <div className="flex-col space-y-8 justify-center  w-full px-2 md:px-0 md:w-1/2">
                        <button className="btn btn-primary btn-md md:btn-lg w-full drop-shadow-lg">
                            {'Danh sách phòng'}
                        </button>
                        <button className="btn btn-primary btn-md md:btn-lg w-full drop-shadow-lg">
                            {'Bảng xếp hạng'}
                        </button>
                        <button className="btn btn-primary btn-md md:btn-lg w-full drop-shadow-lg">
                            {'Huớng dẫn chơi'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
