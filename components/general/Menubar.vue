<template>
  <div class="menubar__container w-100 position-fixed">
    <b-container>
      <b-row class="justify-content-center mt-4">
        <b-col lg="8" class="d-flex flex-row justify-content-between">
          <div>
            <h3>aSalvo</h3>
          </div>
          <div class="regresar mt-1" @click="logout()">
            <h5>Salir</h5>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('authStore', ['logout']),
  },
}
</script>

<style>
.regresar a {
  color: #000;
}

.regresar a:hover {
  color: #000;
  text-decoration: none;
}
</style>
