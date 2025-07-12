// src/store/authStore.js
import { create } from 'zustand';
import { getStoredUser, logoutUser, signupUser } from '../service/authService';


export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,

  initAuth: async () => {
    const user = await getStoredUser();
    set({ user, isAuthenticated: !!user });
  },

  signup: async (payload) => {
    const user = await signupUser(payload);
    set({ user, isAuthenticated: true });
  },

  logout: async () => {
    await logoutUser();
    set({ user: null, isAuthenticated: false });
  }
}));
