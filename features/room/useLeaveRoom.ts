import { useMutation } from '@tanstack/react-query'
import roomApi from './room.service'
import { RoomJoinLeaveRequest } from './room.types'

function useLeaveRoom() {
    return useMutation({
        mutationFn: (data: RoomJoinLeaveRequest) => roomApi.leaveRoom(data),
    })
}

export default useLeaveRoom
