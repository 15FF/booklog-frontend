<template>
  <div>
    <v-container align="center">
      <v-card variant="outlined" align="left" max-width="820px">
        <v-card-title>도서 검색</v-card-title>
        <v-card-item>
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
          <v-radio-group v-model="reviewSaveStore.selectedBooks" mandatory>
            <v-table>
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col" class="text-left">도서명</th>
                  <th scope="col" class="text-left">저자</th>
                  <th scope="col" class="text-left">출판사</th>
                  <th scope="col" class="text-left">출판년도</th>
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
        </v-card-item>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            size="large"
            :disabled="!reviewSaveStore.selectedBooks"
            @click="onSubmit"
          >
            독서록 작성
            <v-icon class="ml-3">mdi-arrow-right</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
      <v-snackbar v-model="getBookListAlert" location="bottom"
        >검색어를 다시 확인해주세요.
        <template v-slot:actions>
          <v-btn color="red" variant="text" @click="getBookListAlert = false">
            닫기
          </v-btn>
        </template>
      </v-snackbar>
      <v-snackbar v-model="selectedBookAlert" location="bottom"
        >책을 선택해주세요.
        <template v-slot:actions>
          <v-btn color="red" variant="text" @click="selectedBookAlert = false">
            닫기
          </v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { useBookStore } from "~~/stores/book";
import { useReviewSaveStore } from "~~/stores/reviewSave";

const bookStore = useBookStore();
const reviewSaveStore = useReviewSaveStore();
const getBookListAlert = ref(false);
const selectedBookAlert = ref(false);

const getBookList = async () => {
  const count = await bookStore.getBookList();

  if (count == 0) {
    getBookListAlert.value = true;
  }

  reviewSaveStore.resetSelectedBooks();
};

const onSubmit = () => {
  if (!reviewSaveStore.selectedBooks["isbn"]) {
    selectedBookAlert.value = true;
    return;
  }
  return navigateTo("/new-review/write");
};
</script>
