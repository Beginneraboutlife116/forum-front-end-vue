<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        :src="restaurant.image | emptyImage"
        alt="Card image cap"
        width="286px"
        height="180px"
      >
      <div class="card-body">
        <p class="card-text">
          <router-link
            :to="{ name: 'restaurant' , params: {id: restaurant.id}}"
            class="text-decoration-none"
          >
            {{ restaurant.name }}
          </router-link>
        </p>
        <span class="badge bg-secondary"> {{ restaurant.Category.name }} </span>
        <p class="card-text text-truncate">
          {{ restaurant.description }}
        </p>
      </div>
      <div class="card-footer">
        <button
          v-if="restaurant.isFavorited"
          type="button"
          class="btn btn-danger btn-border favorite me-2"
          @click.stop.prevent="deleteFromFavorite(restaurant.id)"
        >
          移除最愛
        </button>
        <button
          v-else
          type="button"
          class="btn btn-primary btn-border favorite me-2"
          @click.stop.prevent="addToFavorite(restaurant.id)"
        >
          加到最愛
        </button>
        <button
          v-if="restaurant.isLiked"
          type="button"
          class="btn btn-danger like me-2"
          @click.stop.prevent="deleteFromLike(restaurant.id)"
        >
          Unlike
        </button>
        <button
          v-else
          type="button"
          class="btn btn-primary like me-2"
          @click.stop.prevent="addToLike(restaurant.id)"
        >
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import emptyImageFilter from './../mixins/emptyImageFilter.js'
import { Toast } from '@/mixins/helpers.js'
import usersAPI from '@/apis/users.js'

export default {
  name: 'RestaurantCard',
  mixins: [emptyImageFilter],
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      restaurant: this.initialRestaurant
      // 先複製一份起來不是更保險嗎？這樣就可以如下方like function作法，不用寫太多程式碼
      // restaurant: {...this.initialRestaurant}
      // 上面的方法會遇到淺拷貝的問題
    }
  },
  methods: {
    async addToFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.addToFavorite({restaurantId})
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: true
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
        this.restaurant = {
          ...this.restaurant,
          isFavorited: false
        }
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳刪除最愛，請稍後再試'
        })
        console.log('error: ', error)
      }
    },
    async addToLike(restaurantId) {
      try {
        const { data } = await usersAPI.addToLike({ restaurantId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: true
        }
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳加入喜愛，請稍後再嘗試'
        })
        console.log('error: ', error)
      }
    },
    async deleteFromLike(restaurantId) {
      try {
        const { data } = await usersAPI.deleteFromLike({ restaurantId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isLiked: false
        }
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳從喜愛刪除，請稍後再嘗試'
        })
        console.log('error: ', error)
      }
    }
  }
}
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
}
</style>