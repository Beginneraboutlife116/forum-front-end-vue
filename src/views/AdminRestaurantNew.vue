<template>
  <div class="container py-5">
    <AdminRestaurantForm @after-submit="handleAfterSubmit" />
  </div>
</template>

<script>
import AdminRestaurantForm from '../components/AdminRestaurantForm.vue'

export default {
  name: 'AdminRestaurantNew',
  components: {
    AdminRestaurantForm
  },
  methods: {
    handleAfterSubmit(formData) {
      // TODO: 傳送資料到後端去
      for (let [key, value] of formData.entries()) {
        console.log(key, ' : ', value)
      }
    }
  }
}
</script>