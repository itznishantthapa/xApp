// src/store/authStore.js
import { create } from 'zustand';
import { getStoredUser, logoutUser, signupUser } from '../service/authService';


export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: true,
  isAdmin: false,
  isCustomer: false,
  isInitialized: false,
  


  initAuth: async () => {
    const user = await getStoredUser();
    set({
      user,
      isAuthenticated: !!user,
      isAdmin: user?.role === 'admin',
      isCustomer: user?.role === 'customer',
      isInitialized: true,

    });
  },

  signup: async (payload) => {
    const user = await signupUser(payload);
    set({
      user,
      isAuthenticated: true,
      isAdmin: user?.role === 'admin',
      isCustomer: user?.role === 'customer',
      isInitialized: true,

    });
  },

  logout: async () => {
    await logoutUser();
    set({
      user: null,
      isAdmin: false,
      isCustomer: false,
      isAuthenticated: false,
      isInitialized: true,
    });
  },
}));
