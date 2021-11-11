<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      最新動態
    </h1>
    <hr>
    <div class="row">
      <div class="col-md-6">
        <h3>最新餐廳</h3>
        <!-- 最新餐廳 NewestRestaurants -->
        <NewestRestaurants :newest-restaurants="restaurants" />
      </div>
      <div class="col-md-6">
        <!-- 最新評論 NewestComments-->
        <h3>最新評論</h3>
        <NewestComments :newest-comments="comments" />
      </div>
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'
import NewestRestaurants from './../components/NewestRestaurants.vue'
import NewestComments from './../components/NewestComments.vue'
import { forRestaurantsFeeds as dummyData } from '../fakedata/dummyDatas.js'

export default {
  name: 'RestaurantsFeeds',
  components: {
    NavTabs,
    NewestRestaurants,
    NewestComments,
  },
  data() {
    return {
      restaurants: [],
      comments: []
    }
  },
  created() {
    this.fetchFeeds()
  },
  methods: {
    fetchFeeds() {
      this.restaurants = dummyData.restaurants
      this.comments = dummyData.comments.filter(comment => comment.Restaurant && comment.text)
      // 很棒的方法！
    }
  }
}
</script>