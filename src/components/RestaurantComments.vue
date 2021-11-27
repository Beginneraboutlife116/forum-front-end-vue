<template>
  <div>
    <h2 class="my-4">
      所有評論：
    </h2>

    <div
      v-for="comment of restaurantComments"
      :key="comment.id"
    >
      <blockquote class="blockquote mb-0">
        <button
          v-if="currentUser.isAdmin"
          type="button"
          class="btn btn-danger float-end"
          @click.stop.prevent="handleDeleteButtonClick(comment.id)"
        >
          Delete
        </button>
        <h3>
          <router-link
            :to="{name: 'user', params: {id: comment.User.id}}"
            href="#"
            class="text-decoration-none"
          >
            {{ comment.User.name }}
          </router-link>
        </h3>
        <p> {{ comment.text }} </p>
        <footer class="blockquote-footer">
          {{ comment.createdAt | fromNow }}
        </footer>
      </blockquote>
      <hr>
    </div>
  </div>
</template>

<script>
import { fromNowFilter } from '../mixins/fromNowFilter'
import { mapState } from 'vuex'

export default {
  name: 'RestaurantComments',
  mixins: [fromNowFilter],
  props: {
    restaurantComments: {
      type: Array,
      required: true
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  methods: {
    handleDeleteButtonClick(commentId) {
      console.log('handleDeleteButtonClick: ', commentId)
      // TODO: 請求 API 伺服器刪除 id 為 commentId 的評論
      // 觸發父層事件 - $emit( '事件名稱' , 傳遞的資料 )
      this.$emit('after-delete-comment', commentId)
    }
  }
}
</script>