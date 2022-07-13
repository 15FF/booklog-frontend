<template>
  <v-layout>

    <v-app-bar class="animate__animated animate__fadeIn" flat>
      <v-btn variant="text" to="/">BookLog</v-btn>
      <v-btn variant="text" to="/new-review">Review</v-btn>
      <v-spacer></v-spacer>
      <v-btn variant="text">
        <v-icon>mdi-account-outline</v-icon>
        <v-menu activator="parent">
          <v-list>
            <v-list-subheader>로그인이 필요합니다</v-list-subheader>
            <v-list-item key="0" value="0" to="/user/signin">
              <v-list-item-title>로그인</v-list-item-title>
            </v-list-item>
            <v-list-item key="1" value="1" to="/user/register">
              <v-list-item-title>회원가입</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-divider></v-divider>
      <slot />

    </v-main>

  </v-layout>
</template>
<script lang="ts" setup>
</script>

<style scoped>
</style>