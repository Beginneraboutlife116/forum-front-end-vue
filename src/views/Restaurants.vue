<template>
  <div class="container py-5">
    <NavTabs />

    <RestaurantsNavPills :categories="categories" />
    
    <Spinner v-if="isLoading" />
    <template>
      <div class="row">
        <RestaurantCard
          v-for="restaurant of restaurants"
          :key="restaurant.id"
          :initial-restaurant="restaurant"
        />
      </div>
    </template>
    

    <RestaurantsPagination
      v-if="totalPage.length > 1"
      :category-id="categoryId"
      :current-page="currentPage"
      :total-page="totalPage"
      :previous-page="previousPage"
      :next-page="nextPage"
    />
    <div v-if="restaurants.length < 1">
      <h1 class="fw-bolder">此類別目前無餐廳</h1>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'
import RestaurantCard from './../components/RestaurantCard.vue'
import RestaurantsNavPills from './../components/RestaurantsNavPills.vue'
import RestaurantsPagination from './../components/RestaurantsPagination.vue'
import Spinner from './../components/Spinner.vue'
import restaurantsAPI from  '@/apis/restaurants.js'
import { Toast } from '@/mixins/helpers.js'

export default {
  name: 'Restaurants',
  components: {
    NavTabs,
    RestaurantCard,
    RestaurantsNavPills,
    RestaurantsPagination,
    Spinner
  },
  data() {
    return {
      restaurants: [],
      categories: [],
      categoryId: -1,
      currentPage: 1,
      totalPage: [],
      previousPage: -1,
      nextPage: -1,
      isLoading: true
    }
  },
  created() {
    const { page = '', categoryId = '' } = this.$route.query
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
  },
  beforeRouteUpdate(to, from, next) {
    const { page = '', categoryId = '' } = to.query
    this.fetchRestaurants({ queryPage: page, queryCategoryId: categoryId })
    next()
  },
  methods: {
    async fetchRestaurants({ queryPage, queryCategoryId }) {
      try {
        this.isLoading = true
        const response = await restaurantsAPI.getRestaurants({
          page: queryPage,
          categoryId: queryCategoryId
        })
        const { categories, categoryId, next, prev, page, restaurants, totalPage } = response.data
        this.restaurants = restaurants
        this.categories = categories
        this.categoryId = categoryId
        this.currentPage = page
        this.totalPage = totalPage
        this.previousPage = prev
        this.nextPage = next
        this.isLoading = false
      } catch(error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法取得餐廳資料，請稍後再試'
        })
        // console.log('error: ', error)
      }
    }
  }
}
</script>