<template>
  <div>
    <v-container align="center">
      <v-form>
        <v-text-field v-model="reviewStore.selectedBooks.title" label="도서명" disabled></v-text-field>
        <v-text-field v-model="reviewStore.title" label="독서록 제목"></v-text-field>
        <div class="d-flex align-center">
          <v-rating v-model="reviewStore.rating" hover half-increments size="small"></v-rating>
          <span class="ml-2"> 별점 : {{ reviewStore.rating }} </span>
        </div>
        <v-switch v-model="reviewStore.status" true-value="PUBLIC" false-value="PRIVATE" color="orange" label="독서록을 공개합니다"></v-switch>
        <v-textarea v-model="reviewStore.dsecription" label="독서록 내용" auto-grow></v-textarea>
      </v-form>
      <div class="d-flex justify-end">
        <v-btn color="primary" size="large" @click="saveReview" :disabled="!reviewStore.selectedBooks">
          등록
          <v-icon class="ml-3">mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    <v-snackbar v-model="saveReviewAlert" location="bottom">독서록 작성에 실패했습니다.
      <template v-slot:actions>
        <v-btn color="red" variant="text" @click="saveReviewAlert = false">
          닫기
        </v-btn>
      </template>
    </v-snackbar>
    </v-container>
  </div>
</template>

<script setup>
import { useReviewStore } from '~~/stores/review';
const reviewStore = useReviewStore();
const saveReviewAlert = ref(false);

async function saveReview() {
  const { data, error } = await reviewStore.saveReview();

  if (error.value) {
    saveReviewAlert.value = true;
    return;
  }

  console.log(data.value);

  return navigateTo({
    path: '/review/' + data.value,
  })
}
</script>

<style>

</style>