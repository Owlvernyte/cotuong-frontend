import useSWR from '@/lib/hooks/useSWR'
import userApi from './user.service'

function useUser(id: string) {
    return useSWR(`get/users/${id}`, () => userApi.getUserById(id))
}

export default useUser
