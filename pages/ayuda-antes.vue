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
          <div class="cards-container">
            <nuxt-link to="/preparate-inundacion" class="btn mx-2 guia1">
              <b-img
                src="./img/IMG_Inundaciones.png"
                fluid
                center
                class="img-iconos"
                alt="Guía de inundación"
              ></b-img>
            </nuxt-link>
            <nuxt-link to="/preparate-incendio" class="btn mx-2 guia2">
              <b-img
                src="./img/IMG_Incendios.png"
                fluid
                center
                class="img-iconos"
                alt="Guía de incendio"
              ></b-img>
            </nuxt-link>
            <nuxt-link to="/preparate-huracan" class="btn mx-2 guia3">
              <b-img
                src="./img/IMG_Huracanes.png"
                fluid
                center
                class="img-iconos"
                alt="Guía de huracán"
              ></b-img>
            </nuxt-link>
          </div>
          <div class="justify-content-center mt-4">
            <b-card-group
              columns
              class="mt-3 d-flex flex-row flex-wrap justify-content-center"
            >
              <button class="btn card-tel">
                <h3 class="p-3 mt-1">Teléfonos de emergencia</h3>
                <b-img
                  src="./img/ICONO_TELEFONO_2.png"
                  fluid
                  right
                  class="img-iconos2"
                  alt="Guía de inundación"
                ></b-img>
              </button>
              <button class="btn card-dudas">
                <h3 class="p-3 mt-1">
                  Resuelve tus dudas con Salvi, nuestro Bot
                </h3>
                <b-img
                  src="./img/ICONO_BOT.png"
                  fluid
                  right
                  class="img-iconos2"
                  alt="Salvi"
                ></b-img>
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
.cards-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.img-iconos {
  width: 100%;
  height: 100%;
}

.img-iconos2 {
  width: 90px;
  height: 90px;
}

.card-tel {
  width: 45%;
  border: 1px solid;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.card-tel:hover,
.card-dudas:hover {
  color: #707070;
}

.card-dudas {
  width: 45%;
  border: 1px solid;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.guia1,
.guia2,
.guia3 {
  width: 23%;
  height: 11vw;
  border-radius: 15px;
  align-items: center;
}

.guia1 {
  background: #12cdd4;
}

.guia2 {
  background: #f24726;
}

.guia3 {
  background: #1993f2;
}

@media screen and (max-width: 900px) {
  .guia1,
  .guia2,
  .guia3 {
    height: 15vw;
  }
}

@media screen and (max-width: 800px) {
  .guia1,
  .guia2,
  .guia3 {
    width: 18%;
    height: 13vw;
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
    height: 13vw;
  }

  .card-tel,
  .card-dudas {
    margin-bottom: 15px;
    width: 90%;
  }

  .card-tel h3,
  .card-dudas h3 {
    font-size: 22px;
  }
}

@media screen and (max-width: 600px) {
  .guia1,
  .guia2,
  .guia3 {
    height: 15vw;
  }
}

@media screen and (max-width: 500px) {
  .guia1,
  .guia2,
  .guia3 {
    height: 18vw;
  }
}

@media screen and (max-width: 450px) {
  .guia1,
  .guia2,
  .guia3 {
    width: 25%;
    height: 20vw;
  }

  .card-dudas,
  .card-tel {
    width: 100%;
    margin: 0 auto;
    margin-bottom: 15px;
  }

  .card-tel h3,
  .card-dudas h3 {
    font-size: 18px;
  }
}
</style>
