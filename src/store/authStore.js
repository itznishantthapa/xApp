// src/store/authStore.js
import { create } from 'zustand';
import { getStoredUser, logoutUser, signupUser } from '../service/authService';


export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  isAdmin: false,
  isCustomer: false,
  isInitialized: false,

  initAuth: async () => {
    const user = await getStoredUser();
    set({
      isInitialized: true,
      user,
      isAuthenticated: !!user,
      isAdmin: user?.role === 'admin',
      isCustomer: user?.role === 'customer',
    });
  },

  signup: async (payload) => {
    const user = await signupUser(payload);
    set({
      isInitialized: true,
      user,
      isAuthenticated: true,
      isAdmin: user?.role === 'admin',
      isCustomer: user?.role === 'customer',
    });
  },

  logout: async () => {
    await logoutUser();
    set({
      user: null,
      isAuthenticated: false,
      isAdmin: false,
      isCustomer: false,
      isInitialized: true,
    });
  },
}));
