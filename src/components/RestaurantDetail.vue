<template>
  <div class="row">
    <div class="col-md-12 mb-3">
      <h1> {{ restaurant.name }} </h1>
      <p class="badge bg-secondary mt-1 mb-3">
        {{ restaurant.categoryName }}
      </p>
    </div>
    <div class="col-lg-4">
      <img
        class="img-fluid d-block mx-auto" 
        :src="restaurant.image | emptyImage"
        style="width: 250px; margin-bottom: 25px;"
      >
      <div class="contact-info-wrap">
        <ul class="list-unstyled">
          <li>
            <strong>Opening Hour:</strong>
            {{ restaurant.openingHours }}
          </li>
          <li>
            <strong>Tel:</strong>
            {{ restaurant.tel }}
          </li>
          <li>
            <strong>Address:</strong>
            {{ restaurant.address }}
          </li>
        </ul>
      </div>
    </div>
    <div class="col-lg-8">
      <p> {{ restaurant.description }} </p>
      <router-link
        class="btn btn-primary btn-border me-2"
        :to="{name: 'restaurant-dashboard', params: {id: restaurant.id}}"
      >
        Dashboard
      </router-link>

      <button
        v-if="restaurant.isFavorited"
        type="button"
        class="btn btn-danger btn-border me-2"
        @click.stop.prevent="deleteFromFavorite"
      >
        移除最愛
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary btn-border me-2"
        @click.stop.prevent="addToFavorite(restaurant.id)"
      >
        加到最愛
      </button>
      <button
        v-if="restaurant.isLiked"
        type="button"
        class="btn btn-danger like me-2"
        @click.stop.prevent="deleteFromLike"
      >
        Unlike
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary like me-2"
        @click.stop.prevent="addToLike"
      >
        Like
      </button>
    </div>
  </div>
</template>

<script>
import emptyImageFilter from './../mixins/emptyImageFilter.js'
import usersAPI from '@/apis/users.js'
import { Toast } from '@/mixins/helpers.js'

export default {
  name: 'RestaurantDetail',
  mixins: [emptyImageFilter],
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      restaurant: {}
    }
  },
  watch: {
    initialRestaurant(newValue) {
      this.restaurant = {
        ...this.restaurant,
        ...newValue
      }
    }
  },
  methods: {
    async addToFavorite(restaurantId) {
      try {
        const { data } = await usersAPI.addToFavorite({ restaurantId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurant = {
          ...this.restaurant,
          isFavorited: true
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法新增餐廳到最愛，請稍後再試'
        })
        console.log('error: ', error, error.message)
      }
    },
    deleteFromFavorite() {
      this.restaurant = {
        ...this.initialRestaurant,
        isFavorited: false
      }
    },
    addToLike() {
      this.restaurant = {
        ...this.initialRestaurant,
        isLiked: true
      }
    },
    deleteFromLike() {
      this.restaurant = {
        ...this.initialRestaurant,
        isLiked: false
      }
    },
  }
}
</script>