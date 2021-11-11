<template>
  <div class="card">
    <div class="card-header">
      <strong> {{ favoritedRestaurants.length }} </strong>
      收藏的餐聽
    </div>
    <div class="card-body">
      <a
        v-for="restaurant of favoritedRestaurants"
        :key="restaurant.id"
      >
        <img
          :src="restaurant.image"
          class="avatar rounded me-1 mb-1"
          width="60"
          height="60"
        >
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  props: {
    favoritedRestaurants: {
      type: Array,
      required: true
    }
  }
}
</script>