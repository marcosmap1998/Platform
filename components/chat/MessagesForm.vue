<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col lg="8">
        <div class="text-center message">
          <div class="mensaje">
            <input
              v-model="message"
              type="text"
              class="form-control"
              @keyup.enter="sendMessage"
            />
          </div>
          <div class="btn-enviar">
            <button class="btn" @click="sendMessage()">
              Enviar
            </button>
          </div>
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

<style>
.message {
  display: flex;
  flex-direction: row;
  justify-content: center;
}

.mensaje {
  width: 80%;
}

.btn-enviar {
  width: 20%;
}

.btn-enviar button {
  background-color: #fb8645;
  color: #fff;
}

.btn-enviar button:hover {
  background-color: #fff;
  border: 1px solid #fb8645;
  color: #fb8645;
}
</style>
