<template>
  <div>
    <v-container align="center">
      <v-card variant="outlined" align="left" max-width="820px">
        <Form
          as="v-form"
          @submit="saveReview"
          :validation-schema="reviewSaveSchema"
        >
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
            <TextFieldWithValidation
              v-model="reviewSaveStore.title"
              name="title"
              label="독서록 제목"
            />
            <TextAreaWithValidation
              v-model="reviewSaveStore.description"
              name="description"
              label="독서록 내용"
            />
          </v-card-item>
          <v-divider />
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" size="large" type="submit">
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
        </Form>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { useReviewSaveStore } from "~~/stores/reviewSave";
import { Form } from "vee-validate";
import * as yup from "yup";

const reviewSaveStore = useReviewSaveStore();
const saveReviewAlert = ref(false);

const reviewSaveSchema = yup.object({
  title: yup.string().required().label("제목"),
  description: yup.string().required().label("내용"),
});

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
