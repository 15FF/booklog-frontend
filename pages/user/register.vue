<template>
  <div>
    <v-container align="center">
      <Form as="v-form" @submit="register" :validation-schema="registerSchema">
        <v-card max-width="420px">
          <v-card-item>
            <v-card-title>
              회원가입
            </v-card-title>
          </v-card-item>
          <v-card-item>
            <TextFieldWithValidation v-model="username" name="username" label="아이디" type="string" />
            <TextFieldWithValidation v-model="password" name="password" label="비밀번호" type="password" />
            <TextFieldWithValidation v-model="passwordConfirm" name="passwordConfirm" label="비밀번호 확인" type="password" />
          </v-card-item>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn type="submit" color="primary">회원가입</v-btn>
            <v-btn>취소</v-btn>
          </v-card-actions>
        </v-card>
      </Form>
    </v-container>
  </div>
</template>
<script setup>
import { Form, useForm } from 'vee-validate';
import * as yup from 'yup';

const username = ref('');
const password = ref('');
const passwordConfirm = ref('');

const registerSchema = yup.object({
  username: yup.string().min(4).required().label('아이디'),
  password: yup.string().min(8).required().label('비밀번호'),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다.')
    .required(),
});

useForm({
  validationSchema: registerSchema
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