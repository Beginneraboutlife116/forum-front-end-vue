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
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      const data = JSON.stringify({
        email: this.email,
        password: this.password
      })
      // TODO: 向後端驗證使用者登入資訊是否合法
      console.log('data: ', data)
    }
  }
}
</script>