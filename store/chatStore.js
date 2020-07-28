import Cookies from 'js-cookie'
import * as Service from '../services/chatService'
export const namespaced = true

export const state = () => ({
  assistantID: null,
  currentMessage: '',
  messages: [],
})

export const mutations = {
  SET_ASSISTANT_ID_DATA(state, data) {
    state.assistantID = data
  },
  SET_CURRENT_MESSAGE_DATA(state, data) {
    state.currentMessage = data
  },
  SET_MESSAGES_DATA(state, data) {
    state.messages = data
  },
  ADD_MESSAGE(state, data) {
    state.messages.push(data)
  },
}

export const actions = {
  async getAssistantData({ commit }) {
    const cookieNameAssistant = process.env.COOKIE_ASSISTANT
    if (!Cookies.get(cookieNameAssistant)) {
      try {
        const assistant = await Service.createSession()
        const assistantID = assistant.data.sessionid
        commit('SET_ASSISTANT_ID_DATA', assistantID)
        Cookies.set(cookieNameAssistant, assistantID)
      } catch (error) {
        throw new Error(error)
      }
    } else {
      commit('SET_ASSISTANT_ID_DATA', Cookies.get(cookieNameAssistant))
    }
  },
  async sendMessage({ commit, state, dispatch }) {
    if (state.currentMessage === '') {
      return
    }
    const cookieNameAssistant = process.env.COOKIE_ASSISTANT
    dispatch('addMessage', { text: state.currentMessage, origin: 'user' })
    try {
      const response = await Service.sendMessage({
        text: state.currentMessage,
        sessionid: state.assistantID,
      })
      switch (response.status) {
        case 200:
          commit('SET_CURRENT_MESSAGE_DATA', '')
          dispatch('botMessageHandler', response.data.result.generic)
          break
        default:
          Cookies.remove(cookieNameAssistant)
          dispatch('getAssistantData')
          dispatch('addMessage', {
            text: 'Oh, parece que hay un error, vuelve a intentarlo :)',
            origin: 'bot',
          })
          break
      }
    } catch (error) {
      throw new Error(error)
    }
  },
  addMessage({ commit }, data) {
    commit('ADD_MESSAGE', data)
  },
  botMessageHandler({ commit, dispatch }, data) {
    if (data.length === 0) {
      dispatch('addMessage', {
        text: 'No puedo responder a esto, intenta con algo mas :(',
        origin: 'bot',
      })
    } else {
      data.forEach((element) => {
        switch (element.response_type) {
          case 'text':
            dispatch('addMessage', {
              text: element.text,
              origin: 'bot',
            })
            break
          case 'option':
            dispatch('addMessage', {
              text: element.title,
              origin: 'bot',
            })
            element.options.forEach((option) => {
              dispatch('addMessage', {
                text: option.label,
                origin: 'bot',
                value: option.value,
              })
            })
            break
        }
      })
    }
  },
}
