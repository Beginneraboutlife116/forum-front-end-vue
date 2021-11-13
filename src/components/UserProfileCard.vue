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
            @submit.stop.prevent="followOrUnfollow"
          >
            <router-link
              v-if="profile.isAdmin"
              class="btn btn-primary"
              :to="{name: 'user-edit', params: {id: profile.id}}"
            >
              Edit
            </router-link>
            <button
              v-else-if="!isFollowed"
              class="btn btn-primary"
              type="submit"
            >
              追蹤
            </button>
            <button
              v-else
              class="btn btn-danger"
              type="submit"
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
      isFollowed: this.initialIsFollowed,
    }
  },
  methods: {
    followOrUnfollow() {
      if (this.isAdmin) return
      this.isFollowed ? (this.isFollowed = false) : (this.isFollowed = true)
    }
  }
}
</script>