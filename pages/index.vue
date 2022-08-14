<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          v-for="review in reviewListStore.reviewList"
          cols="12"
          sm="4"
          lg="4"
          xl="3"
          xxl="2"
          :key="review.title"
        >
          <v-card :to="'/review/' + review.id" align="left">
            <v-img :src="review.bookImage" height="200px" cover></v-img>
            <v-card-item>
              <v-card-title>{{ review.title }}</v-card-title>
              <v-card-subtitle>
                <span class="mr-1">도서명: {{ review.bookTitle }}</span>
              </v-card-subtitle>
            </v-card-item>
            <v-card-text overflow-hidden class="text-medium-emphasis">
              {{ review.shortDescription }}
            </v-card-text>
            <v-divider></v-divider>
            <div class="d-flex mr-4 align-center">
              <v-card-item>
                {{ review.username }}
              </v-card-item>
              <v-spacer></v-spacer>
              <v-rating
                color="amber"
                :model-value="review.rating"
                half-increments
                readonly
                size="12"
              ></v-rating>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-card v-intersect="getReviewList"></v-card>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { useReviewListStore } from "~~/stores/reviewList";

const isIntersect = ref(false);
const reviewListStore = useReviewListStore();

const getReviewList = async () => {
  if (isIntersect.value) {
    return;
  }
  isIntersect.value = true;
  await reviewListStore.getReviewList();
  isIntersect.value = false;
};
</script>
