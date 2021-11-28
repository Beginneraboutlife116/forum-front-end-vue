<template>
  <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          :src="profile.image"
          width="300px"
          height="300px"
        >
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">
            {{ profile.name }}
          </h5>
          <p class="card-text">
            {{ profile.email }}
          </p>
          <ul class="list-unstyled list-inline">
            <li>
              <strong> {{ profile.comments.length }} </strong>
              已評論餐廳
            </li>
            <li>
              <strong> {{ profile.favoritedRestaurants.length }} </strong>
              收藏的餐廳
            </li>
            <li>
              <strong> {{ profile.followers.length }} </strong>
              followings（追蹤者）
            </li>
            <li>
              <strong> {{ profile.followings.length }} </strong>
              followers（追隨者）
            </li>
          </ul>
          <p />
          <form
            style="display: contents;"
          >
            <router-link
              v-if="profile.id === currentUser.id"
              class="btn btn-primary"
              :to="{name: 'user-edit', params: {id: profile.id}}"
            >
              Edit
            </router-link>
            <button
              v-else-if="!isFollowed"
              class="btn btn-primary"
              type="submit"
              @click.stop.prevent="addFollowing(profile.id)"
            >
              追蹤
            </button>
            <button
              v-else
              class="btn btn-danger"
              type="submit"
              @click.stop.prevent="deleteFollowing(profile.id)"
            >
              取消追蹤
            </button>
          </form>
          <p />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import usersAPI from '@/apis/users.js'
import { Toast } from '@/mixins/helpers.js'

export default {
  name: 'UserProfileCard',
  props: {
    profile: {
      type: Object,
      required: true
    },
    initialIsFollowed: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      isFollowed: false,
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  watch: {
    initialIsFollowed(newValue) {
      this.isFollowed = newValue
    }
  },
  methods: {
    followOrUnfollow() {
      if (this.isAdmin) return
      this.isFollowed ? (this.isFollowed = false) : (this.isFollowed = true)
    },
    async addFollowing(userId) {
      try {
        const { data } = await usersAPI.followUser({ userId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.isFollowed = true
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法追蹤此使用者，請稍後再試'
        })
      }
    },
    async deleteFollowing(userId) {
      try {
        const { data } = await usersAPI.cancelFollowUser({ userId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.isFollowed = false
      } catch (error) {
        Toast.fire({
          icon: "error",
          title: '無法取消追蹤此使用者，請稍後再試'
        })
        console.log('error: ', error)
      }
    }
  }
}
</script>