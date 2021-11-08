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

const dummyData = {
  "users": [
    {
      "id": 1,
      "name": "root",
      "email": "root@example.com",
      "password": "$2a$10$6RaicCQtuc3V1fqOV6kRXeVUlRtinNPqGIfdIzxk8ssx3F.4i8pJm",
      "isAdmin": true,
      "image": null,
      "createdAt": "2021-11-05T03:55:21.000Z",
      "updatedAt": "2021-11-05T03:55:21.000Z",
      "Followers": [],
      "FollowerCount": 0,
      "isFollowed": false
    },
    {
      "id": 2,
      "name": "user1",
      "email": "user1@example.com",
      "password": "$2a$10$s/g.WV6HuLIpeBVCPx/nm.76XI31zEBXdmOsqQFtM1s/ISJbzWW7m",
      "isAdmin": false,
      "image": null,
      "createdAt": "2021-11-05T03:55:21.000Z",
      "updatedAt": "2021-11-05T03:55:21.000Z",
      "Followers": [],
      "FollowerCount": 0,
      "isFollowed": false
    },
    {
      "id": 3,
      "name": "user2",
      "email": "user2@example.com",
      "password": "$2a$10$ocEpcuzrgpC.PW6ID7Rf2.4iL/Wmnc6dGsCm7ipAyBlpNJaWgHz5K",
      "isAdmin": false,
      "image": null,
      "createdAt": "2021-11-05T03:55:21.000Z",
      "updatedAt": "2021-11-05T03:55:21.000Z",
      "Followers": [],
      "FollowerCount": 0,
      "isFollowed": false
    }
  ]
}

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