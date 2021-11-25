<template>
  <div class="container py-5">
    <form
      class="w-100"
      @submit.prevent.stop="handleSubmit"
    >
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 fw-normal">
          Sign Up
        </h1>
      </div>

      <div class="mb-2">
        <label
          for="name"
          class="form-label"
        >Name</label>
        <input
          id="name"
          v-model="name"
          type="text"
          name="name"
          class="form-control"
          placeholder="name"
          autocomplete="name"
          required
          autofocus
        >
      </div>

      <div class="mb-2">
        <label
          for="email"
          class="form-label"
        >Email</label>
        <input
          id="email"
          v-model="email"
          type="email"
          name="email"
          class="form-control"
          placeholder="email"
          autocomplete="email"
          required
          autofocus
        >
      </div>

      <div class="mb-2">
        <label
          for="password"
          class="form-label"
        >Password</label>
        <input
          id="password"
          v-model="password"
          name="password"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          required
        >
      </div>

      <div class="mb-3">
        <label
          for="password-check"
          class="form-label"
        >Password Check</label>
        <input
          id="password-check"
          v-model="passwordCheck"
          name="passwordCheck"
          type="password"
          class="form-control"
          placeholder="Password"
          autocomplete="new-password"
          required
        >
      </div>

      <div class="d-grid">
        <button
          class="btn btn-lg btn-primary mb-3"
          type="submit"
          :disabled="isProcessing"
        >
          Submit
        </button>
      </div>
      
      <div class="text-center mb-3">
        <p>
          <router-link to="/signin">
            Sign In
          </router-link>
        </p>
      </div>

      <p class="mt-5 mb-3 text-muted text-center">
        &copy; 2017-2018
      </p>
    </form>
  </div>
</template>

<script>
import authorizationAPI from '@/apis/authorization.js'
import { Toast } from '@/mixins/helpers.js'

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      passwordCheck: '',
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.name || !this.email || !this.password || !this.passwordCheck) {
          Toast.fire({
            icon: 'warning',
            title: '請確認所有資料都已填妥'
          })
          return
        }
        if (this.password !== this.passwordCheck) {
          Toast.fire({
            icon: 'warning',
            title: '密碼與確認密碼不符，請再確認'
          })
          this.passwordCheck = ''
          return
        }
        this.isProcessing = true
        const { data } = await authorizationAPI.signUp({
          name: this.name,
          email: this.email,
          password: this.password,
          passwordCheck: this.passwordCheck
        })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        Toast.fire({
          icon: 'success',
          title: '已成功註冊'
        })
        this.$router.push({ name: 'sign-in'})
      } catch(error) {
        this.isProcessing = false
        Toast.fire({
          icon: 'error',
          title: `無法註冊：${error.message}`
        })
        console.log('error: ', error)
      }
    }
  }
}
</script>