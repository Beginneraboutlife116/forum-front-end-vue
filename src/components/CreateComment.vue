<template>
  <form @submit.stop.prevent="handleSubmit">
    <div class="mb-4">
      <label
        for="text"
        class="mb-2"
      >留下評論：</label>
      <textarea
        v-model.trim="text"
        class="form-control"
        rows="3"
        name="text"
      />
    </div>
    <div class="d-flex align-items-center justify-content-between">
      <button
        type="button"
        class="btn btn-link"
        @click="$router.back()"
      >
        回上一頁
      </button>
      <button
        type="submit"
        class="btn btn-primary me-0"
        :disabled="isProcessing"
      >
        {{ isProcessing ? 'Updating...' : 'Submit' }}
      </button>
    </div>
  </form>
</template>

<script>
import commentsAPI from '@/apis/comments.js'
import { Toast } from '@/mixins/helpers.js'

export default {
  props: {
    restaurantId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      text: '',
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.text.length) {
          Toast.fire({
            icon: 'warning',
            title: '請輸入評論'
          })
          return
        }
        this.isProcessing = true
        const { data } = await commentsAPI.create({ text: this.text, restaurantId: this.restaurantId })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.$emit('after-create-comment', {
          commentId: data.commentId,
          restaurantId: this.restaurantId,
          text: this.text
        })
        this.text = ''
        this.isProcessing = false
      } catch (error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法新增評論，請稍後再試'
        })
      }
    }
  }
}
</script>

<style scoped>
.form-group {
  margin: 21px 0 8px;
}
</style>