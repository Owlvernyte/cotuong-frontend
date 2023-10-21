import { useQuery } from '@tanstack/react-query'
import matchApi from './match.service'

function useGetMatchById(id: string) {
    return useQuery([`get/matches/${id}`], {
        queryFn: () => matchApi.getMatchById(id),
    })
}

export default useGetMatchById
