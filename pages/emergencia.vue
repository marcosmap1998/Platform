<template>
  <div class="general-container">
    <b-container>
      <b-row class="justify-content-center">
        <b-col lg="8" class="text-center">
          <h2>¿Cuál es la emergencia?</h2>
          <p>
            Da clic en el botón según tu emergencia y te pondremos en
            contacto...
          </p>
          <div class="guias-container">
            <button class="btn mx-2 guia1">
              <img
                src="./img/IMG_Inundaciones.png"
                alt="Guía contra inundación"
                class="img-fluid"
              />
            </button>
            <button class="btn mx-2 guia2">
              <img
                src="./img/IMG_Incendios.png"
                alt="Guía contra incendio"
                class="img-fluid"
              />
            </button>
            <button class="btn mx-2 guia3">
              <img
                src="./img/IMG_Huracanes.png"
                alt="Guía contra huracán"
                class="img-fluid"
              />
            </button>
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
.guias-container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}

.guia1,
.guia2,
.guia3 {
  width: 20%;
  height: 10vw;
  border-radius: 15px;
  font-size: 4em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.guia1 img,
.guia2 img,
.guia3 img {
  width: 100%;
  height: 100%;
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
    height: 13vw;
  }
}

@media screen and (max-width: 800px) {
  .guia1,
  .guia2,
  .guia3 {
    width: 18%;
  }
}

@media screen and (max-width: 767px) {
  .guia1,
  .guia2,
  .guia3 {
    width: 25%;
    height: 18vh;
  }

  .card-emergencia {
    width: 60%;
  }

  .card-emergencia h3 {
    font-size: 26px;
  }
}

@media screen and (max-width: 500px) {
  .guia1,
  .guia2,
  .guia3 {
    width: 30%;
    height: 22vw;
    margin-bottom: 15px;
  }

  h2 {
    font-size: 28px;
  }

  p {
    margin: 0 auto;
    margin-bottom: 15px;
    width: 80%;
    font-size: 15px;
  }
}
</style>
