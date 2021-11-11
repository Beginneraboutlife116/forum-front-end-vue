<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      人氣餐廳
    </h1>
    <hr>
    <TopRestaurantCard
      v-for="restaurant of restaurants"
      :key="restaurant.id"
      :initial-restaurant="restaurant"
    />
  </div>
</template>

<script>
import TopRestaurantCard from '../components/TopRestaurantCard.vue'

const dummyData = {
  "restaurants": [
    {
      "id": 50,
      "name": "Alyson Hickle",
      "tel": "(103) 589-9154",
      "address": "6782 Kacey Lakes",
      "opening_hours": "08:00",
      "description": "Magni fugiat totam.\nNulla qui et repellat officiis",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=67.44840961854244",
      "viewCounts": 0,
      "createdAt": "2021-11-05T03:55:21.000Z",
      "updatedAt": "2021-11-05T03:55:21.000Z",
      "CategoryId": 4,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 49,
      "name": "Jordi Luettgen",
      "tel": "1-720-741-0830 x80863",
      "address": "84299 Jarred Isle",
      "opening_hours": "08:00",
      "description": "Eos suscipit autem. Sunt velit eveniet. Est animi ",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=6.65767723784334",
      "viewCounts": 0,
      "createdAt": "2021-11-05T03:55:21.000Z",
      "updatedAt": "2021-11-05T03:55:21.000Z",
      "CategoryId": 1,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 48,
      "name": "Harry Dietrich",
      "tel": "418.800.2540 x3232",
      "address": "1034 Anissa Pike",
      "opening_hours": "08:00",
      "description": "Nihil quo hic nihil ad omnis facilis quia repellat",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=26.1837874767648",
      "viewCounts": 0,
      "createdAt": "2021-11-05T03:55:21.000Z",
      "updatedAt": "2021-11-05T03:55:21.000Z",
      "CategoryId": 1,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 47,
      "name": "Tate O'Keefe",
      "tel": "718.767.2373 x0922",
      "address": "2635 Corwin Greens",
      "opening_hours": "08:00",
      "description": "eveniet",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=10.25546667728241",
      "viewCounts": 0,
      "createdAt": "2021-11-05T03:55:21.000Z",
      "updatedAt": "2021-11-05T03:55:21.000Z",
      "CategoryId": 1,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 46,
      "name": "Selena Schowalter",
      "tel": "420.563.9028 x3923",
      "address": "0403 Orie Ports",
      "opening_hours": "08:00",
      "description": "Fuga est qui. Illo aut minima necessitatibus minim",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=85.97000929869627",
      "viewCounts": 0,
      "createdAt": "2021-11-05T03:55:21.000Z",
      "updatedAt": "2021-11-05T03:55:21.000Z",
      "CategoryId": 1,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 45,
      "name": "Pierre Murphy PhD",
      "tel": "(945) 379-9367 x34314",
      "address": "465 Anderson Hill",
      "opening_hours": "08:00",
      "description": "et",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=34.877851641319246",
      "viewCounts": 0,
      "createdAt": "2021-11-05T03:55:21.000Z",
      "updatedAt": "2021-11-05T03:55:21.000Z",
      "CategoryId": 3,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 44,
      "name": "Miss Mohamed Bins",
      "tel": "1-384-943-9603",
      "address": "9618 Mittie Meadow",
      "opening_hours": "08:00",
      "description": "Nisi fugiat corporis sapiente ipsum illum maiores ",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=93.05888608945618",
      "viewCounts": 0,
      "createdAt": "2021-11-05T03:55:21.000Z",
      "updatedAt": "2021-11-05T03:55:21.000Z",
      "CategoryId": 5,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 43,
      "name": "Devyn Hirthe",
      "tel": "358-210-2369 x810",
      "address": "733 Mayer Wells",
      "opening_hours": "08:00",
      "description": "Explicabo laudantium similique ratione.",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=91.15389708272197",
      "viewCounts": 0,
      "createdAt": "2021-11-05T03:55:21.000Z",
      "updatedAt": "2021-11-05T03:55:21.000Z",
      "CategoryId": 1,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 42,
      "name": "Kayley Denesik",
      "tel": "428-434-9139",
      "address": "7195 Marcos Ridges",
      "opening_hours": "08:00",
      "description": "Qui aspernatur voluptas qui. Animi id aspernatur r",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=82.5405801070108",
      "viewCounts": 0,
      "createdAt": "2021-11-05T03:55:21.000Z",
      "updatedAt": "2021-11-05T03:55:21.000Z",
      "CategoryId": 1,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    },
    {
      "id": 41,
      "name": "Brooke Schmidt",
      "tel": "448.451.4384",
      "address": "71249 Nikolaus Station",
      "opening_hours": "08:00",
      "description": "Distinctio recusandae dolorem unde repellendus com",
      "image": "https://loremflickr.com/320/240/restaurant,food/?random=24.675595704867725",
      "viewCounts": 0,
      "createdAt": "2021-11-05T03:55:21.000Z",
      "updatedAt": "2021-11-05T03:55:21.000Z",
      "CategoryId": 2,
      "FavoritedUsers": [],
      "isFavorited": false,
      "FavoriteCount": 0
    }
  ]
}

import NavTabs from './../components/NavTabs.vue'
export default {
  name: 'RestaurantsTop',
  components: {
    NavTabs,
    TopRestaurantCard
  },
  data() {
    return {
      restaurants: dummyData.restaurants
    }
  }
}
</script>