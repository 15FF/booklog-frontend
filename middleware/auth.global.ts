import { useAuthStore } from "~~/stores/auth";

export default defineNuxtRouteMiddleware((to, from) => {

  const auth = useAuthStore();

  const whiteList = [
    '/',
    '/user/signin',
    '/user/register',
  ];

  if (to.fullPath.startsWith('/review')) {
    return;
  }
  
  if (!whiteList.includes(to.fullPath) && auth.accessToken.length == 0) {
    return navigateTo('/user/signin');
  }
})