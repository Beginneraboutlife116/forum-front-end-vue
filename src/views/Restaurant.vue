<template>
  <div class="container py-5">
    <RestaurantDetail :initial-restaurant="restaurant" />
    <!-- 餐廳評論 RestaurantComments -->
    <!-- 新增評論 CreateComment -->
  </div>
</template>

<script>
import RestaurantDetail from './../components/RestaurantDetail.vue'

const dummyData = {
  "restaurant": {
    "id": 1,
    "name": "Amina Larkin",
    "tel": "006.348.4894 x471",
    "address": "38084 Bashirian Estate",
    "opening_hours": "08:00",
    "description": "veniam in minus",
    "image": "https://loremflickr.com/320/240/restaurant,food/?random=23.157825066855974",
    "viewCounts": 1,
    "createdAt": "2021-11-05T03:55:21.000Z",
    "updatedAt": "2021-11-09T08:10:37.050Z",
    "CategoryId": 3,
    "Category": {
      "id": 3,
      "name": "義大利料理",
      "createdAt": "2021-11-05T03:55:21.000Z",
      "updatedAt": "2021-11-05T03:55:21.000Z"
    },
    "FavoritedUsers": [],
    "LikedUsers": [],
    "Comments": [
      {
          "id": 101,
          "text": "Minima ea hic omnis non.",
          "UserId": 3,
          "RestaurantId": 1,
          "createdAt": "2021-11-05T03:55:21.000Z",
          "updatedAt": "2021-11-05T03:55:21.000Z",
          "User": {
              "id": 3,
              "name": "user2",
              "email": "user2@example.com",
              "password": "$2a$10$ocEpcuzrgpC.PW6ID7Rf2.4iL/Wmnc6dGsCm7ipAyBlpNJaWgHz5K",
              "isAdmin": false,
              "image": null,
              "createdAt": "2021-11-05T03:55:21.000Z",
              "updatedAt": "2021-11-05T03:55:21.000Z"
          }
      },
      {
          "id": 51,
          "text": "Est ducimus soluta et sit totam voluptate ea quibusdam est.",
          "UserId": 1,
          "RestaurantId": 1,
          "createdAt": "2021-11-05T03:55:21.000Z",
          "updatedAt": "2021-11-05T03:55:21.000Z",
          "User": {
              "id": 1,
              "name": "root",
              "email": "root@example.com",
              "password": "$2a$10$6RaicCQtuc3V1fqOV6kRXeVUlRtinNPqGIfdIzxk8ssx3F.4i8pJm",
              "isAdmin": true,
              "image": null,
              "createdAt": "2021-11-05T03:55:21.000Z",
              "updatedAt": "2021-11-05T03:55:21.000Z"
          }
      },
      {
          "id": 1,
          "text": "Exercitationem officiis aliquid.",
          "UserId": 2,
          "RestaurantId": 1,
          "createdAt": "2021-11-05T03:55:21.000Z",
          "updatedAt": "2021-11-05T03:55:21.000Z",
          "User": {
            "id": 2,
            "name": "user1",
            "email": "user1@example.com",
            "password": "$2a$10$s/g.WV6HuLIpeBVCPx/nm.76XI31zEBXdmOsqQFtM1s/ISJbzWW7m",
            "isAdmin": false,
            "image": null,
            "createdAt": "2021-11-05T03:55:21.000Z",
            "updatedAt": "2021-11-05T03:55:21.000Z"
          }
      }
    ]
  },
  "isFavorited": false,
  "isLiked": false
}
export default {
  name: 'Restaurant',
  components: {
    RestaurantDetail
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        tel: '',
        address: '',
        openingHours: '',
        description: '',
        image: '',
        categoryId: 0,
        categoryName: '',
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: []
    }
  },
  created() {
    const { id: restaurantId } = this.$route.params
    // 再出發fetchRestaurant前，先取得id
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log(restaurantId)
      const { restaurant, isFavorited, isLiked } = dummyData
      const { id, name, tel, address, opening_hours, description, image, CategoryId } = restaurant
      this.restaurant = {
        id,
        name,
        tel,
        address,
        openingHours: opening_hours,
        description,
        image,
        categoryId: CategoryId,
        categoryName: restaurant.Category.name || '未分類',
        isFavorited,
        isLiked
      }
      this.restaurantComments = dummyData.restaurant.Comments
    }
  }
}
</script>