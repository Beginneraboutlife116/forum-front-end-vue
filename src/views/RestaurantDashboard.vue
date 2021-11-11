<template>
  <div class="container py-5">
    <div>
      <h1>{{ restaurant.name }}</h1>
      <span class="badge bg-secondary mt-1 mb-3">
        {{ restaurant.category.name }}
      </span>
    </div>

    <hr>

    <ul>
      <li>評論數： {{ restaurant.comments.length }}</li>
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
import { forRestaurantAndRestaurantDashboard as dummyData } from '../fakedata/dummyDatas'

export default {
  name: 'RestaurantDashboard',
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        category: {},
        comments: [],
        viewCounts: 0
      },
    }
  },
  created() {
    this.fetchRestaurantForDashboard()
  },
  methods: {
    fetchRestaurantForDashboard() {
      const { restaurant } = dummyData
      const { id, name, viewCounts, Category, Comments } = restaurant
      this.restaurant = {
        id,
        name,
        viewCounts,
        category: Category,
        comments: Comments,
      }
    }
  }
}
</script>