import { useMutation } from '@tanstack/react-query'
import roomApi from './room.service'
import { RoomJoinLeaveRequest } from './room.types'

function useJoinRoom() {
    return useMutation({
        mutationFn: (data: RoomJoinLeaveRequest) => roomApi.joinRoom(data),
    })
}

export default useJoinRoom
