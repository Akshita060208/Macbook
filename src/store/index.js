import {create} from 'zustand';

const useMacbookStore = create((set) => ({
    color: 'silver',
    setColor: (color) => set({ color }),

    scale: 0.08,
    setScale: (scale) => set({ scale }),

    reset: () => set({ color: 'silver', scale: 0.08 }),
}))

export default useMacbookStore;