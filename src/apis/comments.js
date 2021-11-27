import { apiHelper } from '../mixins/helpers';
const getToken = () => localStorage.getItem('token')

export default {
  createComment({ text, restaurantId }) {
    return apiHelper.post('/comments', {
      text,
      restaurantId
    }, {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}