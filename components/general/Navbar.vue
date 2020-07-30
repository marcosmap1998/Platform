<template>
  <b-navbar toggleable="sm" class="barra_nav fixed-bottom justify-content-end">
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav class="justify-content-center">
      <b-navbar-nav>
        <b-nav-item href="/home" class="mx-3 icono align-self-center">
          <nuxt-link to="/home" class="link"
            ><i class="fas fa-home"></i
          ></nuxt-link>
        </b-nav-item>
        <b-nav-item href="#" class="mx-3 icono align-self-center">
          <nuxt-link to="/" class="link"
            ><i class="fas fa-phone"></i
          ></nuxt-link>
        </b-nav-item>
        <b-nav-item href="#" class="mx-3 icono align-self-center">
          <nuxt-link to="/mapa" class="link"
            ><i class="fas fa-map-marker-alt"></i
          ></nuxt-link>
        </b-nav-item>
        <b-nav-item href="#" class="mx-3 icono align-self-center">
          <nuxt-link to="/" class="link"
            ><i class="fas fa-info-circle"></i
          ></nuxt-link>
        </b-nav-item>
        <b-nav-item href="#" class="mx-3 icono align-self-center">
          <nuxt-link to="/" class="link"
            ><i class="fas fa-comment-alt"></i
          ></nuxt-link>
        </b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
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
.barra_nav {
  background-color: #12cdd4;
}

.icono {
  font-size: 2em;
}

.link {
  color: #fedfda;
}

.link:hover {
  color: #fff;
}
</style>
