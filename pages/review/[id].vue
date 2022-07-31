<template>
  <div>
    <v-container align="center">
      <v-card variant="outlined" align="left" max-width="480px">
        <v-img
          class="rounded-lg"
          :src="reviewStore.review.bookImage"
          height="200px"
          cover
        ></v-img>
        <v-card-item>
          <v-card-title>{{ reviewStore.review.bookTitle }}</v-card-title>
          <v-card-subtitle>
            저자: {{ reviewStore.review.bookAuthor }}
          </v-card-subtitle>
          <v-card-subtitle>
            출판사: {{ reviewStore.review.bookPublisher }}
          </v-card-subtitle>
        </v-card-item>
      </v-card>
      <br />
      <v-card variant="outlined" align="left" max-width="480px">
        <v-card-item>
          <v-card-title>{{ reviewStore.review.title }}</v-card-title>
        </v-card-item>
        <v-divider></v-divider>
        <div class="d-flex mr-4 align-center">
          <v-card-item> 작성자: {{ reviewStore.review.username }} </v-card-item>
          <v-spacer></v-spacer>
          <v-rating
            color="amber"
            :model-value="reviewStore.review.rating"
            half-increments
            readonly
            size="12"
          ></v-rating>
        </div>
        <v-divider></v-divider>
        <v-card-item>
          <v-card-title>후기</v-card-title>
          <v-card-subtitle>
            {{ reviewStore.review.description }}</v-card-subtitle
          ></v-card-item
        >
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="amber" variant="text">수정</v-btn>
          <v-btn color="red" variant="text">삭제</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { useReviewStore } from "~~/stores/review";

const route = useRoute();
const reviewStore = useReviewStore();
await reviewStore.getReview(route.params.id);
</script>
