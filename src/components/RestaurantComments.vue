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
          :disabled="comment.isProcessing"
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
import { Toast } from '@/mixins/helpers.js'
import commentsAPI from '@/apis/comments.js'

export default {
  name: 'RestaurantComments',
  mixins: [fromNowFilter],
  props: {
    initialRestaurantComments: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      restaurantComments: [],
      isLoading: false
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  watch: {
    initialRestaurantComments(newValue) {
      this.restaurantComments = newValue.map(comment => {
        return {
          ...comment,
          isProcessing: false
        }
      })
    }
  },
  methods: {
    async handleDeleteButtonClick(commentId) {
      const comment = this.restaurantComments.find(comment => comment.id === commentId)
      try {
        comment.isProcessing = true
        const { data } = await commentsAPI.delete({ commentId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        Toast.fire({
          icon: 'success',
          title: '成功刪除評論'
        })
        this.$emit('after-delete-comment', commentId)
      } catch (error) {
        comment.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法刪除該筆評論，請稍後再試'
        })
        console.log('error: ', error)
      }
    }
  }
}
</script>