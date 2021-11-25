<template>
  <div class="container py-5">
    <form
      class="w-100"
      @submit.prevent.stop="handleSubmit"
    >
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 fw-normal">
          Sign In
        </h1>
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
          autocomplete="username"
          required
          autofocus
        >
      </div>

      <div class="mb-3">
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
          autocomplete="current-password"
          required
        >
      </div>
      
      <div class="d-grid">
        <button
          class="btn btn-lg btn-primary mb-3"
          :disabled="isProcessing"
          type="submit"
        >
          Submit
        </button>
      </div>

      <div class="text-center mb-3">
        <p>
          <router-link to="/signup">
            Sign Up
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
      email: '',
      password: '',
      isProcessing: false
    }
  },
  methods: {
    async handleSubmit() {
      try {
        if (!this.email || !this.password) {
          Toast.fire({
            icon: 'warning',
            title: '請填入 email 和 password'
          })
          return
        }
        this.isProcessing = true

        const { data } = await authorizationAPI.signIn({
          email: this.email,
          password: this.password
        })
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        localStorage.setItem('token', data.token)
        this.$router.push('/restaurants')
      } catch (error) {
        this.password = ''
        Toast.fire({
          icon: 'warning',
          title: '請確認您輸入了正確的帳號密碼'
        }) 
        this.isProcessing = false
        console.log('error: ', error)
      }
    }
  }
}
</script>