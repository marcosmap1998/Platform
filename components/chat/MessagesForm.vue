<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col lg="8">
        <div class="text-center">
          <input v-model="message" type="text" @keyup.enter="sendMessage" />
          <button @click="sendMessage()">
            Enviar
          </button>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('chatStore', ['sendMessage']),
  },
  computed: {
    message: {
      get() {
        return this.$store.state.chatStore.currentMessage
      },
      set(value) {
        this.$store.commit('chatStore/SET_CURRENT_MESSAGE_DATA', value)
      },
    },
  },
}
</script>
