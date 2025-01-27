export default defineNuxtRouteMiddleware((to) => {
  if (to.path === '/') {
    return navigateTo(`/drinks/margarita`);
  }
});