import { defineStore } from "pinia";

export const useReviewListStore = defineStore("reviewList", () => {
  const reviewList = ref([]);
  const page = ref(1);

  const getReviewList = async () => {
    const result = await $fetch(
      `https://api.booklog.dev/review?pageNo=${page.value}&pageSize=9`
    );

    if (result["count"] == 0) {
      return;
    }

    page.value++;

    result["reviews"].forEach((review) => {
      const shortDescription =
        review.description.substring(0, 20) +
        (review.description.length > 20 ? "..." : "");
      review["shortDescription"] = shortDescription;
      reviewList.value.push(review);
    });
  };

  const reset = async () => {
    reviewList.value = [];
    page.value = 1;
  };

  return { reviewList, getReviewList, reset };
});
