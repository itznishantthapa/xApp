import { create } from "zustand";

export const useStateStore = create((set)=>({
    isInitialized: true, // state
    setInitialized: (value) => set({ isInitialized: value }), // action
    isAuthenticated: false, // state
    setAuthenticated: (value) => set({ isAuthenticated: value }), // action
    isAdmin: false, // state
    setAdmin: (value) => set({ isAdmin: value }), // action
    isCustomer: false, // state
    setCustomer: (value) => set({ isCustomer: value }), // action

}))

