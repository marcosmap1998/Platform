<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="fixed-bottom">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav class="justify-content-center">
        <b-navbar-nav>
          <b-nav-item href="/home" class="mx-3 icono"
            ><i class="fas fa-home"></i
          ></b-nav-item>
          <b-nav-item href="#" class="mx-3 icono"
            ><i class="fas fa-phone"></i
          ></b-nav-item>
          <b-nav-item href="#" class="mx-3 icono"
            ><i class="fas fa-map-marker-alt"></i
          ></b-nav-item>
          <b-nav-item href="#" class="mx-3 icono"
            ><i class="fas fa-info-circle"></i
          ></b-nav-item>
          <b-nav-item href="#" class="mx-3 icono"
            ><i class="fas fa-comment-alt"></i
          ></b-nav-item>
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
