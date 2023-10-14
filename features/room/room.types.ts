import { User } from '../user/user.types'

export type Room = {
    id: string
    code: string
    countUser: number
    password?: string
    hostUser?: User
    opponentUser?: User
    board?: Array<string>
}

export type RoomCreateRequest = {
    password?: string
    hostUserId: string
}
