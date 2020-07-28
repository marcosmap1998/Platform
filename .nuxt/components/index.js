export { default as Navbar } from '../../components/general/Navbar.vue'

export const LazyNavbar = import('../../components/general/Navbar.vue' /* webpackChunkName: "components/general/Navbar'}" */).then(c => c.default || c)
