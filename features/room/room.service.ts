'use client'
import HttpService from '@/lib/services/http.service'
import { Room, RoomCreateRequest } from './room.types'

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
}

const roomApi = new RoomApiService()

export default roomApi
