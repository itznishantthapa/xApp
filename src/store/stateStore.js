import { create } from "zustand";

export const useStateStore = create((set)=>({
    isInitialized: false, // state
    setInitialized: (value) => set({ isInitialized: value }), // action
    isAdmin: false, // state
    setAdmin: (value) => set({ isAdmin: value }), // action
    isCustomer: false, // state
    setCustomer: (value) => set({ isCustomer: value }), // action
    isActivity:false,
    setActivity:(value)=>set({isActivity:value})

}))

