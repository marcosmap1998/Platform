export default function ({ store, redirect }) {
  if (!store.getters['authStore/isAuthenticated']) {
    return redirect('/')
  }
}
