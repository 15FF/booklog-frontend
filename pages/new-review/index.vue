<template>
  <div>
  <v-container align="center">
    <v-text-field
      v-model="bookStore.bookQuery"
      append-icon="mdi-magnify"
      filled
      clear-icon="mdi-close-circle"
      clearable
      label="도서명"
      type="text"
      @click:clear="bookStore.clear"
      @click:append="getBookList"
      @keypress.enter="getBookList"
    ></v-text-field>
    <v-radio-group
      v-model="reviewSaveStore.selectedBooks"
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
            v-for="book in bookStore.bookList"
            :key="book"
            @click="reviewSaveStore.selectedBooks = book"
          >
            <td><v-radio :value="book"></v-radio></td>
            <td>{{ book.title }}</td>
            <td>{{ book.author }}</td>
            <td>{{ book.publisher }}</td>
            <td>{{ book.pubdate }}</td>
          </tr>
        </tbody>
      </v-table>
    </v-radio-group>
    <div class="d-flex justify-end">
      <v-btn color="primary" size="large" to="/new-review/write" :disabled="!reviewSaveStore.selectedBooks">
        독서록 작성
        <v-icon class="ml-3">mdi-arrow-right</v-icon>
      </v-btn>
    </div>
    <v-snackbar v-model="getBookListAlert" location="bottom">검색어를 다시 확인해주세요.
      <template v-slot:actions>
        <v-btn color="red" variant="text" @click="getBookListAlert = false">
          닫기
        </v-btn>
      </template>
    </v-snackbar>
  </v-container>
  </div>
</template>

<script setup>
import { useBookStore } from '~~/stores/book';
import { useReviewSaveStore } from '~~/stores/reviewSave';

const bookStore = useBookStore();
const reviewSaveStore = useReviewSaveStore();
const getBookListAlert = ref(false);

const getBookList = async () => {
  const count = await bookStore.getBookList();

  if (count == 0) {
    getBookListAlert.value = true;
  }
}
</script>