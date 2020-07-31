import Cookies from 'js-cookie'
import * as Service from '../services/authService'
export const namespaced = true

export const state = () => ({
  token: undefined,
  loading: false,
})

export const mutations = {
  SET_TOKEN_DATA(state, data) {
    const cookieNameSession = process.env.COOKIE_SESSION
    Cookies.set(cookieNameSession, data)
    state.token = data
  },
  SET_LOADING_DATA(state, data) {
    state.loading = data
  },
}

export const actions = {
  logout({ commit }) {
    commit('SET_TOKEN_DATA', undefined)
    this.$router.push('/')
  },
  async login({ commit }, data) {
    try {
      const res = await Service.login(data)
      if (res.status === 200) {
        commit('SET_TOKEN_DATA', res.data.token)
        this.$router.push('/home')
      }
    } catch (e) {
      throw new Error(e)
    }
  },
  async register({ commit }, data) {
    try {
      const res = await Service.register(data)
      if (res.status === 200) {
        commit('SET_LOADING_DATA', true)
      }
    } catch (e) {
      throw new Error(e)
    }
  },
  async checkSession({ commit, state }) {
    const cookieNameSession = process.env.COOKIE_SESSION
    commit('SET_TOKEN_DATA', Cookies.get(cookieNameSession))
    try {
      const res = await Service.validateToken({ token: state.token })
      if (res.data.isValid === false) {
        this.$router.push('/')
        commit('SET_TOKEN_DATA', undefined)
      }
    } catch (e) {
      throw new Error(e)
    }
  },
}
