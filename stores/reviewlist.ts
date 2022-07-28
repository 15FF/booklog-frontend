import { defineStore } from "pinia";

export const useReviewlistStore = defineStore('reviewlist', () => {
  const reviewlist = ref([]);
  const page = ref(1);

  async function getReviewList() {
    
    const result = await $fetch(`/api/review?pageNo=${page.value}&pageSize=9`);
    
    if (result['count'] == 0) {
      return;
    }

    page.value++;
    result['reviews'].forEach((review) => {
      reviewlist.value.push(review);
    })
  }

  return { reviewlist, getReviewList };
})