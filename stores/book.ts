import { defineStore } from "pinia";

export const useBookStore = defineStore('book', () => {
  let bookQuery = ref('');
  let books = ref([]);

  function clear() {
    bookQuery = ref('');
  }

  function call() {
    console.log(bookQuery.value);
    console.log(books.value);
    books.value = [];
    const result = {
      "count": 3,
      "items": [
        {
          "title": "김케장 단편선",
          "image": "https://bookthumb-phinf.pstatic.net/cover/111/705/11170597.jpg?type=m1&udate=20190813",
          "author": "김케장",
          "publisher": "나무야미안해",
          "pubdate": "2016-10-10",
          "isbn": "9791195882601"
        },
        {
          "title": "신춘문예와 무관한 시집 (2019)",
          "image": "https://bookthumb-phinf.pstatic.net/cover/145/684/14568446.jpg?type=m1&udate=20190406",
          "author": "장지원, 연호, 김컴퓨터, 김현체, 김민수",
          "publisher": "나무야미안해",
          "pubdate": "2019-02-02",
          "isbn": "9791189874056"
        },
        {
          "title": "신춘문예와 무관한 시집 (2019)",
          "image": "https://bookthumb-phinf.pstatic.net/cover/145/628/14562825.jpg?type=m1&udate=20191129",
          "author": "장지원",
          "publisher": "나무야미안해",
          "pubdate": "2019-02-02",
          "isbn": "9791189474058"
        }
      ]
    }

    result.items.forEach((book) => {
      books.value.push(book);
    })
  }
  return { bookQuery, clear, call, books };
})