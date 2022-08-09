import { defineStore } from "pinia";
import { useAuthStore } from "./auth";
import { useReviewListStore } from "./reviewList";

export const useReviewSaveStore = defineStore("reviewSave", () => {
  const selectedBooks = ref({
    title: "",
    image: "",
    author: "",
    publisher: "",
    pubdate: "",
    isbn: "",
  });
  const title = ref("");
  const rating = ref(5);
  const status = ref("PUBLIC");
  const description = ref("");

  const saveReview = async () => {
    const body = {
      bookTitle: selectedBooks.value.title,
      bookImage: selectedBooks.value.image,
      bookAuthor: selectedBooks.value.author,
      bookPublisher: selectedBooks.value.publisher,
      bookPubdate: selectedBooks.value.pubdate,
      bookIsbn: selectedBooks.value.isbn,
      title: title.value,
      rating: rating.value,
      status: status.value,
      description: description.value,
    };
    const authStore = useAuthStore();

    const { data, error } = await useFetch("https://api.booklog.dev/review", {
      method: "POST",
      body: body,
      headers: {
        Authorization: "Bearer " + authStore.accessToken,
      },
    });

    useReviewListStore().reset();

    return { data, error };
  };

  const resetSelectedBooks = () => {
    selectedBooks.value = {
      title: "",
      image: "",
      author: "",
      publisher: "",
      pubdate: "",
      isbn: "",
    };
  };

  return { selectedBooks, title, rating, status, description, saveReview, resetSelectedBooks };
});
