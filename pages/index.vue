<template>
  <div class="general-container index">
    <div class="index-page__container" :class="{ active: !isActive }">
      <b-container>
        <b-row class="justify-content-center">
          <b-col lg="4">
            <div class="index-page__menu">
              <div
                v-if="view == 1"
                class="index-element__container text-center"
              >
                <h1>aSalvo</h1>
                <button
                  v-show="!isRegister"
                  class="general-button orange mb-2"
                  @click="view = 3"
                >
                  Regístrate aquí
                </button>
                <button class="general-button blue mb-2" @click="view = 2">
                  Ya tengo cuenta
                </button>
                <button
                  v-if="isRegister"
                  class="index-element__button"
                  @click="view = 3"
                >
                  Regístrate aquí
                </button>
              </div>
              <div
                v-else-if="view == 2"
                class="index-element__container text-center"
              >
                <h1>aSalvo</h1>
                <form @submit="loginForm">
                  <input
                    v-for="(element, index) in loginInputs"
                    :key="index + 'loginForm'"
                    v-model="loginObj[element.input]"
                    class="index-element__input mb-2 pl-3"
                    :placeholder="element.placeholder"
                    :type="element.type ? element.type : 'text'"
                  />
                  <button class="general-button orange mb-2">
                    Ingresar
                  </button>
                </form>
              </div>
              <div v-else class="index-element__container text-center">
                <h1>aSalvo</h1>
                <form @submit="signUpForm">
                  <input
                    v-for="(element, index) in signUpInputs"
                    :key="index + 'signUpForm'"
                    v-model="signUpObj[element.input]"
                    class="index-element__input mb-2 pl-3"
                    :type="element.type ? element.type : 'text'"
                    :placeholder="element.placeholder"
                  />
                  <button class="general-button orange mb-2">
                    Ingresar
                  </button>
                </form>
              </div>
            </div>
          </b-col>
        </b-row>
      </b-container>
      <button v-if="view != 1" class="index-element__button" @click="view = 1">
        Regresar
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layout: 'index',
  middleware: ['check-auth'],
  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
  },
  data() {
    return {
      isActive: true,
      isRegister: false,
      view: 1,
      loginObj: {},
      signUpObj: {},
      loginInputs: [
        { placeholder: 'Correo', input: 'email' },
        { placeholder: 'Contraseña', input: 'password', type: 'password' },
      ],
      signUpInputs: [
        { placeholder: 'Nombre Completo', input: 'name' },
        { placeholder: 'Correo', input: 'email' },
        { placeholder: 'Telefóno', input: 'phone' },
        { placeholder: 'Contraseña', input: 'password', type: 'password' },
      ],
    }
  },
  computed: {
    loading: {
      get() {
        return this.$store.state.authStore.loading
      },
      set(value) {
        this.$store.commit('authStore/SET_LOADING_DATA', value)
      },
    },
  },
  watch: {
    view() {
      this.loginObj = {
        email: 'hrvo0298@gmail.com',
        password: '12345678',
      }
      this.signUpObj = {
        name: 'Hector Ruben Vazquez',
        email: 'hrvo0298@gmail.com',
        phone: '12345678',
        password: '12345678',
      }
    },
  },
  methods: {
    ...mapActions('authStore', ['login', 'register']),
    loginForm(e) {
      e.preventDefault()
      this.login(this.loginObj)
    },
    async signUpForm(e) {
      e.preventDefault()
      await this.register(this.signUpObj)
      if (this.loading) {
        this.isRegister = true
        this.view = 1
        this.loading = false
      }
    },
  },
}
</script>

<style>
.general-container.index {
  width: 100vw;
  height: 100vh;
}

.index-page__container {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  position: relative;
  flex-direction: column;
}

.index-page__container::after {
  content: '';
  position: absolute;
  transform: translate(-50%, -50%);
  z-index: -1;
  width: 150vw;
  height: 150vw;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  background-color: var(--blue1);
  transition: width 0.4s ease, height 0.4s ease, opacity 0.4s ease;
}

.index-page__container.active::after {
  width: 10vw;
  height: 10vw;
  opacity: 0;
}

.index-element__button {
  justify-self: self-end;
  border: inherit;
  background: rgba(0, 0, 0, 0);
  color: var(--blue4);
}

.index-element__input {
  font-size: 1.4rem;
  width: 100%;
  padding: 0.7rem 0;
  border-radius: 13px;
  border: var(--gray3) 0.1rem solid;
}
</style>
