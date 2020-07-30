export default function (context) {
  context.store.dispatch('authStore/checkSession')
}
