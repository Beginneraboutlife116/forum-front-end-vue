<template>
  <div class="card">
    <div class="card-header">
      <strong> {{ favoritedRestaurants.length }} </strong>
      收藏的餐聽
    </div>
    <div class="card-body">
      <router-link
        v-for="restaurant of favoritedRestaurants"
        :key="restaurant.id"
        :to="{name: 'restaurant', params: {id: restaurant.id}}"
      >
        <img
          :src="restaurant.image | emptyImage"
          class="avatar rounded me-1 mb-1"
          width="60"
          height="60"
        >
      </router-link>
    </div>
  </div>
</template>

<script>
import emptyImageFilter from './../mixins/emptyImageFilter.js'

export default {
  name: '',
  mixins: [emptyImageFilter],
  props: {
    favoritedRestaurants: {
      type: Array,
      required: true
    }
  }
}
</script>