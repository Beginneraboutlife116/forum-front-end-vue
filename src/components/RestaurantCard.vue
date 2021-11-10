<template>
  <div class="col-md-6 col-lg-4">
    <div class="card mb-4">
      <img
        class="card-img-top"
        :src="restaurant.image"
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
          @click.stop.prevent="deleteFromFavorite"
        >
          移除最愛
        </button>
        <button
          v-else
          type="button"
          class="btn btn-primary btn-border favorite me-2"
          @click.stop.prevent="addToFavorite"
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
  </div>
</template>

<script>
export default {
  name: 'RestaurantCard',
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
    }
  },
  methods: {
    addToFavorite() {
      this.restaurant = {
        ...this.restaurant,
        isFavorited: true
      }
    },
    deleteFromFavorite() {
      this.restaurant = {
        ...this.restaurant,
        isFavorited: false
      }
    },
    addToLike() {
      this.restaurant = {
        ...this.restaurant,
        isLiked: true
      }
    },
    deleteFromLike() {
      this.restaurant = {
        ...this.restaurant,
        isLiked: false
      }
      // this.restaurant.isLiked = false
      // 上面是如果一開始就有複製的話，可以這樣做
    }
  }
}
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
}
</style>