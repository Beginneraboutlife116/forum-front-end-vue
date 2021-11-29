import { apiHelper } from "../mixins/helpers";

export default {
  categories: {
    get() {
      return apiHelper.get('/admin/categories')
    },
    create({ name }) {
      return apiHelper.post('/admin/categories', {name})
    },
    delete({ categoryId }) {
      return apiHelper.delete(`/admin/categories/${categoryId}`)
    },
    update({ categoryId, name }) {
      return apiHelper.put(`/admin/categories/${categoryId}`, {
        name,
        categoryId
      })
    }
  },
  restaurants: {
    create({ formData }) {
      return apiHelper.post('/admin/restaurants', formData)
    },
    get() {
      return apiHelper.get('/admin/restaurants')
    },
    delete({ restaurantId }) {
      return apiHelper.delete(`/admin/restaurants/${restaurantId}`)
    },
    update({ restaurantId, formData }) {
      return apiHelper.put(`/admin/restaurants/${restaurantId}`, formData)
    },
    getDetail({ restaurantId }) {
      return apiHelper.get(`/admin/restaurants/${restaurantId}`)
    }
  },
  users: {
    getUsers() {
      return apiHelper.get('/admin/users')
    },
    toggleIsAdmin({ userId, isAdmin }) {
      return apiHelper.put(`/admin/users/${userId}`, { isAdmin })
    }
  }
}