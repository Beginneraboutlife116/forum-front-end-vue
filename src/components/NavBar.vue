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
          <li class="nav-item" v-if="currentUser.isAdmin">
            <router-link
              to="#"
              class="text-white me-3"
            >
              管理員後台
            </router-link>
          </li>
          <li class="nav-item" v-if="isAuthenticated">
            <router-link
              to="#"
              class="text-white me-3"
            >
              {{ currentUser.name || '使用者' }} 您好
            </router-link>
          </li>
        </ul>
        <button class="btn btn-sm btn-outline-success my-2 my-sm-0" v-if="isAuthenticated">
          登出
        </button>
      </div>
    </div>
  </nav>
</template>

<script>
// seed data
const dummyUser = {
  currentUser: {
    id: 1,
    name: '管理者',
    email: 'root@example.com',
    image: 'https://i.pravatar.cc/300',
    isAdmin: true
  },
  isAuthenticated: true
}

export default {
  // Vue 會在沒有資料時使用此預設值
  data() {
    return {
      currentUser: {
        id: -1,
        name: '',
        email: '',
        image: '',
        isAdmin: false
      },
      isAuthenticated: false
    }
  },
  methods: {
    fetchUser() {
      this.currentUser = {
        ...this.currentUser,
        ...dummyUser.currentUser
      },
      this.isAuthenticated = dummyUser.isAuthenticated
    }
  },
  created() {
    this.fetchUser()
  }
}
</script>