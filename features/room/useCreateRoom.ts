import { useMutation } from '@tanstack/react-query'
import roomApi from './room.service'
import { RoomCreateRequest } from './room.types'

function useCreateRoom() {
    return useMutation({
        mutationFn: (data: RoomCreateRequest) => roomApi.createRoom(data),
    })
}

export default useCreateRoom
