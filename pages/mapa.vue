<template>
  <div class="general-container">
    <b-row class="justify-content-center">
      <b-col
        sm="12"
        md="10"
        lg="10"
        class="d-flex flex-column justify-content-center text-center"
      >
        <h2 class="mb-3">Ponte a Salvo</h2>
        <p>
          Localiza las zonas de riesgo y las zonas seguras según tu
          localización.
          <br />
          <strong
            >Si estás en una zona de riesgo y no puedes trasladarte, por favor,
            <a href="#">comunícate con emergencias</a></strong
          >
        </p>
      </b-col>
      <b-col
        sm="12"
        md="10"
        lg="10"
        class="d-flex flex-row justify-content-center text-center mapa-content flex-wrap"
      >
        <b-col sm="9" md="7" lg="8" class="col-mapa">
          <div class="mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d240804.5689407989!2d-99.1278471386718!3d19.43091644087206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1596050245792!5m2!1ses!2smx"
              width="500"
              height="400"
              frameborder="0"
              style="border: 0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
        </b-col>

        <b-col sm="3" md="3" lg="2" class="boton-lista">
          <div class="boton-principal align-self-start">
            <button class="btn btn-ubicacion">
              <i class="fas fa-search-location mt-2 mx-2"></i>
            </button>
            <p>
              <strong>¿Cuál es tu ubicación?</strong><br />
              Da clic al botón
            </p>
          </div>

          <div class="lista-riesgos">
            <div class="verde d-flex flex-row align-items-start">
              <div class="caja1"></div>
              <p class="mx-3 texto">SEGURO</p>
            </div>
            <div class="verde2 d-flex flex-row align-items-start mt-0 mb-1">
              <div class="caja2"></div>
              <p class="mx-3 texto"></p>
            </div>
            <div class="amarillo d-flex flex-row align-items-start my-1">
              <div class="caja3"></div>
              <p class="mx-3 texto"></p>
            </div>
            <div class="naranja d-flex flex-row align-items-start my-1">
              <div class="caja4"></div>
              <p class="mx-3 texto"></p>
            </div>
            <div class="rojo d-flex flex-row align-items-start my-1">
              <div class="caja5"></div>
              <p class="mx-3 texto">RIESGO</p>
            </div>
          </div>
        </b-col>
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
.mapa-content {
  margin: 0 auto;
  margin-bottom: 120px;
}

.boton-principal p {
  font-size: 10px;
}

.boton-principal button {
  width: 100%;
}

.btn-ubicacion {
  background: #2862c7;
  font-size: 3em;
}

.mapa {
  width: 100%;
  overflow: hidden;
}

.mapa iframe {
  width: 100%;
  max-height: 450px;
}

.btn-ubicacion {
  width: 75%;
}

.caja1,
.caja2,
.caja3,
.caja4,
.caja5 {
  width: 25%;
  height: 2.5em;
  margin: 2px;
}

.caja1 {
  background-color: #0ca789;
}

.caja2 {
  background-color: #8fd14f;
}

.caja3 {
  background-color: #fac710;
}

.caja4 {
  background-color: #fb8645;
}

.caja5 {
  background-color: #f24726;
}

.texto {
  font-size: 10px;
}

a {
  color: #fb8645;
}

@media screen and (max-width: 1600px) {
  .texto {
    margin-top: 10px;
  }

  .caja1 {
    margin-bottom: 10px;
  }

  .caja1,
  .caja2,
  .caja3,
  .caja4,
  .caja5 {
    width: 25%;
    height: 2.5em;
  }
}

@media screen and (max-width: 1000px) {
  .texto {
    margin-top: 8px;
  }

  .caja1,
  .caja2,
  .caja3,
  .caja4,
  .caja5 {
    width: 25%;
    height: 2em;
  }
}

@media screen and (max-width: 800px) {
  .texto {
    width: 60%;
  }

  .caja1,
  .caja2,
  .caja3,
  .caja4,
  .caja5 {
    width: 40%;
    height: 1.7em;
  }
}

@media screen and (max-width: 576px) {
  h2 {
    margin-top: 15px;
    font-size: 26px;
  }

  p {
    font-size: 14px;
  }

  .mapa {
    margin-top: 10px;
  }

  .boton-lista {
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: start;
  }

  .boton-principal {
    width: 30%;
  }

  .lista-riesgos {
    width: 50%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
  }

  .caja5 {
    margin-bottom: 12vh;
  }

  .mapa-content {
    margin-bottom: 0px;
  }
}
</style>
