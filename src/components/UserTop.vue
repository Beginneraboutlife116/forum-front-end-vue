<template>
  <div class="col-3">
    <router-link :to="{ name:'user', params: {id: user.id}}">
      <img
        :src="user.image || 'http://via.placeholder.com/300x300?text=No+Image'" 
        width="140px"
        height="140px"
      >
    </router-link>
    <h2> {{ user.name }} </h2>
    <span class="badge bg-secondary">追蹤人數： {{ user.FollowerCount }} </span>
    <p class="mt-3">
      <button
        v-if="user.isFollowed"
        type="button"
        class="btn btn-danger"
        @click.stop.prevent="cancelFollowUser(user.id)"
      >
        取消追蹤
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary"
        @click.stop.prevent="followUser(user.id)"
      >
        追蹤
      </button>
    </p>
  </div>
</template>

<script>
import usersAPI from '@/apis/users.js'
import { Toast } from '@/mixins/helpers.js'

export default {
  name: 'UserTop',
  props: {
    initialUser: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      user: {...this.initialUser}
    }
  },
  methods: {
    async followUser(userId) {
      try {
        const { data } = await usersAPI.followUser({ userId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.user.isFollowed = true
        this.user.FollowerCount = this.user.FollowerCount + 1
        this.$emit('update-user', this.user)
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法將達人加入追蹤，請稍後再試'
        })
        console.log('error: ', error)
      }
    },
    async cancelFollowUser(userId) {
      try {
        const { data } = await usersAPI.cancelFollowUser({ userId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.user.isFollowed = false
        this.user.FollowerCount = this.user.FollowerCount - 1
        this.$emit('update-user', this.user)
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法將達人取消追蹤，請稍後再試'
        })
        console.log('error: ', error)
      }
    }
  }
}
</script>