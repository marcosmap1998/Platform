<template>
  <div class="general-container">
    <b-container>
      <b-row class="justify-content-center">
        <b-col lg="8" class="d-flex flex-column justify-content-center">
          <h2 class="text-center mb-2">Prepárate para una inundación:</h2>
          <p class="text-center texto">
            Guía para antes, durante y después de una inundación
          </p>
          <button class="btn my-3 p-3 btn-comenzar align-self-center">
            <h3>Comenzar</h3>
          </button>
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

@media screen and (max-width: 500px) {
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
