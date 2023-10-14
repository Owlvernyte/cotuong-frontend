import { User } from '@/features/user/user.types'
import { create } from 'zustand'

interface State {
    count: number
    increase: (by: number) => void
    authorized: boolean
    authorize: () => void
    unauthorize: () => void
    user: User | null
    setUser: (data: User) => void
    eraseUser: () => void
}

export const useStore = create<State>()((set) => ({
    count: 0,
    increase: (by) => set((state) => ({ count: state.count + by })),
    authorized: false,
    authorize: () => set(() => ({ authorized: true })),
    unauthorize: () => set(() => ({ authorized: false })),
    user: null,
    setUser: (data) => set(() => ({ user: data })),
    eraseUser: () => set(() => ({ user: null })),
}))
