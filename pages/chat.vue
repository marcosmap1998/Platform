<template>
  <div class="general-container">
    <b-container>
      <b-row class="justify-content-center">
        <b-col lg="8">
          <div class="text-center">
            <h1>Chat</h1>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <CMessages />
    <CMessagesForm />
  </div>
</template>

<script>
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
}
</script>
