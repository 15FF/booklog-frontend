<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="item in reviewlist.reviewlist" cols="12" sm="4" :key="item.title">
            
          <v-card variant="outlined" :to="'/review/' + item.id" align="left">
            <v-img class="rounded-lg" :src="item.bookImage" height="200px" cover></v-img>
            <v-card-item>
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-subtitle>
                <span class="mr-1">도서명: {{ item.bookTitle }}</span>
              </v-card-subtitle>
            </v-card-item>
            <v-card-text overflow-hidden class="text-medium-emphasis">
              {{ item.shortDescription }}
            </v-card-text>
            <v-divider></v-divider>
            <div class="d-flex mr-4 align-center">
              <v-card-item>
                {{ item.username }}
              </v-card-item>
              <v-spacer></v-spacer>
              <v-rating color="amber" :model-value="item.rating" half-increments readonly size="12"></v-rating>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-card v-intersect="getReview"></v-card>
      
    </v-container>
  </div>
</template>

<script setup>
import { useReviewlistStore } from '~~/stores/reviewlist';

const reviewlist = useReviewlistStore();

const getReview = async () => {
  await reviewlist.getReviewList();
}
</script>

<style>

</style>
