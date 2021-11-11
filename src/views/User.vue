<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <UserProfileCard
        :profile="profile"
        :initial-is-followed="isFollowed"
      />
      <div class="row">
        <div class="col-md-4">
          <UserFollowingsAndFollowersCard :group="profile.followings" />
          <UserFollowingsAndFollowersCard :group="profile.followers" />
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
import UserProfileCard from '../components/UserProfileCard.vue'
import UserFollowingsAndFollowersCard from '../components/UserFollowingsAndFollowersCard.vue'

import { forUser as dummyData } from '../fakedata/dummyDatas'

export default {
  components: {
    UserProfileCard,
    UserFollowingsAndFollowersCard
  },
  data() {
    return {
      profile: {
        id: -1,
        name: '',
        email: '',
        image: '',
        comments: [],
        favoritedRestaurants: [],
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
      const { id, name, email, image, Comments, FavoritedRestaurants, Followers, Followings } = profile
      this.profile = {
        id,
        name,
        email,
        image,
        comments: Comments,
        favoritedRestaurants: FavoritedRestaurants,
        followers: Followers,
        followings: Followings
      }
    }
  }
}
</script>

<style scoped>
.card.col-md-4 {
  padding: 0;
}
</style>