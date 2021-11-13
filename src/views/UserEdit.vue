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
import { forUser as dummyData } from '../fakedata/dummyDatas'

export default {
  name: 'UserEdit',
  data() {
    return {
      id: -1,
      name: '',
      image: ''
    }
  },
  created() {
    this.fetchUser()
  },
  methods: {
    fetchUser() {
      const { profile } = dummyData
      this.id = profile.id
      this.name = profile.name
      this.image = profile.image
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