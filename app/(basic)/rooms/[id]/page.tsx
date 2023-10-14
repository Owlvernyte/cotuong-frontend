'use client'

import GameBoard from '@/lib/game/Board'
import GamePiece, { PieceType } from '@/lib/game/QuanCo/Piece'
import Link from 'next/link'
import { useCallback, useState } from 'react'
import Board from './Board'
import ChatBox from './LeftArea/ChatBox'
import Cell from './Cell'
import Piece, { DraggablePiece, PieceProps } from './Piece'
import {
    DndContext,
    DragEndEvent,
    DragOverlay,
    DragStartEvent,
} from '@dnd-kit/core'

function Game() {
    const [board, setBoard] = useState<GameBoard>(new GameBoard())
    const [movingPiece, setMovingPiece] = useState<{
        piece: GamePiece
        coord: CoordinationType
    } | null>(null)

    const [messages, setMessages] = useState<
        {
            content: string
            create_at: Date
        }[]
    >([])

    // useEffect(() => {
    //      setBoard((b) => {
    //         b.squares = b.getInitSquares()
    //         return b
    //     })
    //     return () => {}
    // }, [])

    const handleDragCancel = useCallback(() => {
        setMovingPiece(null)
    }, [])

    const startBtnHandler = () => {
        setBoard((b) => b.getInitBoard())
    }

    const handleDragEnd = useCallback(
        function handleDragEnd(event: DragEndEvent) {
            if (!movingPiece?.coord || !movingPiece?.piece || !event.over?.id) {
                return
            }

            const { x: movingPieceX, y: movingPieceY } = movingPiece.coord
            const [cellX, cellY] = event.over.id
                .toString()
                .split('_')
                .map(Number)

            // const potentialExistingPiece = board.squares[cellY][cellX]

            setMovingPiece(null)

            setBoard((b) =>
                b.movePiece(movingPiece.piece, { x: cellX, y: cellY })
            )
        },
        [movingPiece]
    )

    const handleDragStart = useCallback(
        function handleDragStart({ active }: DragStartEvent) {
            const piece = board.squares.reduce<GamePiece | null>((acc, row) => {
                return acc ?? row.find((cell) => cell?.id === active.id) ?? null
            }, null)

            if (piece) {
                setMovingPiece({
                    piece: piece,
                    coord: piece.coord,
                })
            }
        },
        [board.squares]
    )

    const movePiece = (destination: CoordinationType) => {
        if (!movingPiece?.piece) {
            return
        }
        console.log(destination)
        console.log(movingPiece.piece.coord)
        setBoard((b) => b.movePiece(movingPiece?.piece, destination))
        setMovingPiece(null)
    }

    const selectSquareHandler = (
        cell: GamePiece | null,
        x: number,
        y: number
    ) => {
        if (
            board.squares.every((rows) => rows.every((cell) => cell === null))
        ) {
            return
        }

        if (!movingPiece && cell) {
            setMovingPiece({
                piece: cell,
                coord: {
                    x,
                    y,
                },
            })
            return
        }
        if (movingPiece?.piece) {
            movePiece({ x, y })
        }
    }

    return (
        <DndContext
            onDragStart={handleDragStart}
            onDragCancel={handleDragCancel}
            onDragEnd={handleDragEnd}
        >
            <div className="h-full space-y-2 flex flex-col">
                <div className="grid grid-cols-8 gap-2 grid-flow-row-dense flex-1">
                    <div
                        id="left-area"
                        className="flex flex-col space-y-2 col-span-2"
                    >
                        <div
                            id="menu"
                            className="bg-primary h-full rounded-md shadow-lg p-2"
                        >
                            <div className="flex space-x-2">
                                <Link
                                    href={'/rooms'}
                                    className="btn btn-secondary"
                                >
                                    Back to lobby
                                </Link>
                                <button
                                    className="btn btn-secondary"
                                    onClick={startBtnHandler}
                                >
                                    Start
                                </button>
                                <div>
                                    {movingPiece &&
                                        PieceType[movingPiece.piece.pieceType!]}
                                </div>
                            </div>
                        </div>
                        <ChatBox messages={messages} />
                    </div>
                    <Board>
                        {board.squares.map((row, i) =>
                            row.map((cell, j) => {

                                return (
                                    <Cell
                                        key={`cell_${i}_${j}`}
                                        id={`${i}_${j}`}
                                        x={i}
                                        y={j}
                                    >
                                        {cell && (
                                            <DraggablePiece
                                                id={cell.id}
                                                target={cell}
                                                position={cell.coord}
                                            />
                                        )}
                                    </Cell>
                                )
                            })
                        )}
                    </Board>
                    <div
                        id="right-area"
                        className="flex flex-col space-y-2 col-span-2"
                    >
                        <div className="bg-primary h-full rounded-md shadow-lg"></div>
                        <div className="bg-primary h-full rounded-md shadow-lg"></div>
                    </div>
                </div>
            </div>
            <DragOverlay dropAnimation={null}>
                {movingPiece == null ? null : (
                    <Piece
                        target={movingPiece.piece}
                        clone
                        id={movingPiece.piece.id}
                    />
                )}
            </DragOverlay>
        </DndContext>
    )
}

export default Game
