<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col lg="8">
        <div>
          <ul>
            <li
              v-for="(message, index) in messages"
              :key="index + 'message'"
              class="mb-2"
              :class="[message.origin == 'user' ? 'user' : 'bot']"
            >
              {{ message.origin == 'user' ? 'Yo:' : 'Bot:' }} {{ message.text }}
            </li>
          </ul>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('chatStore', ['messages']),
  },
}
</script>

<style>
.user {
  background-color: aliceblue;
}

.bot {
  background-color: darksalmon;
}
</style>
