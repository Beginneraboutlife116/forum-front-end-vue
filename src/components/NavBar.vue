<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link
        class="navbar-brand"
        to="/"
      >
        餐廳評論網
      </router-link>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>

      <div
        id="navbarSupportedContent" 
        class="navbar-collapse collapse"
      >
        <ul class="navbar-nav ms-auto">
          <li
            v-if="currentUser.isAdmin"
            class="nav-item"
          >
            <router-link
              to="/admin"
              class="text-white me-3"
            >
              管理員後台
            </router-link>
          </li>
          <li
            v-if="isAuthenticated"
            class="nav-item"
          >
            <router-link
              :to="{name: 'user', params: {id: currentUser.id}}"
              class="text-white me-3"
            >
              {{ currentUser.name || '使用者' }} 您好
            </router-link>
          </li>
        </ul>
        <button
          v-if="isAuthenticated"
          class="btn btn-sm btn-outline-success my-2 my-sm-0"
          @click.stop.prevent="logout"
        >
          登出
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'NavBar',
  computed: {
    ...mapState(['currentUser', 'isAuthenticated'])
  },
  methods: {
    logout() {
      this.$store.commit('revokeAuthentication')
      this.$router.push('/signin')
    }
  }
}
</script>

<style scoped>
.navbar-toggler {
  min-width: 70px;
  margin-right: 0;
}
nav.bg-dark {
  padding: 14px 16px;
  background-color: #bd2333 !important;
}
.navbar-brand {
  font-size: 19px;
  padding: 0;
}
</style>