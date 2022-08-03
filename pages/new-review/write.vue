<template>
  <div>
    <v-container align="center">
      <v-card variant="outlined" align="left" max-width="820px">
        <v-form>
          <v-card-title> 독서록 작성 </v-card-title>
          <v-card-item align="center">
            <v-text-field
              v-model="reviewSaveStore.selectedBooks.title"
              label="도서명"
              disabled
            >
            </v-text-field>
            <v-card-item>
              <v-row>
                <v-col>
                  <v-card-subtitle>별점</v-card-subtitle>
                  <v-rating
                    v-model="reviewSaveStore.rating"
                    hover
                    half-increments
                    color="amber"
                    size="small"
                  ></v-rating>
                  <pre>{{ reviewSaveStore.rating }}</pre>
                </v-col>
                <v-col>
                  <v-card-subtitle>전체 공개 여부</v-card-subtitle>
                  <v-switch
                    class="switch-center"
                    v-model="reviewSaveStore.status"
                    true-value="PUBLIC"
                    false-value="PRIVATE"
                    color="red"
                    align="center"
                    :label="
                      reviewSaveStore.status == 'PUBLIC' ? '공개' : '비공개'
                    "
                  ></v-switch> </v-col
              ></v-row>
            </v-card-item>
            <v-text-field
              v-model="reviewSaveStore.title"
              label="독서록 제목"
            ></v-text-field>
            <v-textarea
              v-model="reviewSaveStore.description"
              label="독서록 내용"
              auto-grow
            ></v-textarea>
          </v-card-item>
          <v-divider />
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              size="large"
              @click="saveReview"
              :disabled="!reviewSaveStore.selectedBooks"
            >
              등록
              <v-icon class="ml-3">mdi-arrow-right</v-icon>
            </v-btn>
          </v-card-actions>
          <v-snackbar v-model="saveReviewAlert" location="bottom"
            >독서록 작성에 실패했습니다.
            <template v-slot:actions>
              <v-btn
                color="red"
                variant="text"
                @click="saveReviewAlert = false"
              >
                닫기
              </v-btn>
            </template>
          </v-snackbar>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { useReviewSaveStore } from "~~/stores/reviewSave";
const reviewSaveStore = useReviewSaveStore();
const saveReviewAlert = ref(false);

const saveReview = async () => {
  const { data, error } = await reviewSaveStore.saveReview();

  if (error.value) {
    saveReviewAlert.value = true;
    return;
  }

  return navigateTo({
    path: "/review/" + data.value,
  });
};
</script>

<style scoped>
.switch-center {
  display: flex;
  justify-content: center;
}
</style>
