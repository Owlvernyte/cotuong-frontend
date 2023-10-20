import { useQuery } from '@tanstack/react-query'
import userApi from './user.service'

function useCheckAuthorization() {
    return useQuery([`checkAuthorization`], {
        queryFn: () => userApi.checkAuthorization(),
        keepPreviousData: true,
    })
}

export default useCheckAuthorization
