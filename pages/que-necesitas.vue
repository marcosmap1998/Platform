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
            <b-card-group
              columns
              class="mt-3 d-flex flex-row flex-wrap justify-content-center"
            >
              <a href="#" class="card-help">
                <b-card
                  title="Ayuda, tengo una emergencia"
                  img-src=""
                  img-right
                >
                </b-card>
              </a>
              <a href="#" class="card-prepare">
                <b-card title="Prepárate" img-src="" img-right></b-card>
              </a>
              <a href="#" class="card-resolve">
                <b-card
                  title="Resuelve tus dudas con Salvi, nuestro Bot"
                  img-src=""
                  img-right
                >
                </b-card>
              </a>
            </b-card-group>
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

.card-help {
  width: 80%;
}

.card-prepare {
  width: 38%;
}

.card-resolve {
  width: 39%;
}
</style>
