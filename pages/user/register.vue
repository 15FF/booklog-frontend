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
            <v-text-field label="아이디"></v-text-field>
            <v-text-field label="비밀번호" type="password"></v-text-field>
            <v-text-field label="비밀번호 확인" type="password"></v-text-field>
          </v-form>
        </v-card-item>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary">회원가입</v-btn>
          <v-btn>취소</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </div>
</template>

<script setup>

</script>

<style>
</style>