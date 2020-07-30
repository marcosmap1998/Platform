<template>
  <div class="general-container estilo">
    <b-row class="mt-5 justify-content-center">
      <b-col lg="8" class="d-flex flex-column justify-content-center mt-5">
        <h2 class="text-center mt-5 mb-2">Prepárate para una inundación:</h2>
        <p class="text-center texto">
          Guía para antes, durante y después de una inundación
        </p>
        <button class="btn my-3 p-3 btn-comenzar align-self-center">
          <h3>Comenzar</h3>
        </button>
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

.texto {
  font-size: 20px;
}

.btn-comenzar {
  width: 40%;
  background: #fb8645;
  color: #fff;
  border-radius: 15px;
}

.btn-comenzar:hover {
  background: #fff;
  color: #fb8645;
  border-color: #fb8645;
}
</style>
