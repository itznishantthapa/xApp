// src/service/api.js
import axios from 'axios';

const BASE_URL = 'http://192.168.1.68:8000';

export const API = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

// All endpoints in dictionary style
const endpoints = {
  signup: '/signup/',
  // add more here...
};

export const AuthAPI = {
  signup: (data) => API.post(endpoints.signup, data),
  login: (data) => API.post(endpoints.login, data),
  getUser: (token) => API.get(endpoints.userInfo, {
    headers: { Authorization: `Bearer ${token}` }
  })
};
