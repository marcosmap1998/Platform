<template>
  <div class="general-container">
    <b-container>
      <b-row class="justify-content-center">
        <b-col lg="8 d-flex flex-column mt-5">
          <div class="text-center mt-5">
            <h2>Resuelve tus dudas</h2>
          </div>
          <div class="text-center">
            <b-button class="general-button mt-4 btn-comenzar" size="lg">
              Comenzar
            </b-button>
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
.btn-comenzar {
  width: 37%;
  color: #fff;
  background: #fb8645;
  border-color: #fb8645;
}

.btn-comenzar:hover {
  background: #fff;
  color: #fb8645;
}

.regresar a {
  color: #000;
}

.regresar a:hover {
  color: #000;
  text-decoration: none;
}
</style>
