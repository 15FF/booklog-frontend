<template>
  <div>
    <v-container align="center">
      <Form as="v-form" @submit="register" :validation-schema="registerSchema">
        <v-card variant="outlined" max-width="420px">
          <v-card-item>
            <v-card-title> 회원가입 </v-card-title>
          </v-card-item>
          <v-card-item>
            <TextFieldWithValidation
              v-model="username"
              name="username"
              label="아이디"
              type="string"
            />
            <TextFieldWithValidation
              v-model="password"
              name="password"
              label="비밀번호"
              type="password"
            />
            <TextFieldWithValidation
              v-model="passwordConfirm"
              name="passwordConfirm"
              label="비밀번호 확인"
              type="password"
            />
          </v-card-item>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn type="submit" color="primary">회원가입</v-btn>
          </v-card-actions>
        </v-card>
      </Form>
      <v-snackbar v-model="registerAlert" location="bottom"
        >회원가입 실패
        <template v-slot:actions>
          <v-btn color="red" @click="registerAlert = false"> 닫기 </v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import { Form, useForm } from "vee-validate";
import * as yup from "yup";
import { useAuthStore } from "~~/stores/auth";

const username = ref("");
const password = ref("");
const passwordConfirm = ref("");
const registerAlert = ref(false);

const registerSchema = yup.object({
  username: yup.string().min(4).required().label("아이디"),
  password: yup.string().min(8).required().label("비밀번호"),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref("password")], "비밀번호가 일치하지 않습니다.")
    .required(),
});

useForm({
  validationSchema: registerSchema,
});

const register = async () => {
  const authStore = useAuthStore();

  const { error } = await authStore.register(username.value, password.value);

  if (error.value) {
    registerAlert.value = true;
    return;
  }

  return navigateTo({
    path: "/",
  });
};
</script>
