import { useQuery } from '@tanstack/react-query'
import userApi from './user.service'

function useUser() {
    const { data, isLoading } = useQuery([`checkAuthorization`], {
        queryFn: () => userApi.checkAuthorization(),
        keepPreviousData: true,
    })

    return { data, isLoading }
}

export default useUser
