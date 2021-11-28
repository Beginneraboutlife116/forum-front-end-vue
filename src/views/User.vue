<template>
  <div
    v-show="!isLoading"
    class="album py-5 bg-light"
  >
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
import usersAPI from '@/apis/users.js'
import { Toast } from '@/mixins/helpers.js'

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
      isLoading: false
    }
  },
  created() {
    const { id: userId } = this.$route.params
    this.fetchUserProfile(userId)
  },
  beforeRouteUpdate(to, from, next) {
    const { id: userId } = to.params
    this.fetchUserProfile(userId)
    next() 
  },
  methods: {
    async fetchUserProfile(userId) {
      try {
        this.isLoading = true
        const { data } = await usersAPI.get({ userId })
        const { profile: copyProfile, isFollowed } = data
        const { id, name, email, image, Comments, FavoritedRestaurants, Followers, Followings, isAdmin } = copyProfile

        const commentSet = new Set()
        const comments = Comments.filter(
          comment =>
            comment.Restaurant &&
            !commentSet.has(comment.Restaurant.id) &&
            commentSet.add(comment.Restaurant.id)
        )

        this.profile = {
          ...copyProfile,
          id,
          name,
          email,
          image: image ? image : 'http://via.placeholder.com/300x300?text=No+Image',
          comments,
          favoritedRestaurants: FavoritedRestaurants,
          followers: Followers,
          followings: Followings,
          isAdmin
        }
        this.isFollowed = isFollowed
        this.isLoading = false
      } catch (error) {
        this.isLoading = false
        Toast.fire({
          icon: 'error',
          title: '無法讀取該使用者資料，請稍後再試'
        })
        console.log('error: ', error)
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