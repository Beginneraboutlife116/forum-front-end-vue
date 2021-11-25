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
            @click.stop.prevent="deleteFromFavorite(topRestaurant.id)"
          >
            移除最愛
          </button>
          <button
            v-else
            type="button"
            class="btn btn-primary"
            @click.stop.prevent="addToFavorite(topRestaurant.id)"
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
import { Toast } from '@/mixins/helpers.js'
import usersAPI from '@/apis/users.js'

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
    async addToFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.addToFavorite({ restaurantId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.topRestaurant = {
          ...this.topRestaurant,
          isFavorited: true,
          FavoriteCount: this.topRestaurant.FavoriteCount + 1
        }
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳加入最愛，請稍候嘗試'
        })
        console.log('error: ', error)
      }
    },
    async deleteFromFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.deleteFromFavorite({ restaurantId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.topRestaurant = {
          ...this.topRestaurant,
          isFavorited: false,
          FavoriteCount: this.topRestaurant.FavoriteCount - 1
        }
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳刪除最愛，請稍後再試'
        })
        console.log('error: ', error)
      }
    }
  }
}
</script>