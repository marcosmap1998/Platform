export const namespaced = true

export const state = () => ({
  assistant: null,
  currentMessage: '',
  messages: [],
})

export const mutations = {
  SET_ASSISTANT_DATA(state, data) {
    state.assistant = data
  },
  SET_CURRENT_MESSAGE_DATA(state, data) {
    state.currentMessage = data
  },
  SET_MESSAGES_DATA(state, data) {
    state.currentJob = data
  },
  ADD_MESSAGES_DATA(state, data) {
    state.currentJob.push(data)
  },
}

export const actions = {
  async createAssistant({ commit }) {
    const assistant = await ''
    return assistant
  },
  async sendMessage({ commit }) {
    try {
      const mvar = await ''
      return mvar
    } catch (error) {
      throw new Error(error)
    }
  },
}
