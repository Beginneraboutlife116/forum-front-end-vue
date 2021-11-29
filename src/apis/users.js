import { apiHelper } from '../mixins/helpers';

export default {
  getCurrentUser() {
    return apiHelper.get('/get_current_user')
  },
  get({ userId }) {
    return apiHelper.get(`/users/${userId}`)
  },
  addToFavorite({ restaurantId }) {
    return apiHelper.post(`/favorite/${restaurantId}`, null)
  },
  deleteFromFavorite({ restaurantId }) {
    return apiHelper.delete(`/favorite/${restaurantId}`)
  },
  addToLike({ restaurantId }) {
    return apiHelper.post(`/like/${restaurantId}`, null)
  },
  deleteFromLike({ restaurantId }) {
    return apiHelper.delete(`/like/${restaurantId}`)
  },
  getTopUsers() {
    return apiHelper.get('/users/top')
  },
  followUser({ userId }) {
    return apiHelper.post(`/following/${userId}`, null)
  },
  cancelFollowUser({ userId }) {
    return apiHelper.delete(`/following/${userId}`)
  },
  update({ userId, formData }) {
    return apiHelper.put(`/users/${userId}`, formData)
  }
}