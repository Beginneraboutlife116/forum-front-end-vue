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
      />
    </div>
  </div>
</template>

<script>
import NavTabs from './../components/NavTabs.vue'
import UserTop from './../components/UserTop.vue'
import { forUsersTop as dummyData } from '../fakedata/dummyDatas.js'

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
    fetchUsers() {
      this.users = [ ...dummyData.users ]
    }
  }
}
</script>