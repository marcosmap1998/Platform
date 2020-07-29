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
      <b-col
        lg="8"
        class="d-flex flex-column justify-content-center mt-1 text-center"
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
        <div class="ubicacion d-flex flex-row mb-5">
          <div class="mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d240804.5689407989!2d-99.1278471386718!3d19.43091644087206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2smx!4v1596050245792!5m2!1ses!2smx"
              width="600"
              height="450"
              frameborder="0"
              style="border: 0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0"
            ></iframe>
          </div>
          <div class="colores">
            <button class="btn btn-ubicacion">
              <i class="fas fa-search-location mt-2 mx-2"></i>
            </button>
            <p>
              <strong>¿Cuál es tu ubicación?</strong><br />
              Da clic al botón
            </p>
            <div class="d-flex flex-column lista-riesgos">
              <div class="verde d-flex flex-row align-items-start my-2">
                <div class="caja1"></div>
                <p class="mt-2 mx-4 texto">SEGURO</p>
              </div>
              <div class="d-flex flex-row align-items-start my-2">
                <div class="caja2"></div>
                <p class="mt1"></p>
              </div>
              <div class="amarillo d-flex flex-row align-items-start my-2">
                <div class="caja3"></div>
                <p class="mt1"></p>
              </div>
              <div class="naranja d-flex flex-row align-items-start my-2">
                <div class="caja4"></div>
                <p class="mt1"></p>
              </div>
              <div class="rojo d-flex flex-row align-items-start my-2">
                <div class="caja5"></div>
                <p class="mt-2 mx-4 texto">RIESGOSO</p>
              </div>
            </div>
          </div>
        </div>
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

.colores {
  width: 20%;
  overflow: hidden;
}

.btn-ubicacion {
  background: #2862c7;
  font-size: 4em;
  width: 100%;
}

.ubicacion {
  width: 100%;
}

.mapa {
  width: 80%;
  overflow: hidden;
}

.mapa iframe {
  width: 80%;
  max-height: 600px;
}

.caja1,
.caja2,
.caja3,
.caja4,
.caja5 {
  width: 25%;
  height: 2.5em;
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
</style>
