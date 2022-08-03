import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const useBookStore = defineStore("book", () => {
  const bookQuery = ref("");
  const bookList = ref([]);

  function clear() {
    bookQuery.value = "";
  }

  const getBookList = async () => {
    const authStore = useAuthStore();
    bookList.value = [];
    
    const { data } = await useFetch("/api/books?bookQuery=" + bookQuery.value, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + authStore.accessToken,
      },
    });

    data.value["items"].forEach((book) => {
      bookList.value.push(book);
    });

    return data.value["count"];
  };

  return { bookQuery, bookList, clear, getBookList };
});
