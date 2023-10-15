import { useQuery } from '@tanstack/react-query'
import roomApi from './room.service'

function useGetRooms() {
    return useQuery([`get/rooms`], {
        queryFn: () => roomApi.getRooms(),
    })
}

export default useGetRooms
