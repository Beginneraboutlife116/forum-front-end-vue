<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge bg-secondary mt-1 mb-3">
        {{ restaurant.Category.name }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.Comments.length }}</li>
      <li>瀏覽次數： {{ restaurant.viewCounts }}</li>
    </ul>

    <button
      type="button"
      class="btn btn-link"
      @click="$router.back()"
    >
      回上一頁
    </button>
  </div>
</template>

<script>
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
    "updatedAt": "2021-11-09T08:10:37.000Z",
    "CategoryId": 3,
    "Category": {
      "id": 3,
      "name": "義大利料理",
      "createdAt": "2021-11-05T03:55:21.000Z",
      "updatedAt": "2021-11-05T03:55:21.000Z"
    },
    "Comments": [
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
      }
    ]
  }
}

export default {
  name: 'RestaurantDashboard',
  data() {
    return {
      restaurant: dummyData.restaurant,
    }
  }
}
</script>