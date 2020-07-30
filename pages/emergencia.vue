<template>
  <div class="general-container">
    <b-row class="justify-content-center preparate">
      <b-col lg="8" class="text-center">
        <h2>¿Cuál es la emergencia?</h2>
        <p>
          Da clic en el botón según tu emergencia y te pondremos en contacto...
        </p>
        <div class="d-flex flex-row justify-content-center">
          <button class="btn mx-2 guia1">
            <i class="far fa-hospital"></i>
          </button>
          <button class="btn mx-2 guia2">
            <i class="far fa-hospital"></i>
          </button>
          <button class="btn mx-2 guia3">
            <i class="far fa-hospital"></i>
          </button>
        </div>
        <div class="justify-content-center mt-4">
          <button class="btn card-emergencia">
            <h3 class="p-3 mt-1">Otra emergencia</h3>
          </button>
        </div>
      </b-col>
    </b-row>
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
.preparate {
  margin-top: 70px;
}

.card-emergencia {
  width: 64%;
  border: 1px solid;
  border-radius: 15px;
}

.card-emergencia:hover {
  color: #707070;
}

.guia1,
.guia2,
.guia3 {
  width: 20%;
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

@media screen and (max-width: 800px) {
  .guia1,
  .guia2,
  .guia3 {
    width: 18%;
    height: 12vw;
    border-radius: 15px;
    font-size: 2.5em;
  }

  .card-emergencia {
    width: 60%;
  }

  .card-emergencia h3 {
    font-size: 26px;
  }
}

@media screen and (max-width: 600px) {
  .guia1,
  .guia2,
  .guia3 {
    font-size: 2em;
  }
}

@media screen and (max-width: 500px) {
  .guia1,
  .guia2,
  .guia3 {
    width: 23%;
    height: 17vw;
    border-radius: 15px;
    font-size: 2em;
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

  .card-emergencia {
    width: 70%;
  }

  .card-emergencia h3 {
    font-size: 22px;
  }
}
</style>
