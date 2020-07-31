<template>
  <div class="general-container">
    <b-row class="justify-content-center">
      <b-col
        sm="12"
        md="10"
        lg="10"
        class="d-flex flex-column justify-content-center text-center title"
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
      <div class="ubicacion">
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

        <div class="indicaciones">
          <div class="cual-ubicacion">
            <button class="btn btn-ubicacion">
              <div class="imagen">
                <img src="./img/ICONO_MAPA.png" alt="Mapa" class="img-fluid" />
              </div>
            </button>
            <p>
              <strong>¿Cuál es tu ubicación?</strong><br />
              Da clic al botón
            </p>
          </div>

          <div class="lista-riesgos">
            <img
              src="./img/paleta.png"
              alt="Colores según el riesgo"
              class="img-fluid"
            />
          </div>
        </div>
      </div>
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
.ubicacion {
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: flex-start;
  flex-wrap: wrap;
}

.mapa {
  width: 70%;
  display: flex;
  justify-content: flex-end;
}

.mapa iframe {
  width: 75%;
}

.indicaciones {
  width: 30%;
  display: flex;
  flex-direction: column;
}

.btn-ubicacion {
  width: 32%;
  height: 15vh;
  padding: 0;
  border-radius: 0;
}

.cual-ubicacion {
  display: flex;
  flex-direction: column;
}

.btn-ubicacion {
  margin-left: 10px;
  background: #fac710;
  display: flex;
  flex-direction: column;
}

.imagen {
  width: 100%;
  height: 100%;
  display: flex;
}

.cual-ubicacion p {
  margin-left: 10px;
  font-size: 10px;
  align-self: flex-start;
}

.lista-riesgos {
  margin-left: 10px;
  display: flex;
}

@media screen and (max-width: 900px) {
  .title {
    margin-top: 100px;
  }

  .ubicacion {
    height: auto;
    width: 100%;
  }

  .btn-ubicacion {
    width: 35%;
    height: 15vh;
  }
}

@media screen and (max-width: 700px) {
  .ubicacion {
    height: auto;
    width: 100%;
  }

  .mapa iframe {
    width: 80%;
  }

  .btn-ubicacion {
    width: 40%;
    height: 15vh;
  }
}

@media screen and (max-width: 600px) {
  .ubicacion {
    height: auto;
    width: 100%;
  }

  .mapa iframe {
    width: 90%;
  }

  .btn-ubicacion {
    width: 45%;
    height: 15vh;
  }
}

@media screen and (max-width: 500px) {
  .title h2 {
    font-size: 26px;
  }

  .title p {
    font-size: 14px;
  }

  .mapa {
    width: 80%;
  }

  .mapa iframe {
    width: 90%;
  }

  .ubicacion {
    margin: auto 0;
  }

  .indicaciones {
    width: 20%;
  }

  .btn-ubicacion {
    width: 60%;
    height: 10vh;
  }

  .cual-ubicacion p {
    font-size: 8px;
  }

  .lista-riesgos img {
    width: 80%;
  }
}
</style>
