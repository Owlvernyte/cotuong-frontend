'use client'

import { useDroppable } from '@dnd-kit/core'
import React from 'react'

export interface CellProps {
    children?: React.ReactElement | null
    id: string
    size?: number
    validDropLocation?: boolean
    x: number
    y: number
    [key: string]: any
}

function Cell({ children, validDropLocation, id, x, y, ...props }: CellProps) {
    const { isOver, setNodeRef } = useDroppable({
        id,
    })
    return (
        <div
            ref={setNodeRef}
            className={'flex aspect-square items-center justify-center p-0 flex-1 w-full'}
            data-x={x}
            data-y={y}
            {...props}
        >
            {children}
        </div>
    )
}

export default Cell
