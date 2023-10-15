import React, { PropsWithChildren } from 'react'

function Board({ children }: PropsWithChildren) {
    return (
        <div
            id="game-board"
            className="px-8 py-4 bg-dirt-300 rounded-md h-full flex items-center justify-center text-center col-span-4"
        >
            <div className="bg-banco1 bg-center bg-contain bg-no-repeat p-2 inline-grid grid-cols-9 gap-x-[6.5px] gap-y-[6px] w-full max-w-2xl">
                {children}
            </div>
        </div>
    )
}

export default Board
