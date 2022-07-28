<template>
  <div>
    <v-container align="center">
      <Form as="v-form" @submit="signin" :validation-schema="signinSchema">
      <v-card max-width="420px">
        <v-card-item>
          <v-card-title>
            로그인
          </v-card-title>
        </v-card-item>
        <v-card-item>
          <TextFieldWithValidation v-model="username" name="username" label="아이디" type="string" />
          <TextFieldWithValidation v-model="password" name="password" label="비밀번호" type="password" />
        </v-card-item>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn type="submit" color="primary">로그인</v-btn>
          <v-btn>취소</v-btn>
        </v-card-actions>
      </v-card>
      </Form>
      <v-snackbar v-model="signinAlert" location="bottom">로그인 실패
        <template v-slot:actions>
          <v-btn color="red" variant="text" @click="signinAlert = false">
            닫기
          </v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </div>
</template>

<script setup>
import { useAuthStore } from '~~/stores/auth';
import { Form, useForm } from 'vee-validate';
import * as yup from 'yup';

const username = ref('');
const password = ref('');
const signinAlert = ref(false);

const signinSchema = yup.object({
  username: yup.string().min(4).required().label('아이디'),
  password: yup.string().min(8).required().label('비밀번호'),
});

useForm({
  validationSchema: signinSchema
});

async function signin() {
  const authStore = useAuthStore();

  const { error } = await authStore.signin(username.value, password.value);

  if (error.value) {
    signinAlert.value = true;
    return;
  }

  return navigateTo({
    path: '/',
  })
}
</script>