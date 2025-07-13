// src/store/authStore.js
import { create } from 'zustand';
import { getStoredUser, logoutUser, signupUser } from '../service/authService';


export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: true,
  isAdmin: false,
  isCustomer: false,


  initAuth: async () => {
    const user = await getStoredUser();
    set({
      user,
      isAuthenticated: !!user,
      isAdmin: user?.role === 'admin',
      isCustomer: user?.role === 'customer',

    });
  },

  signup: async (payload) => {
    const user = await signupUser(payload);
    set({
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
      isAdmin: false,
      isCustomer: false,
      isAuthenticated: false,
    });
  },
}));
