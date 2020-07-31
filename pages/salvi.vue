<template>
  <div class="general-container">
    <b-container>
      <b-row class="justify-content-center">
        <b-col lg="8 d-flex flex-column">
          <div class="text-center">
            <h2>Resuelve tus dudas</h2>
          </div>
          <div v-if="!isMessage" class="text-center">
            <b-button
              class="general-button mt-4 btn-comenzar"
              size="lg"
              @click="isMessage = !isMessage"
            >
              Comenzar
            </b-button>
          </div>
          <div v-if="isMessage">
            <CMessages />
            <CMessagesForm />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import CMessages from '@/components/chat/Messages'
import CMessagesForm from '@/components/chat/MessagesForm'

export default {
  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
  },
  components: {
    CMessages,
    CMessagesForm,
  },
  data() {
    return {
      isMessage: false,
    }
  },
  computed: {
    ...mapState('chatStore', ['assistantID']),
  },
  methods: {
    ...mapActions('chatStore', ['getAssistantData']),
    ...mapActions('authStore', ['checkSession']),
  },
  created() {
    this.checkSession()
  },
  mounted() {
    this.getAssistantData()
  },
}
</script>

<style scoped>
.btn-comenzar {
  width: 37%;
  color: #fff;
  background: #fb8645;
  border-color: #fb8645;
}

.btn-comenzar:hover {
  background: #fff;
  color: #fb8645;
}

.regresar a {
  color: #000;
}

.regresar a:hover {
  color: #000;
  text-decoration: none;
}
</style>
