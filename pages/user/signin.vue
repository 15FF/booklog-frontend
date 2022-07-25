<template>
  <div>
    <v-container align="center">
      <v-card max-width="420px">
        <v-card-item>
          <v-card-title>
            로그인
          </v-card-title>
        </v-card-item>
        <v-card-item>
          <Form as="v-form" :validation-schema="signinSchema" v-model="isValid" lazy-validation>
            <TextFieldWithValidation v-model="username" name="username" label="아이디" type="string" />
            <TextFieldWithValidation v-model="password" name="password" label="비밀번호" type="password" />
          </Form>
        </v-card-item>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :disabled="!isValid" @click="signin" color="primary">회원가입</v-btn>
          <v-btn>취소</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { useAuthStore } from '~~/stores/auth';
import { Form } from 'vee-validate';
import * as yup from 'yup';

const username = ref('');
const password = ref('');
const isValid = ref(false);

const signinSchema = yup.object({
  username: yup.string().min(4).required().label('아이디'),
  password: yup.string().min(8).required().label('비밀번호'),
});

async function signin() {
  const body = {
    "username": username.value,
    "password": password.value,
  };  

  const result = await useFetch('http://localhost:3000/auth/signin', {
    method: 'POST',
    body: body
  });
  const auth = useAuthStore();  
  auth.accessToken = result.data.value.accessToken;

  return navigateTo({
    path: '/',
  })
}
</script>