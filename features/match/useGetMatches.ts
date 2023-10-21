import { useQuery } from '@tanstack/react-query'
import matchApi from './match.service'

function useGetMatches() {
    return useQuery([`get/matches`], {
        queryFn: () => matchApi.getMatches(),
    })
}

export default useGetMatches
