<template>
  <div>
    <Spinner v-if="isLoading" />
    <table
      v-else
      class="table"
    >
      <thead class="table-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Category
          </th>
          <th scope="col">
            Name
          </th>
          <th
            scope="col"
            width="300"
          >
            操作
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="restaurant in restaurants"
          :key="restaurant.id"
        >
          <th scope="row">
            {{ restaurant.id }}
          </th>
          <td>{{ restaurant.Category ? restaurant.Category.name : '未分類' }}</td>
          <td>{{ restaurant.name }}</td>
          <td class="d-flex justify-content-between">
            <router-link
              :to="{name: 'admin-restaurant', params: {id: restaurant.id }}"
              class="btn btn-link text-decoration-none"
            >
              Show
            </router-link>

            <router-link
              :to="{name: 'admin-restaurant-edit', params: { id: restaurant.id }}"
              class="btn btn-link text-decoration-none"
            >
              Edit
            </router-link>

            <button
              type="button"
              class="btn btn-link text-decoration-none"
              @click.stop.prevent="deleteRestaurant(restaurant.id)"
            >
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import adminAPI from '@/apis/admin.js'
import { Toast } from '@/mixins/helpers.js'
import Spinner from './../components/Spinner.vue'

export default {
  components: {
    Spinner
  },
  data () {
    return {
      restaurants: [],
      isLoading: true
    }
  },
  created () {
    this.fetchRestaurants()
  },
  methods: {
    async fetchRestaurants () {
      try {
        this.$emit('toggle-is-loading', this.isLoading)
        const { data } = await adminAPI.restaurants.get()
        this.restaurants = data.restaurants
        this.isLoading = false
        this.$emit('toggle-is-loading', this.isLoading)
      } catch (error) {
        this.isLoading = false
        this.$emit('toggle-is-loading', this.isLoading)
        Toast.fire({
          icon: 'error',
          title: '無法讀取餐廳資料，請稍後再試'
        })
        console.log('error: ', error)
      }
    },
    async deleteRestaurant(restaurantId) {
      try {
        const { data } = await adminAPI.restaurants.delete({ restaurantId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.restaurants = this.restaurants.filter(restaurant => restaurant.id !== restaurantId)
        Toast.fire({
          icon: 'success',
          title: '刪除餐廳成功'
        })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法將餐廳刪除，請稍後再試'
        })
        console.log('error: ', error)
      }
    }
  }
}
</script>