import { defineStore } from "pinia";
import { useAuthStore } from "./auth";
import { useReviewListStore } from "./reviewList";

export const useReviewStore = defineStore("review", () => {
  const review = ref({});

  const getReview = async (id: string) => {
    const { data, error } = await useFetch("/api/review/" + id, {
      method: "GET",
    });

    review.value = data.value;

    return { data, error };
  };

  const deleteReview = async () => {
    const authStore = useAuthStore();
    const { data, error } = await useFetch(
      "/api/review/" + review.value["id"],
      {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + authStore.accessToken,
        },
      }
    );
    useReviewListStore().reset();

    return { data, error };
  };

  const updateReview = async () => {
    const authStore = useAuthStore();

    const body = {
      title: review.value["title"],
      rating: review.value["rating"],
      status: review.value["status"],
      description: review.value["description"],
    };

    const { data, error } = await useFetch(
      "/api/review/" + review.value["id"],
      {
        method: "PATCH",
        body: body,
        headers: {
          Authorization: "Bearer " + authStore.accessToken,
        },
      }
    );

    useReviewListStore().reset();

    return { data, error };
  };

  return { review, getReview, deleteReview, updateReview };
});
