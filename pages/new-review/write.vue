<template>
  <div class="animate__animated animate__fadeIn">
    <v-container>
      <v-form>
        <v-text-field v-model="review.selectedBooks.title" label="도서명" disabled></v-text-field>
        <v-text-field v-model="review.title" label="독서록 제목"></v-text-field>
        <div class="d-flex align-center">
          <v-rating v-model="review.rating" hover half-increments size="small"></v-rating>
          <span class="ml-2"> 별점 : {{ review.rating }} </span>
        </div>
        <v-switch v-model="review.status" color="orange" label="독서록을 공개합니다"></v-switch>
        <v-textarea v-model="review.dsecription" label="독서록 내용" auto-grow></v-textarea>
      </v-form>
      <div class="d-flex justify-end">
        <v-btn color="primary" size="large" to="/new-review/write" :disabled="!review.selectedBooks">
          등록
          <v-icon class="ml-3">mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { useReviewStore } from '~~/stores/review';
const review = useReviewStore();
</script>

<style>

</style>