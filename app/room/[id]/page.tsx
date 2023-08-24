'use client'

import Button from '@/components/Button'
import Board from '@/lib/game/Board'
import Piece, { PieceType } from '@/lib/game/QuanCo/Piece'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'

function Game() {
    const [board, setBoard] = useState<Board>(new Board())
    const [selectedSquare, setSelectedSquare] = useState<{
        piece: Piece
        coord: CoordinationType
    } | null>(null)

    // useEffect(() => {
    //      setBoard((b) => {
    //         b.squares = b.getInitSquares()
    //         return b
    //     })
    //     return () => {}
    // }, [])

    const startBtnHandler = () => {
        setBoard((b) => b.getInitBoard())
    }

    const movePiece = (destination: CoordinationType) => {
        if (!selectedSquare?.piece) {
            return
        }
        console.log(destination)
        console.log(selectedSquare.piece.coord)
        setBoard((b) => b.movePiece(selectedSquare?.piece, destination))
        setSelectedSquare(null)
    }

    const selectSquareHandler = (cell: Piece | null, x: number, y: number) => {
        if (
            board.squares.every((rows) => rows.every((cell) => cell === null))
        ) {
            return
        }

        if (!selectedSquare && cell) {
            setSelectedSquare({
                piece: cell,
                coord: {
                    x,
                    y,
                },
            })
            return
        }
        if (selectedSquare?.piece) {
            movePiece({ x, y })
        }
    }

    return (
        <div className="">
            Game
            <Link href={'/room'}>Back to lobby</Link>
            {/* <div className="p-8 fixed">
                <Image
                    src={'/game/board/banco1.svg'}
                    alt={'ban co'}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div> */}
            <Button onClick={startBtnHandler}>Start</Button>
            <div>
                {selectedSquare && PieceType[selectedSquare.piece.pieceType!]}
            </div>
            <div className="m-8 flex flex-col space-y-4">
                {board.squares.map((row, i) => (
                    <div key={`row_${i}`} className="flex space-x-4">
                        {row.map((cell, j) => {
                            const isSelected =
                                selectedSquare &&
                                selectedSquare.coord.x == i &&
                                selectedSquare.coord.y == j

                            const selected = isSelected
                                ? 'border-2 border-black'
                                : ''

                            const baseClassName =
                                selected +
                                ' ' +
                                'flex w-24 justify-center cursor-pointer'

                            const red =
                                baseClassName +
                                ' ' +
                                'bg-red-500 hover:bg-red-400'

                            const blue =
                                baseClassName +
                                ' ' +
                                'bg-blue-500 hover:bg-blue-400'

                            const emptyCell =
                                baseClassName +
                                ' ' +
                                'bg-slate-500 hover:bg:slate-400'

                            const className =
                                cell === null
                                    ? emptyCell
                                    : cell.isRed
                                    ? red
                                    : blue
                                    
                            return (
                                <div
                                    key={`cell_${j}`}
                                    className={className}
                                    onClick={() =>
                                        selectSquareHandler(cell, i, j)
                                    }
                                >{`${cell ? PieceType[cell.pieceType!] : '_'} ${
                                    cell?.coord?.x
                                } ${cell?.coord?.y}`}</div>
                            )
                        })}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Game
