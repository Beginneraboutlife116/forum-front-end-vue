<template>
  <div class="container py-5">
    <AdminRestaurantForm
      :initial-restaurant="restaurant"
      :is-processing="isProcessing"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from '../components/AdminRestaurantForm.vue'
import adminAPI from '@/apis/admin.js'
import { Toast } from '@/mixins/helpers.js'

export default {
  name: 'AdminRestaurantEdit',
  components: {
    AdminRestaurantForm,
  },
  data() {
    return {
      restaurant: {
        name: '',
        tel: '',
        address: '',
        openingHours: '',
        description: '',
        image: '',
        categoryId: -1,
      },
      isProcessing: false
    }
  },
  created() {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },
  beforeRouteUpdate(to, from, next) {
    const { id } = to.params
    this.fetchRestaurant(id)
    next()
  },
  methods: {
    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true
        const { data } = await adminAPI.restaurants.update({ restaurantId: this.restaurant.id, formData})
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.$router.push({ name: 'admin-restaurants' })
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法更新餐廳資料，請稍後再試'
        })
      }
    },
    async fetchRestaurant(restaurantId) {
      try {
        const { data } = await adminAPI.restaurants.getDetail({ restaurantId })
        const { restaurant } = data
        this.restaurant = {
          ...restaurant,
          name: restaurant.name,
          tel: restaurant.tel,
          address: restaurant.address,
          openingHours: restaurant.opening_hours,
          description: restaurant.description,
          image: restaurant.image,
          categoryId: restaurant.CategoryId
        }
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法讀取餐廳資料，請稍後嘗試'
        })
        console.log('error: ', error)
      }
    }
  }
}
</script>