<template>
  <div class="container py-5">
    <NavTabs />
    <Spinner v-if="isLoading" />
    <template>
      <h1 class="mt-5">
        人氣餐廳
      </h1>
      <hr>
      <TopRestaurantCard
        v-for="restaurant of restaurants"
        :key="restaurant.id"
        :initial-restaurant="restaurant"
      />
    </template>
  </div>
</template>

<script>
import TopRestaurantCard from '../components/TopRestaurantCard.vue'
import Spinner from './../components/Spinner.vue'
import restaurantsAPI from '@/apis/restaurants.js'
import { Toast } from '@/mixins/helpers.js'

import NavTabs from './../components/NavTabs.vue'
export default {
  name: 'RestaurantsTop',
  components: {
    NavTabs,
    TopRestaurantCard,
    Spinner
  },
  data() {
    return {
      restaurants: []
    }
  },
  created() {
    this.fetchRestaurantsTop()
  },
  methods: {
    async fetchRestaurantsTop() {
      try {
        const { data } = await restaurantsAPI.getTopRestaurants()
        this.restaurants = data.restaurants.sort((a, b) => {
          return a.id - b.id
        })
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法取得人氣餐廳資料，請稍後再試'
        })
        console.log('error', error)
      }
    }
  }
}
</script>