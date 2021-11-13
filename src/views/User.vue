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
          <UserCommentsCard :comments="profile.comments" />
          <UserFavoritedRestaurantsCard :favorited-restaurants="profile.favoritedRestaurants" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserProfileCard from '../components/UserProfileCard.vue'
import UserFollowingsAndFollowersCard from '../components/UserFollowingsAndFollowersCard.vue'
import UserCommentsCard from '../components/UserCommentsCard.vue'
import UserFavoritedRestaurantsCard from '../components/UserFavoritedRestaurantsCard.vue'

import { forUserAndUserEdit as dummyData } from '../fakedata/dummyDatas'

export default {
  components: {
    UserProfileCard,
    UserFollowingsAndFollowersCard,
    UserCommentsCard,
    UserFavoritedRestaurantsCard
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
        followings: [],
        isAdmin: false,
      },
      isFollowed: false,
    }
  },
  created() {
    this.fetchUserProfile()
  },
  methods: {
    fetchUserProfile() {
      const { profile: copyProfile } = dummyData
      const { id, name, email, image, Comments, FavoritedRestaurants, Followers, Followings, isAdmin } = copyProfile
      this.profile = {
        ...copyProfile,
        id,
        name,
        email,
        image: image ? image : 'http://via.placeholder.com/300x300?text=No+Image',
        comments: Comments,
        favoritedRestaurants: FavoritedRestaurants,
        followers: Followers,
        followings: Followings,
        isAdmin
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