<template>
  <div class="card">
    <div class="card-header">
      最新評論
    </div>
    <div class="card-body">
      <div
        v-for="comment of newestComments"
        :key="comment.id"
      >
        <h4>
          <a href="#">
            {{ comment.Restaurant.name }}
          </a>
        </h4>
        <p> {{ comment.text }} </p>by
        <a href="#">
          {{ comment.User.name }}
        </a>
        at {{ comment.createdAt | fromNow }}
        <hr>
      </div>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from '../mixins/fromNowFilter'

export default {
  name: 'NewestComments',
  mixins: [fromNowFilter],
  props: {
    newestComments: {
      type: Array,
      required: true
    }
  }
}
</script>