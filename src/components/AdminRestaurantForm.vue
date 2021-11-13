<template>
  <form @submit.stop.prevent="handleSubmit">
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
    >
      送出
    </button>
  </form>
</template>

<script>
import { categoriesForAdminRestaurantFormAndAdminCategories as dummyData } from '../fakedata/dummyDatas.js'

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
    }
  },
  data() {
    return {
      restaurant: {},
      categories: []
    }
  },
  created() {
    this.fetchCategories()
    this.restaurant = {
      ...this.initialRestaurant
    }
  },
  methods: {
    fetchCategories() {
      this.categories = dummyData.categories
    },
    handleFileChange() {
      const { files } = event.target
      if (!files.length) {
        this.restaurant.image = ''
        return
      } else {
        const imageURL = URL.createObjectURL(files[0])
        this.restaurant.image = imageURL
      }
    },
    handleSubmit(){
      const form = event.target
      const formData = new FormData(form)
      this.$emit('after-submit', formData)
    }
  }
}
</script>