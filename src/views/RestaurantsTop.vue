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
import { forRestaurantsTop as dummyData } from '../fakedata/dummyDatas.js'

import NavTabs from './../components/NavTabs.vue'
export default {
  name: 'RestaurantsTop',
  components: {
    NavTabs,
    TopRestaurantCard
  },
  data() {
    return {
      restaurants: []
    }
  },
  created() {
    this.fetccRestaurantsTop()
  },
  methods: {
    fetccRestaurantsTop() {
      this.restaurants = [...dummyData.restaurants]
    }
  }
}
</script>