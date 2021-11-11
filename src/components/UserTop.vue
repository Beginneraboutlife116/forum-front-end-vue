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
        @click.stop.prevent="cancelFollowUser"
      >
        取消追蹤
      </button>
      <button
        v-else
        type="button"
        class="btn btn-primary"
        @click.stop.prevent="followUser"
      >
        追蹤
      </button>
    </p>
  </div>
</template>

<script>
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
    followUser() {
      this.user.isFollowed = true
    },
    cancelFollowUser() {
      this.user.isFollowed = false
    }
  }
}
</script>