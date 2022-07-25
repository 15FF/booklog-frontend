import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', () => {
  const accessToken = ref('');

  return { accessToken };
})