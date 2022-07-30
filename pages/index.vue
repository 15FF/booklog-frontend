<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          v-for="review in reviewListStore.reviewList"
          cols="12"
          sm="4"
          :key="review.title"
        >
          <v-card variant="outlined" :to="'/review/' + review.id" align="left">
            <v-img
              class="rounded-lg"
              :src="review.bookImage"
              height="200px"
              cover
            ></v-img>
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
      <v-card v-intersect="getReview"></v-card>
    </v-container>
  </div>
</template>

<script setup>
import { useReviewListStore } from "~~/stores/reviewList";

const reviewListStore = useReviewListStore();

const getReview = async () => {
  await reviewListStore.getReviewList();
};
</script>
