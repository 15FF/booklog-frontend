<template>
  <v-layout>
    
    <v-app-bar class="animate__animated animate__fadeIn" flat>
      <v-btn variant="text" href="/">BookLog</v-btn>
      <v-btn variant="text" href="/review" >Review</v-btn>
      <v-spacer></v-spacer>
      <v-btn variant="text" href="/user" icon="mdi-account-outline"></v-btn>
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