import axios from 'axios';
const BASE_URL = 'http://192.168.1.67:8000';
// const BASE_URL = 'http://192.168.1.104:8000';


export const API = axios.create({
  baseURL: BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});


/*
  Declaring all the endpoints we will use in the application.
  This allows us to easily manage and update the endpoints in one place.
*/
const endpoints = {
  signup: '/signup/',
  // add more here...
};



/*
  AuthAPI contains methods for user authentication.
  Each method corresponds to an endpoint defined above.
  You can customize these methods to include addational headers or parameters as needed.
  Eg.
  
  uploadFormData: (formData, token) => API.post(endpoint, formData, {
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'multipart/form-data'
    }
  })
*/
export const AuthAPI = {
  signup: (data) => API.post(endpoints.signup, data),
  login: (data) => API.post(endpoints.login, data),
  getUser: (token) => API.get(endpoints.userInfo, {
    headers: { Authorization: `Bearer ${token}` }
  }),
};
