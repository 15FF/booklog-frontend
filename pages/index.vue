<template>
  <div class="common-layout">
    <el-container align="center">
      <el-header>독후감 작성</el-header>
      <el-main>Main</el-main>
      <el-row>
        <el-col :span="6"></el-col>
        <el-col :span="12">
          <el-card class="box-card">
            <div class="sub-title my-2 text-sm text-gray-600 left" align="left">
            독후감을 작성할 책 이름
            </div>
            <el-input v-model="book.bookQuery" placeholder="책 이름">
              <template #append>
                <el-button :icon="Search" @click="book.call()" />
              </template>
            </el-input>
          
          
          <el-table :data="book.books" 
            style="width: 100%" 
            ref="singleTableRef" 
            highlight-current-row 
            @current-change="review.call"
            :table-layout="tableLayout"
          >
            <el-table-column prop="title" label="책 제목" />
            <el-table-column prop="author" label="저자" />
            <el-table-column prop="publisher" label="출판사"/>
            <el-table-column prop="pubdate" label="출판시기"/>
          </el-table>
          </el-card>
        </el-col>
        <el-col :span="6"></el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script setup>
import { 
  ElHeader, 
  ElMain, 
  ElContainer, 
  ElCard, 
  ElButton,
  ElInput,
  ElCol,
  ElRow,
  ElTable,
  ElTableColumn,
} from "element-plus"
import { Search } from '@element-plus/icons-vue'
import { useBookStore } from '../stores/book';
import { useReviewStore } from '../stores/review';

const book = useBookStore();
const review = useReviewStore();

const tableLayout = 'auto';

</script>

<style scoped>
</style>