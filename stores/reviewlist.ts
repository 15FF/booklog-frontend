import { defineStore } from "pinia";

export const useReviewlistStore = defineStore('reviewlist', () => {
  let reviewlist = ref([]);

  function call() {
    reviewlist.value = [];
    const result = {
      "count": 6,
      "items": [
        {
          "title": "qilip의 greeng00se 사냥기록 v22.3",
          "user": "qilip",
          "book": "greeng00se 여행록",
          "image": "https://bookthumb-phinf.pstatic.net/cover/111/705/11170597.jpg?type=m1&udate=20190813",
          "rating": 4.5,
          "status": true,
          "description": "대충 긴 내용에 대한 이야기"
        },
        {
          "title": "greeng00se '어떻게 하면 날먹할 수 있는가'",
          "user": "greeng00se",
          "book": "qilip은 누구인가",
          "image": "https://bookthumb-phinf.pstatic.net/cover/111/705/11170597.jpg?type=m1&udate=20190813",
          "rating": 2.5,
          "status": true,
          "description": "대충 적당한 내용에 대한 이야기"
        },
        {
          "title": "greeng00se '어떻게 하면 날먹할 수 있는가'",
          "user": "greeng00se",
          "book": "qilip은 누구인가",
          "image": "https://bookthumb-phinf.pstatic.net/cover/111/705/11170597.jpg?type=m1&udate=20190813",
          "rating": 2.5,
          "status": true,
          "description": "대충 적당한 내용에 대한 이야기"
        },
        {
          "title": "greeng00se '어떻게 하면 날먹할 수 있는가'",
          "user": "greeng00se",
          "book": "qilip은 누구인가",
          "image": "https://bookthumb-phinf.pstatic.net/cover/111/705/11170597.jpg?type=m1&udate=20190813",
          "rating": 2.5,
          "status": true,
          "description": "대충 적당한 내용에 대한 이야기"
        },
        {
          "title": "greeng00se '어떻게 하면 날먹할 수 있는가'",
          "user": "greeng00se",
          "book": "qilip은 누구인가",
          "image": "https://bookthumb-phinf.pstatic.net/cover/111/705/11170597.jpg?type=m1&udate=20190813",
          "rating": 2.5,
          "status": true,
          "description": "대충 적당한 내용에 대한 이야기"
        },
        {
          "title": "greeng00se '어떻게 하면 날먹할 수 있는가'",
          "user": "greeng00se",
          "book": "qilip은 누구인가",
          "image": "https://bookthumb-phinf.pstatic.net/cover/111/705/11170597.jpg?type=m1&udate=20190813",
          "rating": 2.5,
          "status": true,
          "description": "대충 적당한 내용에 대한 이야기"
        }
      ]
    }

    result.items.forEach((review) => {
      reviewlist.value.push(review);
    })
  }

  call();
  return { reviewlist };
})