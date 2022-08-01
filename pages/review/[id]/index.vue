<template>
  <div>
    <v-container align="center">
      <v-card align="left" max-width="480px">
        <v-img :src="reviewStore.review.bookImage" height="200px" cover></v-img>
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
        </v-card-item>
        <v-card-text> {{ reviewStore.review.description }}</v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="warning" :to="route.params.id + '/update'">수정</v-btn>
          <v-btn color="red" @click="isDeleteAlert = true">삭제</v-btn>
        </v-card-actions>
      </v-card>
      <v-snackbar
        v-model="isDeleteAlert"
        color="background"
        vertical
        location="center"
      >
        <div class="text-subtitle-1 pb-2">정말 삭제하시겠습니까?</div>
        <template v-slot:actions>
          <v-btn color="red" @click="deleteReview">네</v-btn>
          &nbsp;
          <v-btn color="indigo" @click="isDeleteAlert = false"> 아니오 </v-btn>
        </template>
      </v-snackbar>
      <v-snackbar v-model="deleteReviewAlert" location="bottom"
        >독서록 삭제에 실패했습니다.
        <template v-slot:actions>
          <v-btn color="red" variant="text" @click="deleteReviewAlert = false">
            닫기
          </v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { useReviewStore } from "~~/stores/review";

const isDeleteAlert = ref(false);
const deleteReviewAlert = ref(false);
const route = useRoute();
const reviewStore = useReviewStore();
await reviewStore.getReview(route.params.id.toString());

const deleteReview = async () => {
  isDeleteAlert.value = false;
  const { data, error } = await reviewStore.deleteReview();

  if (error.value) {
    deleteReviewAlert.value = true;
    return;
  }

  return navigateTo("/");
};
</script>
