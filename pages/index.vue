<template>
  <div>
    <v-container align="center">
      <v-row>
        <v-col v-for="item in reviewlist.reviewlist" :key="item.title">
            
          <v-card max-width="480px" :to="'/review/' + item.id" >
          
            <v-img :src="item.bookImage" height="200px" cover></v-img>
            <div class="align-right">
              <v-card-title class="text-h5">
                {{ item.title }}
              </v-card-title>
              <v-card-subtitle>
                {{ item.username }}
              </v-card-subtitle>
            </div>
            <div class="d-flex mr-4 align-center">
              <v-card-subtitle class="pt-4"> {{ item.book }} </v-card-subtitle>
              <v-spacer></v-spacer>
              <v-rating :model-value="item.rating/2" color="primary" dense half-increments readonly size="14"></v-rating>
            </div>
            <v-card-text overflow-hidden>
              {{ item.description }}
            </v-card-text>
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
