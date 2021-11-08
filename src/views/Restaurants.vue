<template>
  <div class="container py-5">
    <NavTabs />

    <RestaurantsNavPills :categories="categories" />

    <div class="row">
      <RestaurantCard
        v-for="restaurant of restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </div>

    <!-- RestaurantsPagination -->
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'
import RestaurantCard from './../components/RestaurantCard.vue'
import RestaurantsNavPills from './../components/RestaurantsNavPills.vue'

const dummyData = {
  "restaurants": [ // RestaurantCard會用到的資料
    {
        "id": 1,
        "name": "Amina Larkin",
        "tel": "006.348.4894 x471",
        "address": "38084 Bashirian Estate",
        "opening_hours": "08:00",
        "description": "veniam in minus",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.157825066855974",
        "viewCounts": 0,
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z",
        "CategoryId": 3,
        "Category": {
          "id": 3,
          "name": "義大利料理",
          "createdAt": "2021-11-05T03:55:21.000Z",
          "updatedAt": "2021-11-05T03:55:21.000Z"
        },
        "isFavorited": false,
        "isLiked": false
    },
    {
        "id": 2,
        "name": "Enola Nicolas",
        "tel": "571.442.0605",
        "address": "6788 Mraz Summit",
        "opening_hours": "08:00",
        "description": "Labore et ex.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=54.351271905511126",
        "viewCounts": 0,
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z",
        "CategoryId": 2,
        "Category": {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z"
        },
        "isFavorited": false,
        "isLiked": false
    },
    {
        "id": 3,
        "name": "Daren O'Conner",
        "tel": "1-745-483-8983 x938",
        "address": "6761 Clinton Branch",
        "opening_hours": "08:00",
        "description": "Aut et a. Dolorem facilis unde unde aspernatur. Oc",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=98.9109644399176",
        "viewCounts": 0,
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z",
        "CategoryId": 1,
        "Category": {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z"
        },
        "isFavorited": false,
        "isLiked": false
    },
    {
        "id": 4,
        "name": "Breanna Johnson",
        "tel": "779-190-3310 x192",
        "address": "0632 Torp Center",
        "opening_hours": "08:00",
        "description": "Sed ullam et quaerat.\nEos aut voluptates.\nOfficiis",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=65.14020374967595",
        "viewCounts": 0,
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z",
        "CategoryId": 2,
        "Category": {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z"
        },
        "isFavorited": false,
        "isLiked": false
    },
    {
        "id": 5,
        "name": "Lisa Rutherford",
        "tel": "091-298-5502",
        "address": "1606 Veum Key",
        "opening_hours": "08:00",
        "description": "Ut sunt autem. Dolorum consequuntur alias quis. Ne",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=73.93331875619546",
        "viewCounts": 0,
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z",
        "CategoryId": 1,
        "Category": {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z"
        },
        "isFavorited": false,
        "isLiked": false
    },
    {
        "id": 6,
        "name": "Lisandro Maggio",
        "tel": "(196) 443-2325",
        "address": "13600 Gideon Points",
        "opening_hours": "08:00",
        "description": "maiores ut dolores",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=31.27456644758315",
        "viewCounts": 0,
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z",
        "CategoryId": 1,
        "Category": {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z"
        },
        "isFavorited": false,
        "isLiked": false
    },
    {
        "id": 7,
        "name": "Miss Joana Zieme",
        "tel": "870.235.8447 x638",
        "address": "781 Schaden Forge",
        "opening_hours": "08:00",
        "description": "Dolores velit eum eligendi quasi est ipsam volupta",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=58.48077346124223",
        "viewCounts": 0,
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z",
        "CategoryId": 1,
        "Category": {
            "id": 1,
            "name": "中式料理",
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z"
        },
        "isFavorited": false,
        "isLiked": false
    },
    {
        "id": 8,
        "name": "Clare Balistreri V",
        "tel": "546-916-7960",
        "address": "97470 Ted Plains",
        "opening_hours": "08:00",
        "description": "Dolore recusandae laboriosam debitis est voluptas ",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=33.85585385235774",
        "viewCounts": 0,
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z",
        "CategoryId": 5,
        "Category": {
            "id": 5,
            "name": "素食料理",
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z"
        },
        "isFavorited": false,
        "isLiked": false
    },
    {
        "id": 9,
        "name": "Felicity Williamson",
        "tel": "496.577.4775",
        "address": "75714 Manuel Mission",
        "opening_hours": "08:00",
        "description": "alias",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=66.8952470633362",
        "viewCounts": 0,
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z",
        "CategoryId": 3,
        "Category": {
            "id": 3,
            "name": "義大利料理",
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z"
        },
        "isFavorited": false,
        "isLiked": false
    },
    {
        "id": 10,
        "name": "Meaghan Keeling",
        "tel": "425.171.8188",
        "address": "62317 Collins Union",
        "opening_hours": "08:00",
        "description": "Quo unde recusandae in occaecati et tempora velit.",
        "image": "https://loremflickr.com/320/240/restaurant,food/?random=20.3269609558979",
        "viewCounts": 0,
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z",
        "CategoryId": 2,
        "Category": {
            "id": 2,
            "name": "日本料理",
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z"
        },
        "isFavorited": false,
        "isLiked": false
    }
  ],
  "categories": [ // RestaurantsNavPills會用到的資料
    {
        "id": 1,
        "name": "中式料理",
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z"
    },
    {
        "id": 2,
        "name": "日本料理",
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z"
    },
    {
        "id": 3,
        "name": "義大利料理",
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z"
    },
    {
        "id": 4,
        "name": "墨西哥料理",
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z"
    },
    {
        "id": 5,
        "name": "素食料理",
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z"
    },
    {
        "id": 6,
        "name": "美式料理",
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z"
    },
    {
        "id": 7,
        "name": "複合式料理",
        "createdAt": "2021-11-05T03:55:21.000Z",
        "updatedAt": "2021-11-05T03:55:21.000Z"
    }
  ],
  "categoryId": "", // 當下用哪個類別來篩選餐廳 - categoryId 要用在網址的 query 裡
  "page": 1, // 現在顯示哪一頁面
  "totalPage": [ // 用在RestaurantsPagination中
    1,
    2,
    3,
    4,
    5
  ],
  "prev": 1,
  "next": 2
}

export default {
  name: 'Restaurants',
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1
    }
  },
  created() {
    this.fetchRestaurants()
  },
  methods: {
    fetchRestaurants() {
      const {restaurants, categories, categoryId, page, totalPage, prev, next} = dummyData
      this.restaurants = restaurants
      this.categories = categories
      this.categoryId = categoryId
      this.currentPage = page
      this.totalPage = totalPage
      this.previousPage = prev
      this.nextPage = next
    }
  }
}
</script>