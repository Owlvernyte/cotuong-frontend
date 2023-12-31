import GamePiece from '@/lib/game/QuanCo/Piece'
import { useDraggable } from '@dnd-kit/core'
import React, { forwardRef } from 'react'

export interface PieceProps extends React.HTMLAttributes<HTMLButtonElement> {
    id: string
    target?: GamePiece
    position?: CoordinationType
    disabled?: boolean
    clone?: boolean
}

const Piece = forwardRef<HTMLButtonElement, PieceProps>(function Piece(
    { disabled, target, id, position, clone, draggable, ...props },
    ref
) {
    let baseCn =
        'bg-inherit border-none cursor-pointer appearance-none flex-1 rounded-full w-full'

    if (clone) {
        baseCn += ` cursor-grabbing shadow-2xl`
    }

    if (disabled) {
        baseCn += ` cursor-not-allowed`
    } else {
        baseCn += ` hover:ring-4`
    }

    return (
        <button
            ref={ref}
            className={baseCn}
            data-position={JSON.stringify(position)}
            disabled={disabled}
            draggable={draggable}
            {...props}
        >
            <img
                className="box-content shadow-lg rounded-full"
                src={target?.imgSrc}
                alt={id}
                draggable={draggable}
            ></img>
        </button>
    )
})

export default Piece

export function DraggablePiece(props: PieceProps) {
    const { attributes, isDragging, listeners, setNodeRef } = useDraggable({
        id: props.id,
    })

    return (
        <Piece
            ref={setNodeRef}
            style={{
                opacity: isDragging ? 0.8 : undefined,
            }}
            {...props}
            {...attributes}
            {...listeners}
        />
    )
}
