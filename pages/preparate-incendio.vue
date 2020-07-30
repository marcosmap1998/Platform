<template>
  <div class="general-container">
    <b-row class="justify-content-center preparate">
      <b-col lg="8" class="d-flex flex-column justify-content-center">
        <h2 class="text-center mb-2">Prepárate para un incendio:</h2>
        <p class="text-center texto">
          Guía para antes, durante y después de un incendio
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
.preparate {
  margin-top: 120px;
}

.texto {
  font-size: 20px;
}

.btn-comenzar {
  width: 50%;
  background: #fb8645;
  color: #fff;
  border-radius: 15px;
}

.btn-comenzar:hover {
  background: #fff;
  color: #fb8645;
  border-color: #fb8645;
}

@media screen and (max-width: 480px) {
  h2 {
    font-size: 26px;
  }

  .texto {
    font-size: 15px;
  }

  .btn-comenzar {
    width: 80%;
  }

  .btn-comenzar h3 {
    font-size: 22px;
  }
}
</style>
