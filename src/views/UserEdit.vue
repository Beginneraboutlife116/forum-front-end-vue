<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit(id)">
      <div class="mb-3">
        <label for="name">Name</label>
        <input
          id="name"
          v-model.trim="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="Enter Name"
          required
        >
      </div>

      <div class="mb-3">
        <label for="image">Image</label>
        <img
          v-if="image"
          :src="image"
          class="d-block my-2 img-thumbnail"
          width="200"
          height="200"
        >
        <input
          id="image"
          type="file"
          name="image"
          accept="image/*"
          class="form-control"
          @change="handleFileChange"
        >
      </div>

      <button
        type="submit"
        class="btn btn-primary"
        :disabled="isProcessing"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { Toast } from '@/mixins/helpers.js'
import usersAPI from '@/apis/users.js'

export default {
  name: 'UserEdit',
  data() {
    return {
      id: -1,
      name: '',
      image: '',
      isProcessing: false
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  watch: {
    currentUser() {
      this.setUser(this.currentUser.id)
    }
  },
  created() {
    this.setUser(this.currentUser.id)
  },
  beforeRouteUpdate(to, from, next) {
    const { id: userId } = to.params
    this.setUser(userId)
    next()
  },
  methods: {
    setUser(userId) {
      if (userId.toString() !== this.$route.params.id.toString()) {
        this.$router.replace({ name: 'not-found' })
        return
      }
      this.id = this.currentUser.id
      this.name = this.currentUser.name
      this.image = this.currentUser.image
    },
    handleFileChange() {
      const filesList = event.target.files
      if (!filesList.length) {
        return
      } else {
        const imageURL = URL.createObjectURL(filesList[0])
        this.image = imageURL
      }
    },
    async handleSubmit(userId) {
      try {
        if (!this.name.length) {
          Toast.fire({
            icon: 'warning',
            title: '請至少輸入名稱'
          })
          return
        }
        this.isProcessing = true
        const form = event.target
        const formData = new FormData(form)
        const { data } = await usersAPI.update({ userId, formData })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        Toast.fire({
          icon: 'success',
          title: '已更新使用者資料'
        })
        this.isProcessing = false
      } catch(error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: '無法更新資料，請稍後再試'
        })
        console.log('error: ', error)
      }
    }
  }
}
</script>