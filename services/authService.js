import axios from 'axios'

export const login = (data) => {
  return axios
    .post(`${process.env.AUTH_API_URL}/login`, data)
    .then((resp) => resp)
    .catch((error) => error)
}

export const register = (data) => {
  return axios
    .post(`${process.env.AUTH_API_URL}/register`, data)
    .then((resp) => resp)
    .catch((error) => error)
}

export const validateToken = (data) => {
  return axios
    .post(`${process.env.AUTH_API_URL}/`, data)
    .then((resp) => resp)
    .catch((error) => error)
}
