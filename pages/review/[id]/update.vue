<template>
  <div>
    <v-container align="center">
      <v-card variant="outlined" align="left" max-width="820px">
        <Form as="v-form" @submit="onSubmit" :validation-schema="reviewUpdateSchema">
          <v-card-title> 독서록 수정 </v-card-title>
          <v-card-item align="center">
            <v-text-field
              v-model="reviewStore.review.bookTitle"
              label="도서명"
              disabled
            >
            </v-text-field>
            <v-card-item>
              <v-row>
                <v-col>
                  <v-card-subtitle>별점</v-card-subtitle>
                  <v-rating
                    v-model="reviewStore.review.rating"
                    hover
                    half-increments
                    color="amber"
                    size="small"
                  ></v-rating>
                  <pre>{{ reviewStore.review.rating }}</pre>
                </v-col>
                <v-col>
                  <v-card-subtitle>전체 공개 여부</v-card-subtitle>
                  <v-switch
                    class="switch-center"
                    v-model="reviewStore.review.status"
                    true-value="PUBLIC"
                    false-value="PRIVATE"
                    color="red"
                    align="center"
                    :label="
                      reviewStore.review.status == 'PUBLIC' ? '공개' : '비공개'
                    "
                  ></v-switch> </v-col
              ></v-row>
            </v-card-item>
            <TextFieldWithValidation
              v-model="reviewStore.review.title"
              name="title"
              label="독서록 제목"
            />
            <TextAreaWithValidation
              v-model="reviewStore.review.description"
              name="description"
              label="독서록 내용"
            />
          </v-card-item>
          <v-divider />
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" size="large" type="submit">
              수정
              <v-icon class="ml-3">mdi-arrow-right</v-icon>
            </v-btn>
          </v-card-actions>
          <v-snackbar
            v-model="isUpdateAlert"
            color="background"
            vertical
            location="center"
          >
            <div class="text-subtitle-1 pb-2">정말 수정하시겠습니까?</div>
            <template v-slot:actions>
              <v-btn color="warning" @click="updateReview">네</v-btn>
              &nbsp;
              <v-btn color="indigo" @click="isUpdateAlert = false">
                아니오
              </v-btn>
            </template>
          </v-snackbar>
          <v-snackbar v-model="updateReviewAlert" location="bottom">
            독서록 수정에 실패했습니다.
            <template v-slot:actions>
              <v-btn
                color="red"
                variant="text"
                @click="updateReviewAlert = false"
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
import { useReviewStore } from "~~/stores/review";
import { Form } from "vee-validate";
import * as yup from "yup";

const isUpdateAlert = ref(false);
const updateReviewAlert = ref(false);
const reviewStore = useReviewStore();

const reviewUpdateSchema = yup.object({
  // 수정은 기본적으로 값이 들어있기 때문에 default 값을 적용하지 않는다면 yup에서 미변경 필드를 오류 처리함
  title: yup.string().required().label("제목").default(" "),
  description: yup.string().required().label("내용").default(" "),
});

const onSubmit = () => {
  isUpdateAlert.value = true;
};

const updateReview = async () => {
  isUpdateAlert.value = false;
  const { data, error } = await reviewStore.updateReview();

  if (error.value) {
    updateReviewAlert.value = true;
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
