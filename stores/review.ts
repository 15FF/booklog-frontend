import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

export const useReviewStore = defineStore('review', () => {
  const selectedBooks = ref({
    title: '',
    image: '',
    author: '',
    publisher: '',
    pubdate: '',
  });
  const title = ref('');
  const rating = ref(0);
  const status = ref('');
  const dsecription = ref('');

  async function saveReview() {
    const body = {
      "bookTitle": selectedBooks.value.title,
      "bookImage": selectedBooks.value.image,
      "bookAuthor": selectedBooks.value.author,
      "bookPublisher": selectedBooks.value.publisher,
      "bookPubdate": selectedBooks.value.pubdate,
      "bookIsbn": "123456789123",
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