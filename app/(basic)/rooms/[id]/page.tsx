'use client'

import Board from '@/lib/game/Board'
import Piece, { PieceType } from '@/lib/game/QuanCo/Piece'
import Link from 'next/link'
import { useState } from 'react'

const basePiecePath = '/game/pieces1'

function Game() {
    const [board, setBoard] = useState<Board>(new Board())
    const [selectedSquare, setSelectedSquare] = useState<{
        piece: Piece
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
                            <Link href={'/room'} className="btn btn-secondary">
                                Back to lobby
                            </Link>
                            <button
                                className="btn btn-secondary"
                                onClick={startBtnHandler}
                            >
                                Start
                            </button>
                            <div>
                                {selectedSquare &&
                                    PieceType[selectedSquare.piece.pieceType!]}
                            </div>
                        </div>
                    </div>
                    <div
                        id="chat-box"
                        className="bg-primary h-full rounded-md shadow-lg flex flex-col p-2 space-y-2 col-span-2"
                    >
                        <div className="flex-1 flex flex-col space-y-2">
                            {messages.map((message, i) => {
                                return (
                                    <div key={`m_${i}`}>{message.content}</div>
                                )
                            })}
                        </div>
                        <div className="join w-full">
                            <div className="w-full">
                                <div className="w-full">
                                    <input
                                        className="input input-bordered join-item w-full"
                                        placeholder="Type something..."
                                    />
                                </div>
                            </div>
                            <button className="btn join-item">
                                <img
                                    src="/icons/Send_fill.svg"
                                    alt="send_button"
                                ></img>
                            </button>
                        </div>
                    </div>
                </div>
                <div
                    id="game-board"
                    className="px-8 py-4 bg-dirt-300 rounded-md h-full flex items-center justify-center text-center col-span-4"
                >
                    <div className="bg-banco1 bg-center bg-contain bg-no-repeat p-2 grid grid-cols-9 gap-2 w-full max-w-2xl">
                        {board.squares.map((row, i) => (
                            <>
                                {row.map((cell, j) => {
                                    const isSelected =
                                        selectedSquare &&
                                        selectedSquare.coord.x == i &&
                                        selectedSquare.coord.y == j

                                    const selected = isSelected
                                        ? 'ring-4 ring-black'
                                        : ''

                                    const baseClassName =
                                        selected +
                                        ' ' +
                                        'flex aspect-square rounded-full justify-center cursor-pointer box-border'

                                    const red =
                                        baseClassName +
                                        ' ' +
                                        'hover:ring-red-500 hover:ring-4'

                                    const blue =
                                        baseClassName +
                                        ' ' +
                                        'hover:ring-blue-500 hover:ring-4'

                                    const emptyCell = baseClassName

                                    const className =
                                        cell === null
                                            ? emptyCell
                                            : cell.isRed
                                            ? red
                                            : blue

                                    const pieceChars = cell
                                        ? `${cell.isRed ? 'r' : 'b'}${
                                              cell.signature
                                          }`
                                        : undefined

                                    const srcPath = !!pieceChars
                                        ? basePiecePath +
                                          '/' +
                                          `${pieceChars}.svg`
                                        : undefined

                                    const alt = !!pieceChars
                                        ? `${pieceChars}`
                                        : undefined

                                    return (
                                        <div
                                            key={`cell_${j}`}
                                            className={className}
                                            onClick={() =>
                                                selectSquareHandler(cell, i, j)
                                            }
                                        >
                                            {cell && (
                                                <img
                                                    className="box-content shadow-lg rounded-full"
                                                    src={srcPath}
                                                    alt={alt}
                                                ></img>
                                            )}
                                        </div>
                                    )
                                })}
                            </>
                        ))}
                    </div>
                </div>
                <div
                    id="right-area"
                    className="flex flex-col space-y-2 col-span-2"
                >
                    <div className="bg-primary h-full rounded-md shadow-lg"></div>
                    <div className="bg-primary h-full rounded-md shadow-lg"></div>
                </div>
            </div>
        </div>
    )
}

export default Game
