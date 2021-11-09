<template>
  <div class="card">
    <div class="card-header">
      最新餐廳
    </div>
    <div class="card-body">
      <div
        v-for="restaurant of newestRestaurants"
        :key="restaurant.id"
      >
        <h4>
          <a href="#"> {{ restaurant.name }} </a>
          <small> {{ restaurant.Category.name || '未分類' }} </small>
        </h4>
        <p> {{ restaurant.description }} </p>
        {{ restaurant.createdAt | fromNow }}
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from '../mixins/fromNowFilter'

export default {
  name: 'NewestRestaurants',
  mixins: [fromNowFilter],
  props: {
    newestRestaurants: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
small {
  font-size: 10px;
}
</style>