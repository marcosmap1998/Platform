<template>
  <div class="general-container">
    <b-row class="justify-content-center">
      <b-col lg="8" class="d-flex flex-row justify-content-between">
        <div>
          <h3>a Salvo</h3>
        </div>
        <div class="regresar mt-1">
          <a href=""><h5>Regresar</h5></a>
        </div>
      </b-col>
      <b-col lg="8" class="text-center mt-5">
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
.regresar a {
  color: #000;
}

.regresar a:hover {
  color: #000;
  text-decoration: none;
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
</style>
