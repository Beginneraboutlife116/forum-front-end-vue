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
          <a
            href="#"
            class="text-decoration-none"
          >
            {{ restaurant.name }}
          </a>
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
          @click.stop.prevent="deleteFavorite"
        >
          移除最愛
        </button>
        <button
          v-else
          type="button"
          class="btn btn-primary btn-border favorite me-2"
          @click.stop.prevent="addFavorite"
        >
          加到最愛
        </button>
        <button
          v-if="restaurant.isLiked"
          type="button"
          class="btn btn-danger like me-2"
          @click.stop.prevent="deleteLike"
        >
          Unlike
        </button>
        <button
          v-else
          type="button"
          class="btn btn-primary like me-2"
          @click.stop.prevent="addLike"
        >
          Like
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    initialRestaurant: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      restaurant: {...this.initialRestaurant}
      // restaurant: this.initialRestaurant
      // 先複製一份起來不是更保險嗎？這樣就可以如下方like function作法，不用寫太多程式碼
    }
  },
  methods: {
    addFavorite() {
      this.restaurant = {
        ...this.restaurant,
        isFavorited: true
      }
    },
    deleteFavorite() {
      this.restaurant = {
        ...this.restaurant,
        isFavorited: false
      }
      // 保留下來觀看差異，主要是因為一開始並沒有複製props
    },
    addLike() {
      this.restaurant.isLiked = true
    },
    deleteLike() {
      this.restaurant.isLiked = false
    }
  }
}
</script>

<style scoped>
.card-img-top {
  object-fit: cover;
}
</style>