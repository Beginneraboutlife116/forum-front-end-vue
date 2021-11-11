<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <!-- UserProfileCard.vue -->
      <div class="row">
        <div class="col-md-4">
          <!-- UserFollowingsCard -->
          <!-- UserFollowersCard -->
        </div>
        <div class="col-md-8">
          <!-- UserCommentsCard -->
          <!-- UserFavoritedRestaurantsCard -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { forUser as dummyData } from '../fakedata/dummyDatas'

export default {
  data() {
    return {
      profile: {
        id: -1,
        name: '',
        email: '',
        image: '',
        comments: [],
        favoriteRestaurants: [],
        followers: [],
        followings: []
      },
      isFollowed: false,
    }
  },
  created() {
    this.fetchUserProfile()
  },
  methods: {
    fetchUserProfile() {
      const { profile } = dummyData
      const { id, name, email, image, Comments, FavoriteRestaurants, Followers, Followings } = profile
      this.profile = {
        id,
        name,
        email,
        image,
        comments: Comments,
        favoriteRestaurants: FavoriteRestaurants,
        followers: Followers,
        followings: Followings
      }
    }
  }
}
</script>