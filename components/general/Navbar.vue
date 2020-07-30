<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="fixed-bottom">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav class="justify-content-center">
        <b-navbar-nav>
          <div class="mx-3 icono">
            <nuxt-link class="text-white" to="/home"
              ><i class="fas fa-home"></i
            ></nuxt-link>
          </div>
          <div class="mx-3 icono">
            <nuxt-link class="text-white" to="/home"
              ><i class="fas fa-phone"></i
            ></nuxt-link>
          </div>
          <div class="mx-3 icono">
            <nuxt-link class="text-white" to="/home"
              ><i class="fas fa-map-marker-alt"></i
            ></nuxt-link>
          </div>
          <div class="mx-3 icono">
            <nuxt-link class="text-white" to="/home"
              ><i class="fas fa-info-circle"></i
            ></nuxt-link>
          </div>
          <div class="mx-3 icono">
            <nuxt-link class="text-white" to="/chat"
              ><i class="fas fas fa-comment-alt"></i
            ></nuxt-link>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
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

<style>
.icono {
  font-size: 2em;
}
</style>
