import { apiHelper } from "../mixins/helpers";
const getToken = () => localStorage.getItem('token')

export default {
  getRestaurantsFeeds() {
    return apiHelper.get('/restaurants/feeds', {
      headers: { Authorization: `Bearer ${getToken()}` }
    })
  }
}