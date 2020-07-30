<template>
  <div>
    <Menu />
    <Nav />
    <Nuxt />
  </div>
</template>

<script>
import Nav from '@/components/General/Navbar'
import Menu from '@/components/General/Menubar'

export default {
  components: {
    Nav,
    Menu,
  },
}
</script>
