<template>
  <div class="general-container">
    <b-container>
      <b-row class="justify-content-center">
        <b-col lg="8 d-flex flex-row justify-content-between">
          <div>
            <h3>a Salvo</h3>
          </div>
          <div class="regresar">
            <a href=""><h5>Regresar</h5></a>
          </div>
        </b-col>
        <b-col lg="8" class="text-center mt-5">
          <h2>¿Qué necesitas?</h2>
          <div class="justify-content-center mt-4">
            <button class="btn card-help mb-3">
              <h3 class="p-3 mt-1">Ayuda, tengo una emergencia</h3>
            </button>
            <button class="btn card-prepare mx-3">
              <h3 class="p-3 mt-1">Prepárate</h3>
            </button>
            <button class="btn card-resolve mx-3">
              <h3 class="p-3 mt-1">
                Resuelve tus dudas con Salvi, nuestro Bot
              </h3>
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
.regresar a {
  color: #000;
}

.regresar a:hover {
  color: #000;
  text-decoration: none;
}

.card-resolve,
.card-help,
.card-prepare {
  border: 1px solid;
  border-radius: 15px;
}

.card-help {
  width: 90%;
}

.card-prepare {
  width: 42%;
}

.card-resolve {
  width: 43%;
}

.card-help:hover,
.card-prepare:hover,
.card-resolve:hover {
  color: #2862c7;
}
</style>
