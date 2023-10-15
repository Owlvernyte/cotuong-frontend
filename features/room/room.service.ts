'use client'
import HttpService from '@/lib/services/http.service'
import { Room, RoomCreateRequest, RoomJoinLeaveRequest } from './room.types'

class RoomApiService extends HttpService {
    createRoom(data: RoomCreateRequest) {
        return this.post<Room>('/rooms')
    }

    getRoomById(id: string) {
        return this.get<Room>(`/rooms/${id}`)
    }

    getRooms() {
        return this.get<Room[]>(`/rooms`)
    }

    joinRoom(data: RoomJoinLeaveRequest) {
        return this.post<void>('/rooms/join', data)
    }

    leaveRoom(data: RoomJoinLeaveRequest) {
        return this.post<void>('/rooms/leave', data)
    }
}

const roomApi = new RoomApiService()

export default roomApi
