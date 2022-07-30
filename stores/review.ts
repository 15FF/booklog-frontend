import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const useReviewStore = defineStore('review', () => {
  const selectedBooks = ref({
    title: '',
    image: '',
    author: '',
    publisher: '',
    pubdate: '',
    isbn: '',
  });
  const title = ref('');
  const rating = ref(5);
  const status = ref('PUBLIC');
  const dsecription = ref('');

  async function saveReview() {
    const body = {
      "bookTitle": selectedBooks.value.title,
      "bookImage": selectedBooks.value.image,
      "bookAuthor": selectedBooks.value.author,
      "bookPublisher": selectedBooks.value.publisher,
      "bookPubdate": selectedBooks.value.pubdate,
      "bookIsbn": selectedBooks.value.isbn,
      "title": title.value,
      "rating": rating.value,
      "status": status.value,
      "description": dsecription.value
    };  
    const authStore = useAuthStore();

    const { data, error } = await useFetch('/api/review', {
      method: 'POST',
      body: body,
      headers: {
        'Authorization': 'Bearer ' + authStore.accessToken
      }
    });

    return { data, error };
  }

  return { selectedBooks, title, rating, status, dsecription, saveReview };
})