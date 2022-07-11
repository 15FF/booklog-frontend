<template>
  <v-layout>
    
    <v-app-bar flat>
      <v-app-bar-title href="/">BookLog</v-app-bar-title>
      <v-spacer></v-spacer>

      <v-btn variant="text" href="/review" >Review</v-btn>
      <v-btn variant="text" href="/user" icon="mdi-account-outline"></v-btn>
    </v-app-bar>
    
    <v-main>
      <slot />
    </v-main>

  </v-layout>
</template>
<script lang="ts" setup>
</script>

<style scoped>
</style>