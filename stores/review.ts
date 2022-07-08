import { defineStore } from "pinia";

export const useReviewStore = defineStore('review', () => {
  let selectedBooks = ref();

  function call(book) {
    selectedBooks.value = JSON.stringify(book);
    console.log(selectedBooks.value);
  }
  return { selectedBooks, call };
})