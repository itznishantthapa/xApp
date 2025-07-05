import { create } from "zustand";

export const useUserStore = create((set)=>({
  user: null,                            // state
  setUser: (user) => set({ user }),      // action
  clearUser: () => set({ user: null }),  // another action
}))