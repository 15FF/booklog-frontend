<template>
  <div class="animate__animated animate__fadeIn">
    <v-container align="center">
      <v-card max-width="420px">
        <v-card-item>
          <v-card-title>
            회원가입
          </v-card-title>
        </v-card-item>
        <v-card-item>
          <v-form>
            
            <v-text-field v-model="username" :rules="[rules_required]" clearable label="아이디"></v-text-field>
            <v-text-field v-model="password" :rules="[rules_required]" clearable label="비밀번호" type="password"></v-text-field>
            <v-text-field v-model="passwordConfirm" :rules="[rules_required, rules_confirm]" clearable label="비밀번호 확인" type="password"></v-text-field>
          </v-form>
        </v-card-item>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="register" color="primary">회원가입</v-btn>
          <v-btn>취소</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>

const username = ref('');
const password = ref('');
const passwordConfirm = ref('');

async function register() {
  const body = {
    "username": username.value,
    "password": password.value,
  };  

  const { data, pending, refresh, error } = await useFetch('http://localhost:3000/auth/register', {
    method: 'POST',
    body: body
  });

  return navigateTo({
    path: '/',
  })
}

const rules_required = value => !!value  || '필수 필드입니다.';
const rules_length = value => !!value.length >= 8  || '비밀번호는 8자리 이상이어야 합니다.';
const rules_confirm = value => value == password.value || '비밀번호와 동일해야 합니다.';
</script>

<style>
</style>