<template>
  <div class="container py-5">
    <form @submit.stop.prevent="handleSubmit">
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
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'UserEdit',
  data() {
    return {
      id: -1,
      name: '',
      image: ''
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
    handleSubmit() {
      const form = event.target
      const formData = new FormData(form)
      for (let [key, value] of formData.entries()) {
        console.log(key, ' : ', value)
      }
    }
  }
}
</script>