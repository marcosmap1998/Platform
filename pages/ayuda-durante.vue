<template>
  <div class="general-container">
    <b-container>
      <b-row class="justify-content-center preparate">
        <b-col lg="8" class="d-flex flex-column justify-content-center">
          <h2 class="text-center mb-3">¿Qué necesitas?</h2>
          <button class="btn p-3 btn-service">
            <h4>Llamar a los servicios de emergencia de tu comunidad</h4>
            <div class="imagen">
              <img src="./img/ICONO_MAPA.png" alt="Mapa" class="img-fluid" />
            </div>
          </button>
          <button class="btn p-3 btn-zone">
            <h4>Ubica las zonas de riesgo y las zonas seguras cerca de ti</h4>
            <div class="imagen">
              <img
                src="./img/ICONO_TELEFONO.png"
                alt="Guía contra inundación"
                class="img-fluid"
              />
            </div>
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
.btn-service,
.btn-zone {
  margin: 15px auto;
  border: 1px solid;
  width: 70%;
  border-radius: 15px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.btn-service:hover {
  color: #fac710;
}

.btn-zone:hover {
  color: #12cdd4;
}

.imagen {
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

@media screen and (max-width: 800px) {
  .btn-service,
  .btn-zone {
    width: 70%;
  }

  h4 {
    font-size: 22px;
  }
}

@media screen and (max-width: 700px) {
  .btn-service,
  .btn-zone {
    width: 85%;
  }
}

@media screen and (max-width: 550px) {
  .btn-service,
  .btn-zone {
    width: 85%;
  }

  .btn-service h4,
  .btn-zone h4 {
    font-size: 18px;
  }
}

@media screen and (max-width: 461px) {
  .btn-service,
  .btn-zone {
    width: 90%;
  }

  .btn-service h4,
  .btn-zone h4 {
    font-size: 15px;
  }
}
</style>
