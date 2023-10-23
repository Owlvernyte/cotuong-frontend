'use client'

import LoadingBBQ from '@/components/ui/LoadingBBQ'
import useGetRoomById from '@/features/room/useGetRoomById'
import { User } from '@/features/user/user.types'
import GameBoard from '@/lib/game/Board'
import GamePiece from '@/lib/game/QuanCo/Piece'
import useSignalR from '@/lib/hooks/useSignalR'
import {
    DndContext,
    DragEndEvent,
    DragOverlay,
    DragStartEvent,
} from '@dnd-kit/core'
import { HubConnectionState } from '@microsoft/signalr'
import { AxiosError } from 'axios'
import { enqueueSnackbar } from 'notistack'
import { useCallback, useEffect, useRef, useState } from 'react'
import Board from './Board'
import Cell from './Cell'
import ChatBox from './LeftArea/ChatBox'
import { MessageProps } from './LeftArea/ChatBubble'
import MenuBox from './LeftArea/MenuBox'
import Piece, { DraggablePiece } from './Piece'
import PlayerArea from './RightArea/PlayerArea'
import WaitingContainer from './WaitingContainer'

type GameProps = {
    roomCode: string
    accessToken: string
    user: User
}

type UserDto = { id: string; userName: string; email: string }
const systemDisplayName = 'Thịt nướng'
const systemMsgProps = {
    displayName: systemDisplayName,
    system: true,
    badge: 'system',
}

function Game({ roomCode, accessToken, user }: GameProps) {
    const audioMsgRef = useRef<HTMLAudioElement>(null)
    const audioWonRef = useRef<HTMLAudioElement>(null)
    const [board, setBoard] = useState<GameBoard>(new GameBoard())
    const [movingPiece, setMovingPiece] = useState<{
        piece: GamePiece
        coord: CoordinationType
    } | null>(null)
    const [status, setStatus] = useState<HubConnectionState>(
        HubConnectionState.Disconnected
    )
    const {
        data: room,
        isLoading,
        isError,
        error,
        refetch,
    } = useGetRoomById(roomCode)
    const isHost = user?.id === room?.hostUser?.id
    const isOpponent = user?.id === room?.opponentUser?.id
    const isPlayer = isHost || isOpponent
    const [messages, setMessages] = useState<MessageProps[]>([])
    const { connection } = useSignalR(
        `https://cotuong.azurewebsites.net/hubs/game?roomCode=${roomCode}`,
        {
            accessTokenFactory: () => {
                return accessToken
            },
            withCredentials: true,
        }
    )

    const isUserTurn =
        isPlayer &&
        (() => {
            // Neu luot cua mau do
            if (board.isRedTurn) {
                // Neu user la host do
                if (
                    (isHost && board.isHostRed) ||
                    // Neu user la guest do
                    (!isHost && !board.isHostRed)
                )
                    return true
            }
            // Neu luot cua xanh/den
            else {
                // Neu user la host xanh
                if (
                    (isHost && !board.isHostRed) ||
                    // Neu user la guest xanh
                    (!isHost && board.isHostRed)
                )
                    return true
            }
            return false
        })()

    const isBoardReversed: boolean = !(!isPlayer
        ? !board.isHostRed
        : (board.isHostRed && isHost) || (!board.isHostRed && !isHost))

    useEffect(() => {
        connection.on('error', (e) => {
            console.log('ws error', e)
        })

        connection.on('connected', (e) => {
            console.log('ws', e)
        })

        connection.on(
            'LoadBoard',
            (
                squares: Matrix<GamePiece | null>,
                isHostRed: boolean,
                isRedTurn: boolean
            ) => {
                setBoard(
                    new GameBoard({
                        squares,
                        isHostRed,
                        isRedTurn,
                    })
                )
            }
        )

        connection.on(
            'Moved',
            (
                source: CoordinationType,
                destination: CoordinationType,
                isRedTurn: boolean
            ) => {
                setBoard((b) => b.move(source, destination, isRedTurn))
            }
        )

        connection.on(
            'MoveFailed',
            (source: CoordinationType, destination: CoordinationType) => {
                enqueueSnackbar('Di chuyển thất bại', {
                    variant: 'error',
                })
            }
        )

        connection.on('Ended', (isRed: boolean, winUser: UserDto) => {
            setMessages((a) => [
                ...a,
                {
                    content: `${winUser.userName} thắng!`,
                    ...systemMsgProps,
                },
            ])
            audioWonRef.current?.play()
            enqueueSnackbar(`${winUser.userName} thắng!`, {
                variant: 'warning',
            })
        })

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
                if (userDto.id !== user?.id) audioMsgRef.current?.play()
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
                    ...systemMsgProps,
                },
            ])
        })

        connection.on('Left', (userDto: UserDto) => {
            refetch()
            setMessages((a) => [
                ...a,
                {
                    content: `${userDto.userName} left.`,
                    ...systemMsgProps,
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

    const handleDragEnd = useCallback(
        function handleDragEnd(event: DragEndEvent) {
            if (!movingPiece?.coord || !movingPiece?.piece || !event.over?.id) {
                return
            }

            const sourceCoord = movingPiece.coord
            const [cellX, cellY] = event.over.id
                .toString()
                .split('_')
                .map(Number)
            const destinationCoord = {
                x: cellX,
                y: cellY,
            }

            // const potentialExistingPiece = board.squares[cellY][cellX]

            setMovingPiece(null)

            if (
                sourceCoord.x === destinationCoord.x &&
                sourceCoord.y === destinationCoord.y
            ) {
                return
            }

            if (!movingPiece.piece.isValidMove(destinationCoord, board)) {
                // setBoard((b) =>
                //     b.movePiece(movingPiece.piece, { x: cellX, y: cellY })
                // )
                return enqueueSnackbar('Nước đi không hợp lệ!', {
                    variant: 'error',
                })
            }

            connection.send('Move', {
                source: sourceCoord,
                destination: destinationCoord,
            })
        },
        [board, connection, movingPiece]
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

    const handleStartPressed = useCallback(() => {
        connection.send('NewGame')
    }, [connection])

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

    const RenderedSquares = () => {
        const squares = board.squares.map((row, i) =>
            row.map((cell, j) => {
                if (!cell) {
                    return (
                        <Cell
                            key={`cell_${i}_${j}`}
                            id={`${i}_${j}`}
                            x={i}
                            y={j}
                        ></Cell>
                    )
                }

                if (!isUserTurn) {
                    return (
                        <Cell
                            key={`cell_${i}_${j}`}
                            id={`${i}_${j}`}
                            x={i}
                            y={j}
                        >
                            <Piece
                                id={cell.id}
                                target={cell}
                                position={cell.coord}
                                title={'Cant move'}
                                disabled
                                draggable={false}
                            />
                        </Cell>
                    )
                }

                if (board.isRedTurn === cell.isRed) {
                    return (
                        <Cell
                            key={`cell_${i}_${j}`}
                            id={`${i}_${j}`}
                            x={i}
                            y={j}
                        >
                            <DraggablePiece
                                id={cell.id}
                                target={cell}
                                position={cell.coord}
                                title={'Movable'}
                            />
                        </Cell>
                    )
                }

                return (
                    <Cell key={`cell_${i}_${j}`} id={`${i}_${j}`} x={i} y={j}>
                        <Piece
                            id={cell.id}
                            target={cell}
                            position={cell.coord}
                            title={'Cant move'}
                            disabled
                            draggable={false}
                        />
                    </Cell>
                )
            })
        )

        return isBoardReversed
            ? squares.map((row) => row.reverse()).reverse()
            : squares
    }

    return (
        <DndContext
            onDragStart={handleDragStart}
            onDragCancel={handleDragCancel}
            onDragEnd={handleDragEnd}
        >
            <audio ref={audioMsgRef} src="/sfx/msg.mp3"></audio>
            <audio ref={audioWonRef} src="/sfx/won.mp3"></audio>
            <div className="h-full space-y-2 flex flex-col">
                <div className="grid grid-cols-8 gap-2 grid-flow-row-dense flex-1">
                    <div
                        id="left-area"
                        className="h-full space-y-2 col-span-2 pb-2"
                    >
                        <div className={'h-1/2'}>
                            <MenuBox
                                handleStartPressed={handleStartPressed}
                                roomCode={roomCode}
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
                        <RenderedSquares />
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
                                        !isHost
                                            ? room.hostUser?.userName
                                            : !isOpponent
                                            ? room.opponentUser?.userName
                                            : undefined
                                    }
                                    label={
                                        isUserTurn
                                            ? 'ĐANG CHỜ TỚI LƯỢT'
                                            : undefined
                                    }
                                />
                                <PlayerArea
                                    playerIndex={2}
                                    userName={user.userName}
                                    label={
                                        !isUserTurn
                                            ? 'ĐANG CHỜ TỚI LƯỢT'
                                            : undefined
                                    }
                                />
                            </>
                        ) : (
                            <>
                                <PlayerArea
                                    playerIndex={1}
                                    userName={room.hostUser?.userName}
                                    label={
                                        board.isRedTurn && board.isHostRed
                                            ? undefined
                                            : !board.isRedTurn &&
                                              !board.isHostRed
                                            ? undefined
                                            : 'ĐANG CHỜ TỚI LƯỢT'
                                    }
                                />
                                <PlayerArea
                                    playerIndex={2}
                                    userName={room.opponentUser?.userName}
                                    label={
                                        board.isRedTurn && !board.isHostRed
                                            ? undefined
                                            : 'ĐANG CHỜ TỚI LƯỢT'
                                    }
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
