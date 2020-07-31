<template>
  <div class="general-container">
    <b-container>
      <b-row class="justify-content-center">
        <b-col lg="8" class="text-center">
          <h2>¡Prepárate!</h2>
          <p>
            Descarga las guías de ayuda según el desastre que se pueda
            sucitar...
          </p>
          <div class="d-flex flex-row justify-content-center">
            <nuxt-link to="/preparate-inundacion" class="btn mx-2 guia1">
              <i class="fas fa-book-medical"></i>
            </nuxt-link>
            <nuxt-link to="/preparate-incendio" class="btn mx-2 guia2">
              <i class="fas fa-book-medical"></i>
            </nuxt-link>
            <nuxt-link to="/preparate-huracan" class="btn mx-2 guia3">
              <i class="fas fa-book-medical"></i>
            </nuxt-link>
          </div>
          <div class="justify-content-center mt-4">
            <b-card-group
              columns
              class="mt-3 d-flex flex-row flex-wrap justify-content-center"
            >
              <button class="btn card-tel">
                <h3 class="p-3 mt-1">Teléfono de emergencia</h3>
              </button>
              <button class="btn card-dudas">
                <h3 class="p-3 mt-1">
                  Resuelve tus dudas con Salvi, nuestro Bot
                </h3>
              </button>
            </b-card-group>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  layoutTransition: {
    name: 'layout',
    mode: 'out-in',
  },
}
</script>

<style scoped>
.card-tel {
  width: 45%;
  border: 1px solid;
  border-radius: 15px;
}

.card-tel:hover,
.card-dudas:hover {
  color: #707070;
}

.card-dudas {
  width: 45%;
  border: 1px solid;
  border-radius: 15px;
}

.guia1,
.guia2,
.guia3 {
  width: 23%;
  height: 10vw;
  border-radius: 15px;
  font-size: 4em;
}

.guia1 {
  background: #12cdd4;
}

.guia1:hover {
  border-width: 2px;
  background: #fff;
  border-color: #12cdd4;
  color: #12cdd4;
}

.guia2 {
  background: #f24726;
}

.guia2:hover {
  border-width: 2px;
  background: #fff;
  border-color: #f24726;
  color: #f24726;
}

.guia3 {
  background: #2862c7;
}

.guia3:hover {
  border-width: 2px;
  border-color: #2862c7;
  background: #fff;
  color: #2862c7;
}

@media screen and (max-width: 1000px) {
  .guia1,
  .guia2,
  .guia3 {
    font-size: 3em;
  }

  .preparate {
    margin-top: 15px;
  }
}

@media screen and (max-width: 800px) {
  .guia1,
  .guia2,
  .guia3 {
    width: 18%;
    height: 13vw;
    border-radius: 15px;
    font-size: 2.5em;
  }

  .card-tel h3,
  .card-dudas h3 {
    font-size: 25px;
  }

  .preparate {
    margin-top: 20px;
  }
}

@media screen and (max-width: 767px) {
  .guia1,
  .guia2,
  .guia3 {
    width: 23%;
    height: 12vw;
    border-radius: 15px;
    font-size: 2em;
  }

  .card-tel h3,
  .card-dudas h3 {
    font-size: 22px;
  }

  .preparate {
    margin-top: 20px;
  }
}

@media screen and (max-width: 630px) {
  .guia1,
  .guia2,
  .guia3 {
    width: 30%;
    height: 15vw;
    border-radius: 15px;
    font-size: 2em;
  }

  .card-dudas,
  .card-tel {
    width: 46%;
  }

  .card-tel h3,
  .card-dudas h3 {
    font-size: 20px;
  }

  .preparate {
    margin-top: 20px;
  }
}

@media screen and (max-width: 575px) {
  .guia1,
  .guia2,
  .guia3 {
    width: 25%;
    height: 18vw;
    border-radius: 15px;
    font-size: 2em;
  }

  .card-dudas,
  .card-tel {
    width: 40%;
    margin: 0 15px;
  }

  .card-tel h3,
  .card-dudas h3 {
    font-size: 20px;
  }

  .preparate {
    margin-top: 20px;
  }
}

@media screen and (max-width: 450px) {
  .guia1,
  .guia2,
  .guia3 {
    width: 25%;
    height: 20vw;
    border-radius: 15px;
    font-size: 1.5em;
  }

  .card-dudas,
  .card-tel {
    width: 80%;
    margin: 0 auto;
    margin-bottom: 15px;
  }

  .card-tel h3,
  .card-dudas h3 {
    font-size: 18px;
  }

  .preparate {
    margin-top: 20px;
  }
}
</style>
