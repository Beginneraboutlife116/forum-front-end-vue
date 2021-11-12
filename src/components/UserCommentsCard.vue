<template>
  <div class="card mb-4">
    <div class="card-header">
      <strong> {{ comments.length }} </strong>
      已評論餐廳
    </div>
    <div class="card-body">
      <router-link
        v-for="comment of comments"
        :key="comment.id"
        :to="{name: 'restaurant', params: {id: comment.Restaurant.id}}"
      >
        <img
          :src="comment.Restaurant.image | emptyImage"
          width="60"
          height="60"
          class="avatar rounded me-1 mb-1"
        >
      </router-link>
    </div>
  </div>
</template>

<script>
import emptyImageFilter from './../mixins/emptyImageFilter.js'

export default {
  name: 'UserCommentsCard',
  mixins: [emptyImageFilter],
  props: {
    comments: {
      type: Array,
      required: true
    }
  }
}
</script>