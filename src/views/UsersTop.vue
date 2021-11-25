<template>
  <div class="container py-5">
    <NavTabs />
    <h1 class="mt-5">
      美食達人
    </h1>
    <hr>
    <div class="row text-center">
      <!-- 美食達人列表 -->
      <UserTop
        v-for="user of users"
        :key="user.id"
        :initial-user="user"
        @update-user="updateUser"
      />
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'
import UserTop from './../components/UserTop.vue'
import usersAPI from '@/apis/users.js'
import { Toast } from '@/mixins/helpers.js'

export default {
  name: 'UsersTop',
  components: {
    NavTabs,
    UserTop
  },
  data() {
    return {
      users: []
    }
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      try {
        const { data } = await usersAPI.getTopUsers()
        this.users = data.users.sort((a, b) => {
          return a.id - b.id
        })
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法讀取美食達人資料，請稍後再嘗試'
        })
        console.log('error: ', error)
      }
    },
    updateUser(payload) {
      this.users = this.users.map(user => {
        if (user.id === payload.id) {
          return {
            ...user,
            isFollowed: payload.isFollowed,
            followerCount: payload.followerCount
          }
        } else {
          return user
        }
      })
    }
  }
}
</script>