import { create } from 'zustand'

interface State {
    count: number
    increase: (by: number) => void
}

export const useStore = create<State>()((set) => ({
    count: 0,
    increase: (by) => set((state) => ({ count: state.count + by })),
}))
