'use client'
import HttpService from '@/lib/services/http.service'
import { Room } from './room.types'

class RoomApiService extends HttpService {
    createRoom(data: Room) {
        return this.post<Room>('/rooms')
    }

    deleteRoom(id: string) {
        return this.delete(`/rooms/${id}`)
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
