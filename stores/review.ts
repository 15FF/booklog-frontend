import { defineStore } from "pinia";

export const useReviewStore = defineStore('review', () => {
  const selectedBooks = ref();
  const title = ref();
  const rating = ref();
  const status = ref();
  const dsecription = ref();

  return { selectedBooks, title, rating, status, dsecription };
})