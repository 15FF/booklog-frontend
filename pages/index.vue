<template>
  <div class="animate__animated animate__fadeIn">
    <v-container fluid>
      <v-row dense>
        <v-col v-for="item in reviewlist.reviewlist" :key="item.title" :cols="4">
          <v-card>
            <v-img class="align-end" height="200" :src="item.image">
              <v-card-title>{{ item.title }}</v-card-title>
              <v-card-subtitle>{{ item.user }}</v-card-subtitle>
            </v-img>
            <div class="d-flex mr-4 align-center">
              <v-card-subtitle class="pt-4"> {{ item.book }} </v-card-subtitle>
              <v-spacer></v-spacer>
              <v-rating :model-value="item.rating" color="primary" dense half-increments readonly size="14"></v-rating>
            </div>
            <v-card-text overflow-hidden>
              {{ item.description }}
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary">
                더보기
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script setup>
import { useReviewlistStore } from '~~/stores/reviewlist';

const reviewlist = useReviewlistStore();
</script>

<style>

</style>
