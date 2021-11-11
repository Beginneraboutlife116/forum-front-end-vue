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
import { forRestaurantAndRestaurantDashboard as dummyData } from '../fakedata/dummyDatas'

const dummyUser = {
  currentUser: {
    id: 1,
    name: "root",
    email: "root@example.com",
    image: null,
    isAdmin: true
  },
  isAuthenticated: true
}

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
      restaurantComments: [],
      currentUser: dummyUser.currentUser
    }
  },
  created() {
    const { id: restaurantId } = this.$route.params
    // 再出發fetchRestaurant前，先取得id
    this.fetchRestaurant(restaurantId)
  },
  methods: {
    fetchRestaurant(restaurantId) {
      console.log(restaurantId)
      const { restaurant, isFavorited, isLiked } = dummyData
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
      this.restaurantComments = dummyData.restaurant.Comments
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
  }
}
</script>