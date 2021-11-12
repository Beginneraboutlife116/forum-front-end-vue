<template>
  <div
    class="card mb-3"
    style="max-width: 540px;margin: auto;"
  >
    <div class="row g-0">
      <div class="col-md-4">
        <router-link :to="{name: 'restaurant', params: {id: topRestaurant.id}}">
          <img
            class="card-img"
            :src="topRestaurant.image | emptyImage"
          >
        </router-link>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">
            {{ topRestaurant.name }}
          </h5>
          <span class="badge bg-secondary">收藏數：{{ topRestaurant.FavoriteCount }}</span>
          <p class="card-text">
            {{ topRestaurant.description }}
          </p>
          <router-link
            :to="{name: 'restaurant', params: {id: topRestaurant.id}}"
            class="btn btn-primary me-2"
          >
            Show
          </router-link>

          <button
            v-if="topRestaurant.isFavorited"
            type="button"
            class="btn btn-danger me-2"
            @click.stop.prevent="deleteFromFavorite"
          >
            移除最愛
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="addToFavorite"
          >
            加到最愛
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import emptyImageFilter from './../mixins/emptyImageFilter.js'

export default {
  name: 'TopRestaurantCard',
  mixins: [emptyImageFilter],
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      topRestaurant: this.initialRestaurant
    }
  },
  methods: {
    addToFavorite() {
      this.topRestaurant = {
        ...this.topRestaurant,
        isFavorited: true
      }
    },
    deleteFromFavorite() {
      this.topRestaurant = {
        ...this.topRestaurant,
        isFavorited: false
      }
    }
  }
}
</script>