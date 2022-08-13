import { defineStore } from "pinia";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const accessToken = ref("");
    const user = ref("");

    const isLogined = computed(() => (accessToken.value == "" ? false : true));
    const getUsername = computed(() => user.value);

    const register = async (username, password) => {
      if (!username || !password) return;

      const body = {
        username: username,
        password: password,
      };

      return await useFetch("https://api.booklog.dev/auth/register", {
        method: "POST",
        body: body,
      });
    };

    const signin = async (username, password) => {
      if (!username || !password) return;

      const body = {
        username: username,
        password: password,
      };

      const { data, error } = await useFetch("https://api.booklog.dev/auth/signin", {
        method: "POST",
        body: body,
      });

      if (!error.value) {
        accessToken.value = data.value["accessToken"];
        user.value = data.value["username"];
      }

      return { data, error };
    };

    return { accessToken, user, register, signin, isLogined, getUsername };
  },
  {
    persist: true,
  }
);
