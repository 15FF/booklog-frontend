import { defineStore } from "pinia";

export const useReviewStore = defineStore("review", () => {
  const review = ref({});

  const getReview = async (id: string) => {
    const { data, error } = await useFetch("/api/review/" + id, {
      method: "GET",
    });

    review.value = data.value;
    return { data, error };
  };

  return { review, getReview };
});
