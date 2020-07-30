<template>
  <div class="general-container">
    <b-row class="justify-content-center preparate">
      <b-col lg="8" class="d-flex flex-column justify-content-center">
        <h2 class="text-center mb-3">¿Qué necesitas?</h2>
        <button
          class="btn my-3 p-3 btn-service d-flex flex-row justify-content-between"
        >
          <h4>Llamar a los servicios de emergencia de tu comunidad</h4>
          <i class="fas fa-phone-volume mx-2"></i>
        </button>
        <button
          class="btn my-3 p-3 btn-zone d-flex flex-row justify-content-between"
        >
          <h4>Ubica las zonas de riesgo y las zonas seguras cerca de ti</h4>
          <i class="fas fa-search-location mx-2"></i>
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
.preparate {
  margin-top: 80px;
}

.btn-service,
.btn-zone {
  margin: 0 auto;
  border: 1px solid;
  width: 50%;
  font-size: 3em;
  border-radius: 15px;
}

i {
  margin-top: 8px;
}

.btn-service:hover,
.btn-zone:hover {
  color: #2862c7;
}

@media screen and (max-width: 800px) {
  .preparate {
    margin-top: 50px;
  }

  .btn-service,
  .btn-zone {
    width: 70%;
  }

  i {
    font-size: 1em;
    margin-top: 10px;
  }
}

@media screen and (max-width: 550px) {
  .preparate {
    margin-top: 30px;
  }

  .btn-service,
  .btn-zone {
    width: 70%;
  }

  .btn-service h4,
  .btn-zone h4 {
    font-size: 18px;
  }

  .btn-service i,
  .btn-zone i {
    margin-top: 0;
    font-size: 0.9em;
  }
}

@media screen and (max-width: 461px) {
  .btn-service,
  .btn-zone {
    width: 80%;
  }

  .btn-service h4,
  .btn-zone h4 {
    font-size: 15px;
  }
}
</style>
