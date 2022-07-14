<template>
  <div class="animate__animated animate__fadeIn">
    <v-container>
      <v-text-field
        v-model="book.bookQuery"
        append-icon="mdi-magnify"
        filled
        clear-icon="mdi-close-circle"
        clearable
        label="도서명"
        type="text"
        @click:clear="book.clear()"
        @click:append="book.call()"
        v-on:keyup.enter="book.call()"
      ></v-text-field>
    </v-container>
    <v-container>
      <v-radio-group
        v-model="review.selectedBooks"
        mandatory
      >
      <v-table>
        <thead>
          <tr>
            <th></th>
            <th class="text-left">도서명</th>
            <th class="text-left">저자</th>
            <th class="text-left">출판사</th>
            <th class="text-left">출판년도</th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="item in book.books"
            :key="item"
            @click="review.selectedBooks = item"
          >
            <td><v-radio :value="item"></v-radio></td>
            <td>{{ item.title }}</td>
            <td>{{ item.author }}</td>
            <td>{{ item.publisher }}</td>
            <td>{{ item.pubdate }}</td>
          </tr>
        </tbody>
      </v-table>
      </v-radio-group>
      <div class="d-flex justify-end">
        <v-btn color="primary" size="large" to="/new-review/write" :disabled="!review.selectedBooks">
          독서록 작성
          <v-icon class="ml-3">mdi-arrow-right</v-icon>
        </v-btn>
      </div>
    </v-container>
  </div>
</template>

<script setup>
import { useBookStore } from '~~/stores/book';
import { useReviewStore } from '~~/stores/review';

const book = useBookStore();
const review = useReviewStore();

const tableLayout = 'auto';
</script>

<style scoped>
</style>