import { defineStore } from "pinia";

export const useBookStore = defineStore('book', () => {
  const bookQuery = ref('');
  const bookList = ref([]);

  function clear() {
    bookQuery.value = '';
  }

  async function getBookList() {
    bookList.value = [];

    const { data } = await useFetch(`/api/books?bookQuery=${bookQuery.value}`);

    data.value['items'].forEach((book) => {
      bookList.value.push(book);
    });

    return data.value['count'];
  }

  return { bookQuery, bookList, clear, getBookList };
})