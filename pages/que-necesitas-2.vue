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
      <b-col lg="8" class="d-flex flex-column justify-content-center mt-5">
        <h2 class="text-center mb-3">¿Qué necesitas?</h2>
        <button
          class="btn my-3 p-3 btn-service d-flex flex-row justify-content-between"
        >
          <h4>Llamar a los servicios de emergencia de tu comunidad</h4>
          <i class="fas fa-phone-volume mt-2 mx-2"></i>
        </button>
        <button
          class="btn my-3 p-3 btn-zone d-flex flex-row justify-content-between"
        >
          <h4>Ubica las zonas de riesgo y las zonas seguras cerca de ti</h4>
          <i class="fas fa-search-location mt-2 mx-2"></i>
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

.btn-service,
.btn-zone {
  margin: 0 auto;
  border: 1px solid;
  width: 50%;
  font-size: 3em;
  border-radius: 15px;
}

.btn-service:hover,
.btn-zone:hover {
  color: #2862c7;
}
</style>
