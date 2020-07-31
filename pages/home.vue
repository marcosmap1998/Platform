<template>
  <div class="general-container">
    <b-container fluid>
      <b-row class="justify-content-center">
        <b-col lg="8" class="text-center">
          <h2>¿Qué necesitas?</h2>
          <div class="mt-4 cards-container">
            <nuxt-link class="btn card-help mb-3" to="/ayuda-durante">
              <h3 class="p-3 mt-2">
                Ayuda, tengo una emergencia
              </h3>
              <b-img
                src="./img/ICONO_EMERGENCIA.png"
                fluid
                right
                class="img-iconos"
                alt="Emergencia"
              ></b-img>
            </nuxt-link>
            <nuxt-link class="btn card-prepare mx-3" to="/ayuda-antes">
              <h3 class="p-3 mt-1">Prepárate</h3>
              <b-img
                src="./img/ICONO_PREPARATE.png"
                fluid
                right
                class="img-iconos"
                alt="Prepárate"
              ></b-img>
            </nuxt-link>
            <nuxt-link class="btn card-resolve mx-3" to="/salvi-nuestroBot">
              <h3 class="p-3 mt-1">
                Resuelve tus dudas con Salvi, nuestro Bot
              </h3>
              <b-img
                src="./img/ICONO_BOT.png"
                fluid
                right
                class="img-iconos"
                alt="Salvi"
              ></b-img>
            </nuxt-link>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
  },
  methods: {
    ...mapActions('authStore', ['checkSession']),
    goToPage(page) {
      this.$router.push({ name: page })
    },
  },
  created() {
    this.checkSession()
  },
}
</script>

<style scoped>
.img-iconos {
  width: 90px;
  height: 90px;
}

.cards-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
}

.card-resolve,
.card-help,
.card-prepare {
  border: 1px solid;
  border-radius: 15px;
}

.card-help {
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.card-prepare {
  width: 40%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.card-resolve {
  width: 47%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.card-help:hover {
  color: #f24726;
}

.card-prepare:hover {
  color: #1993f2;
}

@media screen and (max-width: 800px) {
  .card-prepare {
    width: 90%;
    margin-bottom: 15px;
  }

  .card-resolve {
    width: 90%;
  }
}

@media screen and (max-width: 550px) {
  h3 {
    font-size: 20px;
  }
}
</style>
