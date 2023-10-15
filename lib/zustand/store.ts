import { User } from '@/features/user/user.types'
import { create } from 'zustand'

interface State {
    authorized: boolean
    authorize: () => void
    unauthorize: () => void
    user: User | null
    setUser: (data: User) => void
    eraseUser: () => void
    volume: number
    increaseVolume: (by?: number) => void
    decreaseVolume: (by?: number) => void
    setVolume: (amount: number) => void
}

export const useStore = create<State>()((set) => ({
    authorized: false,
    authorize: () => set(() => ({ authorized: true })),
    unauthorize: () => set(() => ({ authorized: false })),
    user: null,
    setUser: (data) => set(() => ({ user: data })),
    eraseUser: () => set(() => ({ user: null })),
    volume: 0,
    increaseVolume: (by = 1) =>
        set((state) => ({
            volume: state.volume + by > 100 ? 100 : state.volume + by,
        })),
    decreaseVolume: (by = 1) =>
        set((state) => ({
            volume: state.volume - by < 0 ? 0 : state.volume - by,
        })),
    setVolume: (amount) => set(() => ({ volume: amount })),
}))
