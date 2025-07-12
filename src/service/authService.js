// src/service/authService.js
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthAPI } from './apis';
import Toast from 'react-native-simple-toast';



export const signupUser = async (payload) => {
  try {
    const response = await AuthAPI.signup(payload);
    const { tokens, user } = response.data;

    await AsyncStorage.multiSet([
      ['@access_token', tokens.access],
      ['@refresh_token', tokens.refresh],
      ['@user', JSON.stringify(user)]
    ]);
    console.log('Data stored successfully in AsyncStorage');

    // Show success toast
    Toast.show('Signup Successful!');

    return user;
  } catch (error) {
    console.error('Error storing data in AsyncStorage:', error);
    throw error;
  }
};

export const getStoredUser = async () => {
  const token = await AsyncStorage.getItem('@access_token');
  const user = await AsyncStorage.getItem('@user');
  console.log('local user', user)
  return token && user ? JSON.parse(user) : null;
};

export const logoutUser = async () => {
  await AsyncStorage.multiRemove(['@access_token', '@refresh_token', '@user']);
};
