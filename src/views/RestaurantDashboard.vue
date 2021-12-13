<template>
  <div class="container py-5">
    <Spinner v-if="isLoading" />
    <template v-else>
      <div>
        <h1>{{ restaurant.name }}</h1>
        <span class="badge bg-secondary mt-1 mb-3">
          {{ restaurant.category.name }}
        </span>
      </div>
    </template>

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
import restaurantsAPI from '@/apis/restaurants.js'
import { Toast } from '@/mixins/helpers.js'
import Spinner from './../components/Spinner.vue'

export default {
  name: 'RestaurantDashboard',
  components: {
    Spinner
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        category: {},
        comments: [],
        viewCounts: 0
      },
      isLoading: true
    }
  },
  created() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurantForDashboard(restaurantId)
  },
  methods: {
    async fetchRestaurantForDashboard(restaurantId) {
      try {
        this.isLoading = true
        const { data } = await restaurantsAPI.getRestaurant({ restaurantId })
        const { restaurant } = data
        const { id, name, viewCounts, Category, Comments } = restaurant
        this.restaurant = {
          id,
          name,
          viewCounts,
          category: Category,
          comments: Comments,
        }
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資訊，請稍後再試'
        })
      }
    }
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params
    this.fetchRestaurantForDashboard(id)
    next()
  }
}
</script>