'use client'

import PlayerInformation from '@/components/player/PlayerInformation'
import LoadingBBQ from '@/components/ui/LoadingBBQ'
import useGetRoomById from '@/features/room/useGetRoomById'
import StoreKeys from '@/lib/constants/storeKeys'
import GameBoard from '@/lib/game/Board'
import GamePiece from '@/lib/game/QuanCo/Piece'
import useSignalR from '@/lib/hooks/useSignalR'
import localStorageService from '@/lib/services/localStorage.service'
import {
    DndContext,
    DragEndEvent,
    DragOverlay,
    DragStartEvent,
} from '@dnd-kit/core'
import { HubConnectionState } from '@microsoft/signalr'
import { AxiosError } from 'axios'
import { useCallback, useEffect, useState } from 'react'
import Board from './Board'
import Cell from './Cell'
import ChatBox from './LeftArea/ChatBox'
import MenuBox from './LeftArea/MenuBox'
import Piece, { DraggablePiece } from './Piece'
import WaitingContainer from './WaitingContainer'
import { MessageProps } from './LeftArea/ChatBubble'
import { useStore } from '@/lib/zustand/store'
import PlayerArea from './RightArea/PlayerArea'

type UserDto = { id: string; userName: string; email: string }

function Game({ params }: { params: { id: string } }) {
    const [board, setBoard] = useState<GameBoard>(new GameBoard())
    const [movingPiece, setMovingPiece] = useState<{
        piece: GamePiece
        coord: CoordinationType
    } | null>(null)
    const [status, setStatus] = useState<HubConnectionState>(
        HubConnectionState.Disconnected
    )
    const { user } = useStore()
    const {
        data: room,
        isLoading,
        isError,
        error,
        refetch,
    } = useGetRoomById(params.id)

    const [messages, setMessages] = useState<MessageProps[]>([])

    const isPlayer =
        user?.id === room?.hostUser?.id || user?.id === room?.opponentUser?.id

    const { connection } = useSignalR(
        `https://cotuong.azurewebsites.net/hubs/game?roomCode=${params.id}`,
        {
            accessTokenFactory: () => {
                return localStorageService.get(StoreKeys.ACCESS_TOKEN, '')
            },
            withCredentials: true,
        }
    )

    useEffect(() => {
        connection.on('error', (e) => {
            console.log('ws error', e)
        })

        connection.on('connected', (e) => {
            console.log('ws', e)
        })

        connection.on('LoadBoard', (message: Matrix<GamePiece | null>) => {
            setBoard((b) => b.setSquares(message))
        })

        connection.on(
            'Moved',
            (
                source: CoordinationType,
                destination: CoordinationType,
                isNotRed: boolean
            ) => {
                setBoard((b) => b.move(source, destination))
            }
        )

        connection.on(
            'Chatted',
            (messageContent: string, roomCode: string, userDto: UserDto) => {
                setMessages((a) => [
                    ...a,
                    {
                        content: messageContent,
                        displayName: userDto.userName,
                        me: user ? user.id === userDto.id : false,
                        system: false,
                    },
                ])
            }
        )

        connection.on('Joined', (userDto: UserDto) => {
            if (status !== HubConnectionState.Connected)
                setStatus(HubConnectionState.Connected)

            refetch()
            setMessages((a) => [
                ...a,
                {
                    content: `${userDto.userName} joined.`,
                    displayName: 'Thịt nướng',
                    system: true,
                    badge: 'system',
                },
            ])
        })

        connection.on('Left', (userDto: UserDto) => {
            refetch()
            setMessages((a) => [
                ...a,
                {
                    content: `${userDto.userName} left.`,
                    displayName: `Thịt nướng`,
                    system: true,
                    badge: 'system',
                },
            ])
        })
    }, [])

    useEffect(() => {
        setStatus(connection.state)
    }, [connection, connection.state])

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
            
            if (movingPiece.piece.isValidMove({ x: cellX, y: cellY }, board)) {
                // setBoard((b) =>
                //     b.movePiece(movingPiece.piece, { x: cellX, y: cellY })
                // )
                connection.send('Move', {
                    source: movingPiece.coord,
                    destination: { x: cellX, y: cellY },
                })
            }
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

    if (!user) return null

    if (isLoading) {
        return (
            <WaitingContainer>
                <LoadingBBQ />
                <span>{'Đang tải thông tin phòng...'}</span>
            </WaitingContainer>
        )
    }

    if (error && isError && !isLoading) {
        return (
            <WaitingContainer>
                <span>{'Đã có lỗi xảy ra...'}</span>
                <span>{(error as AxiosError).message}</span>
            </WaitingContainer>
        )
    }

    if (!room) {
        return (
            <WaitingContainer>
                <span>{'Phòng không tồn tại...'}</span>
            </WaitingContainer>
        )
    }

    if (status === HubConnectionState.Connecting) {
        return (
            <WaitingContainer>
                <LoadingBBQ />
                <span>{'Đang kết nối đến phòng...'}</span>
            </WaitingContainer>
        )
    }

    if (status === HubConnectionState.Reconnecting) {
        return (
            <WaitingContainer>
                <span>{`Đang kết nối lại...`}</span>
            </WaitingContainer>
        )
    }

    if (status === HubConnectionState.Disconnecting) {
        return (
            <WaitingContainer>
                <span>{`Đang ngắt kết nối...`}</span>
            </WaitingContainer>
        )
    }

    if (status === HubConnectionState.Disconnected) {
        return (
            <WaitingContainer>
                <span>{`Mất kết nối...`}</span>
            </WaitingContainer>
        )
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
                        className="h-full space-y-2 col-span-2 pb-2"
                    >
                        <div className={'h-1/2'}>
                            <MenuBox
                                roomCode={params.id}
                                viewCount={
                                    room.countUser - 2 <= 0
                                        ? 0
                                        : room.countUser - 2
                                }
                            />
                        </div>
                        <div className={'h-1/2 max-h-[400px]'}>
                            <ChatBox
                                messages={messages}
                                handleSend={(message) => {
                                    connection.send('Chat', message)
                                }}
                            />
                        </div>
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
                        {isPlayer ? (
                            <>
                                <PlayerArea
                                    playerIndex={1}
                                    userName={
                                        user.id !== room.hostUser?.id
                                            ? room.hostUser?.userName
                                            : user.id !== room.opponentUser?.id
                                            ? room.opponentUser?.userName
                                            : undefined
                                    }
                                />
                                <PlayerArea
                                    playerIndex={2}
                                    userName={user.userName}
                                />
                            </>
                        ) : (
                            <>
                                <PlayerArea
                                    playerIndex={1}
                                    userName={room.hostUser?.userName}
                                />
                                <PlayerArea
                                    playerIndex={2}
                                    userName={room.opponentUser?.userName}
                                />
                            </>
                        )}
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
