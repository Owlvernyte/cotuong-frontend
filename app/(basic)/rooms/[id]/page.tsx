"use client"

import GameBoard from "@/lib/game/Board"
import GamePiece, { PieceType } from "@/lib/game/QuanCo/Piece"
import Link from "next/link"
import { useCallback, useState } from "react"
import Board from "./Board"
import ChatBox from "./LeftArea/ChatBox"
import Cell from "./Cell"
import Piece, { DraggablePiece, PieceProps } from "./Piece"
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
} from "@dnd-kit/core"
import Image from "next/image"
import PlayerInformation from "@/components/player/PlayerInformation"

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
      const [cellX, cellY] = event.over.id.toString().split("_").map(Number)

      // const potentialExistingPiece = board.squares[cellY][cellX]

      setMovingPiece(null)

      setBoard((b) => b.movePiece(movingPiece.piece, { x: cellX, y: cellY }))
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
    if (board.squares.every((rows) => rows.every((cell) => cell === null))) {
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
          <div id="left-area" className="flex flex-col space-y-2 col-span-2">
            <div
              id="menu"
              className="bg-primary w-full h-full rounded-md shadow-lg p-2 flex flex-col items-center"
            >
              {/* Hard Code */}
              <div className="w-full flex flex-col xl:flex-row space-y-2 justify-between items-center px-6 py-2">
                <div>
                  <p className="text-2xl text-bamboo-100 ">ID: ABC123</p>
                </div>

                <div>
                  <button className="btn btn-primary bg-bamboo-300 btn-md text-bamboo-100 text-xl">
                    <Image
                      src="/icons/primary/Eye_fill.svg"
                      alt="Eye Icon"
                      width={30}
                      height={30}
                    />
                    3
                  </button>
                </div>
              </div>

              <div className="w-full h-[1px] border-1 bg-bamboo-100 solid"></div>

              <div className="text-center text-md md:text-4xl text-bamboo-100 my-4">
                00:00:00 trôi qua
              </div>

              <div className="flex flex-col space-y-2 items-center xl:space-y-0 xl:flex-row xl:space-x-2 my-1">
                <button className="btn btn-secondary btn-md w-48 text-lg">
                  Tạm Dừng
                </button>
                <button className="btn btn-secondary btn-md w-48 text-lg">
                  Cầu Hoà
                </button>
              </div>

              <div className="flex flex-col space-y-2 items-center xl:space-y-0 xl:flex-row xl:space-x-2 my-1">
                <Link
                  href={"/rooms"}
                  className="btn btn-secondary btn-md w-48 text-lg"
                >
                  Rời Phòng
                </Link>
                <button
                  className="btn btn-secondary btn-md w-48 text-lg"
                  onClick={startBtnHandler}
                >
                  Bắt Đầu
                </button>
              </div>
              <div className="text-bamboo-100">
                {movingPiece && (
                  <p className="py-2">
                    Bạn đang chọn Quân:{" "}
                    {PieceType[movingPiece.piece.pieceType!]}
                  </p>
                )}
              </div>
            </div>
            <ChatBox messages={messages} />
          </div>
          <Board>
            {board.squares.map((row, i) =>
              row.map((cell, j) => {
                return (
                  <Cell key={`cell_${i}_${j}`} id={`${i}_${j}`} x={i} y={j}>
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
          <div id="right-area" className="flex flex-col space-y-2 col-span-2">
            <div className="bg-primary w-full h-full rounded-md shadow-lg p-2 flex flex-col items-center">
              <div id="player1" className="self-start pl-4 py-2">
                <PlayerInformation
                  username="Player 1"
                  avatarSrc="/avatars/avatar1.png"
                  avatarSize={50}
                  imageWidth={70}
                  imageHeight={70}
                  hasFlag
                  flagSrc="/flags/VN.svg"
                  hasScore
                  scoreValue={1234}
                />
              </div>

              <div className="w-full h-[1px] border-1 bg-bamboo-100 solid"></div>

              <div id="player1-captured-pieces"></div>
            </div>
            <div className="bg-primary w-full h-full rounded-md shadow-lg p-2 flex flex-col items-center">
              <div id="player2" className="self-start pl-4 py-2">
                <PlayerInformation
                  username="Player 2"
                  avatarSrc="/avatars/avatar2.png"
                  avatarSize={50}
                  imageWidth={70}
                  imageHeight={70}
                  hasFlag
                  flagSrc="/flags/VN.svg"
                  hasScore
                  scoreValue={3456}
                />
              </div>

              <div className="w-full h-[1px] border-1 bg-bamboo-100 solid"></div>

              <div id="player2-captured-pieces"></div>
            </div>
          </div>
        </div>
      </div>
      <DragOverlay dropAnimation={null}>
        {movingPiece == null ? null : (
          <Piece target={movingPiece.piece} clone id={movingPiece.piece.id} />
        )}
      </DragOverlay>
    </DndContext>
  )
}

export default Game
