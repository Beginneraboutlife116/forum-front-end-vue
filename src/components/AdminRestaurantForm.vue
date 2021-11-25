<template>
  <form
    v-show="!isLoading"
    @submit.stop.prevent="handleSubmit"
  >
    <div class="form-group mb-2">
      <label
        for="name"
        class="form-label"
      >Name</label>
      <input
        id="name"
        v-model.trim="restaurant.name"
        type="text"
        class="form-control"
        name="name"
        placeholder="Enter name"
        required
      >
    </div>

    <div class="form-group mb-2">
      <label
        for="categoryId"
        class="form-label"
      >Category</label>
      <select
        id="categoryId"
        v-model.trim="restaurant.categoryId"
        class="form-control"
        name="categoryId"
        required
      >
        <option
          value="-1"
          selected
          disabled
        >
          --請選擇--
        </option>
        <option
          v-for="category of categories"
          :key="category.id"
          :value="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>

    <div class="form-group">
      <label
        for="tel"
        class="form-label"
      >Tel</label>
      <input
        id="tel"
        v-model.trim="restaurant.tel"
        type="text"
        class="form-control"
        name="tel"
        placeholder="Enter telephone number"
        required
      >
    </div>

    <div class="form-group">
      <label
        for="address"
        class="form-label"
      >Address</label>
      <input
        id="address"
        v-model.trim="restaurant.address"
        type="text"
        class="form-control"
        placeholder="Enter address"
        name="address"
      >
    </div>

    <div class="form-group">
      <label
        for="opening-hours"
        class="form-label"
      >Opening Hours</label>
      <input
        id="opening-hours"
        v-model.trim="restaurant.openingHours"
        type="time"
        class="form-control"
        name="opening_hours"
      >
    </div>

    <div class="form-group">
      <label
        for="description"
        class="form-label"
      >Description</label>
      <textarea
        id="description"
        v-model.trim="restaurant.description"
        class="form-control"
        rows="3"
        name="description"
      />
    </div>

    <div class="form-group mb-3">
      <label
        for="image"
        class="form-label"
      >Image</label>
      <img
        v-if="restaurant.image"
        :src="restaurant.image"
        class="img-thumbnail d-block mb-3"
        width="200"
        height="200"
      >
      <input
        id="image"
        type="file"
        name="image"
        accept="image/*"
        class="form-control"
        @change="handleFileChange"
      >
    </div>

    <button
      type="submit"
      class="btn btn-primary btn-lg"
      :disabled="isProcessing"
    >
      {{ isProcessing ? '處理中' : '送出' }}
    </button>
  </form>
</template>

<script>
import adminAPI from '@/apis/admin.js'
import { Toast } from '@/mixins/helpers.js'

export default {
  props: {
    initialRestaurant: {
      type: Object,
      default: () => ({
        name: '',
        categoryId: -1,
        tel: '',
        address: '',
        description: '',
        image: '',
        openingHours: ''
      })
      // { return {} } 物件外面的小括號是特殊的寫法，是因為object literal本身就是{}，所以return 簡寫要使用小括號包住
    },
    isProcessing: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      restaurant: {
        ...this.initialRestaurant
      },
      categories: [],
      isLoading: true
    }
  },
  created() {
    this.fetchCategories()
    this.restaurant = {
      ...this.initialRestaurant
    }
  },
  methods: {
    async fetchCategories() {
      try {
        const { data } = await adminAPI.categories.get()
        this.categories = data.categories
        this.isLoading = false
      } catch(error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法讀取類別資料，請稍後再試'
        })
        console.log('error: ', error)
      }
    },
    handleFileChange(e) {
      const { files } = e.target
      if (!files.length) {
        this.restaurant.image = ''
        return
      } else {
        const imageURL = URL.createObjectURL(files[0])
        this.restaurant.image = imageURL
      }
    },
    handleSubmit(e){
      if (!this.restaurant.name) {
        Toast.fire({
          icon: 'warning',
          title: '請輸入餐廳名稱'
        })
        return
      }

      if (this.restaurant.categoryId === -1) {
        Toast.fire({
          icon: 'warning',
          title: '請選擇餐廳類別'
        })
        return
      }

      if (!this.restaurant.tel) {
        Toast.fire({
          icon: 'warning',
          title: '請輸入餐廳電話'
        })
        return
      }

      const form = e.target
      const formData = new FormData(form)
      this.$emit('after-submit', formData)
    }
  }
}
</script>