<template>
  <el-row>
    <el-col :span="2"></el-col>
    <el-col :span="20">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        :ellipsis="false"
        active-text-color="#555555"
        text-color="#555555"
      >
        <el-menu-item index="0">BookLog</el-menu-item>
        <el-menu-item index="1">Reviews</el-menu-item>
        <div class="flex-grow" />
        <el-menu-item index="2">
          <div><el-icon><User style="font-size:24px;"/></el-icon></div>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="2"></el-col>
  </el-row>
  <slot />
</template>

<script lang="ts" setup>
import { 
  ElMenu,
  ElMenuItem,
  ElImage,
  ElRow,
  ElCol,
  ElIcon,
} from "element-plus"
import { Icon } from "@iconify/vue";

const activeIndex = ref('1')
</script>

<style scoped>
</style>