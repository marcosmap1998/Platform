import axios from 'axios'

export const createSession = () => {
  return axios.get(`${process.env.CHAT_API_URL}/createSession`)
}

export const sendMessage = (data) => {
  return axios
    .post(`${process.env.CHAT_API_URL}/sendMessage`, data)
    .then((resp) => resp)
    .catch((error) => error)
}
