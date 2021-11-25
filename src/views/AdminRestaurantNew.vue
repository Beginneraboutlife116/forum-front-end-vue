<template>
  <div class="container py-5">
    <AdminRestaurantForm
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
  name: 'AdminRestaurantNew',
  components: {
    AdminRestaurantForm
  },
  data() {
    return {
      isProcessing: false
    }
  },
  methods: {
    async handleAfterSubmit(formData) {
      try {
        this.isProcessing = true
        const { data } = await adminAPI.restaurants.create({ formData })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.$router.push({ name: 'admin-restaurants'})
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法建立餐廳資料，請稍後再試'
        })
        console.log('error', error)
      }
    }
  }
}
</script>