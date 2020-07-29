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
                <button class="general-button orange mb-2" @click="view = 2">
                  Regístrate aquí
                </button>
                <button class="general-button blue mb-2" @click="view = 3">
                  Ya tengo cuenta
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
                    v-model="login[element.input]"
                    class="index-element__input mb-2 pl-3"
                    type="text"
                    :placeholder="element.placeholder"
                  />
                  <button class="general-button orange mb-2">
                    Ingresar
                  </button>
                  {{ login }}
                </form>
              </div>
              <div v-else class="index-element__container text-center">
                <h1>aSalvo</h1>
                <form @submit="signUpForm">
                  <input
                    v-for="(element, index) in signUpInputs"
                    :key="index + 'signUpForm'"
                    v-model="signUp[element.input]"
                    class="index-element__input mb-2 pl-3"
                    type="text"
                    :placeholder="element.placeholder"
                  />
                  <button class="general-button orange mb-2">
                    Ingresar
                  </button>
                  {{ signUp }}
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
export default {
  layout: 'index',
  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
  },
  data() {
    return {
      isActive: true,
      view: 1,
      login: {},
      signUp: {},
      loginInputs: [
        { placeholder: 'Correo', input: 'email' },
        { placeholder: 'Contraseña', input: 'password' },
      ],
      signUpInputs: [
        { placeholder: 'Nombre Completo', input: 'name' },
        { placeholder: 'Correo', input: 'email' },
        { placeholder: 'Telefóno', input: 'phone' },
        { placeholder: 'Contraseña', input: 'password' },
      ],
    }
  },
  watch: {
    view() {
      this.login = {}
      this.signUp = {}
    },
  },
  methods: {
    loginForm(e) {
      e.preventDefault()
    },
    signUpForm(e) {
      e.preventDefault()
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
