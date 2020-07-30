<template>
  <div class="general-container">
    <b-container>
      <b-row class="justify-content-center">
        <b-col lg="8">
          <div class="text-center">
            <h1>Chat - {{ assistantID }}</h1>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <CMessages />
    <CMessagesForm />
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
