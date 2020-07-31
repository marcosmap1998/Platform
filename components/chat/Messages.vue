<template>
  <b-container>
    <b-row class="justify-content-center">
      <b-col lg="8">
        <div class="chat overflow-auto">
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
  background-color: #1993f2;
  align-self: flex-end;
  border-radius: 15px;
}

.chat {
  margin-top: 15px;
  margin-bottom: 15px;
  height: 250px;
}

.chat ul {
  width: 100%;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-direction: column;
}

.chat ul li {
  padding: 10px;
}

.bot {
  background-color: #fb8645;
  align-self: flex-start;
  border-radius: 15px;
}
</style>
