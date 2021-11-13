<template>
  <div class="container py-5">
    <AdminRestaurantForm
      :initial-restaurant="restaurant"
      @after-submit="handleAfterSubmit"
    />
  </div>
</template>

<script>
import AdminRestaurantForm from '../components/AdminRestaurantForm.vue'
import { forAdminRestaurantEdit as dummyData} from '../fakedata/dummyDatas.js'

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
      }
    }
  },
  created() {
    const { id } = this.$route.params
    this.fetchRestaurant(id)
  },
  methods: {
    handleAfterSubmit(formData) {
      // TODO: 傳送資料到後端去
      for (let [key, value] of formData.entries()) {
        console.log(key, ' : ', value)
      }
    },
    fetchRestaurant(restaurantId) {
      console.log('fetchRestaurant id: ', restaurantId)
      const { restaurant } = dummyData
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
    }
  }
}
</script>