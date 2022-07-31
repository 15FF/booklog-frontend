<template>
  <v-container align="center">
    <v-card width="480px">
      <v-card-item>
        <v-card-title> 404 Not Found </v-card-title>
      </v-card-item>

      <v-card-item> 주소가 잘못되었거나 오류가 발생했습니다. </v-card-item>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="handleError">메인페이지로 이동</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script setup>
const props = defineProps({
  error: Object,
});
const handleError = () => {
  clearError("/");
  navigateTo("/");
};
</script>
