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
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field v-model="username" :rules="[rules_required, rules_username_length]" clearable label="아이디"></v-text-field>
            <v-text-field v-model="password" :rules="[rules_required, rules_password_length]" clearable label="비밀번호" type="password"></v-text-field>
          </v-form>
        </v-card-item>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn :disabled="!valid" @click="signin" color="primary">회원가입</v-btn>
          <v-btn>취소</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>
import { useAuthStore } from '~~/stores/auth';

const username = ref('');
const password = ref('');
let valid = ref(false);

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

const rules_required = value => !!value  || '필수 필드입니다.';
const rules_username_length = value => value.length >= 4  || '아이디는 4자리 이상이어야 합니다.';
const rules_password_length = value => value.length >= 8  || '비밀번호는 8자리 이상이어야 합니다.';
</script>