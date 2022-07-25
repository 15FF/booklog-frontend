<template>
  <div>
    <v-container align="center">
      <v-card max-width="420px">
        <v-card-item>
          <v-card-title>
            회원가입
          </v-card-title>
        </v-card-item>
        <v-card-item>
          <Form as="v-form" :validation-schema="registerSchema" v-model="isValid" lazy-validation>
            <TextFieldWithValidation v-model="username" name="username" label="아이디" type="string" />
            <TextFieldWithValidation v-model="password" name="password" label="비밀번호" type="password" />
            <TextFieldWithValidation v-model="passwordConfirm" name="passwordConfirm" label="비밀번호 확인" type="password" />
          </Form>
        </v-card-item>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :disabled="!isValid" @click="register" color="primary">회원가입</v-btn>
          <v-btn>취소</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>
<script setup>
import { Form } from 'vee-validate';
import * as yup from 'yup';

const username = ref('');
const password = ref('');
const passwordConfirm = ref('');
const isValid = ref(false);

const registerSchema = yup.object({
  username: yup.string().min(4).required().label('아이디'),
  password: yup.string().min(8).required().label('비밀번호'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.')
    .required(),
});

async function register() {
  const body = {
    "username": username.value,
    "password": password.value,
  };  

  await useFetch('http://localhost:3000/auth/register', {
    method: 'POST',
    body: body
  });

  return navigateTo({
    path: '/',
  })
}
</script>