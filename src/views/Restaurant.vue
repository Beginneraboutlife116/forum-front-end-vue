<template>
  <div class="container py-5">
    <RestaurantDetail :initial-restaurant="restaurant" />

    <RestaurantComments
      :restaurant-comments="restaurantComments"
      @after-delete-comment="afterDeleteComment"
    />
    <!-- 新增評論 CreateComment -->
    <CreateComment
      :restaurant-id="restaurant.id"
      @after-create-comment="afterCreateComment"
    />
  </div>
</template>

<script>
import RestaurantDetail from './../components/RestaurantDetail.vue'
import RestaurantComments from './../components/RestaurantComments.vue'
import CreateComment from '../components/CreateComment.vue'
import restaurantsAPI from '@/apis/restaurants.js'
import { Toast } from '@/mixins/helpers.js'
import { mapState } from 'vuex'

export default {
  name: 'Restaurant',
  components: {
    RestaurantDetail,
    RestaurantComments,
    CreateComment
  },
  data() {
    return {
      restaurant: {
        id: -1,
        name: '',
        tel: '',
        address: '',
        openingHours: '',
        description: '',
        image: '',
        categoryId: 0,
        categoryName: '',
        isFavorited: false,
        isLiked: false
      },
      restaurantComments: []
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  created() {
    const { id: restaurantId } = this.$route.params
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await restaurantsAPI.getRestaurant({ restaurantId })
        const { restaurant, isFavorited, isLiked } = data
        const { id, name, tel, address, opening_hours, description, image, CategoryId } = restaurant
        this.restaurant = {
          id,
          name,
          tel,
          address,
          openingHours: opening_hours,
          description,
          image,
          categoryId: CategoryId,
          categoryName: restaurant.Category.name || '未分類',
          isFavorited,
          isLiked
        }
        this.restaurantComments = restaurant.Comments
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法讀取餐廳資料，請稍後再試'
        })
      }
    },
    afterDeleteComment(commentId) {
      this.restaurantComments = this.restaurantComments.filter(comment => comment.id !== commentId)
    },
    afterCreateComment(payload) {
      const { commentId, restaurantId, text } = payload
      this.restaurantComments.push({
        id: commentId,
        RestaurantId: restaurantId,
        text,
        User: {
          id: this.currentUser.id,
          name: this.currentUser.name
        },
        createdAt: new Date()
      })
    }
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params
    this.fetchRestaurant(id)
    next()
  }
}
</script>