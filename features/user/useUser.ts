import useSWR from '@/lib/hooks/useSWR'
import userApi from './user.service'

function useUser(id: string) {
    return useSWR(id, (id) => userApi.getUserById(id))
}

export default useUser
