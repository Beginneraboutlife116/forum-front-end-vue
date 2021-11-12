<template>
  <div class="card mb-4">
    <div class="card-header">
      <strong> {{ group.length }} </strong>
      followings（追蹤者）
    </div>
    <div class="card-body">
      <router-link
        v-for="individual of group"
        :key="individual.id"
        :to="{ name: 'user', params: {id: individual.id}}"
        class="me-1"
      >
        <img
          :src="individual.image | emptyImage"
          class="avatar rounded"
          width="60"
          height="60"
        >
      </router-link>
    </div>
  </div>
</template>

<script>
import emptyImageFilter from './../mixins/emptyImageFilter.js'

export default {
  name: 'UserFollowingsAndFollowersCard',
  mixins: [emptyImageFilter],
  props: {
    group: {
      type: Array,
      required: true
    }
  }
}
</script>