import { useQuery } from '@tanstack/react-query'
import roomApi from './room.service'

function useGetRoomById(id: string) {
    return useQuery([`get/rooms/${id}`], {
        queryFn: () => roomApi.getRoomById(id),
    })
}

export default useGetRoomById
