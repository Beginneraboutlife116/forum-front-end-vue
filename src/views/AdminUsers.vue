<template>
  <div class="container py-5">
    <AdminNav />
    <table class="table">
      <thead class="table-dark">
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            Email
          </th>
          <th scope="col">
            Role
          </th>
          <th
            scope="col"
            width="140"
          >
            Action
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="user of users"
          :key="user.id"
        >
          <th scope="row">
            {{ user.id }}
          </th>
          <td> {{ user.email }} </td>
          <td> {{ user.isAdmin ? 'admin' : 'user' }} </td>
          <td>
            <button
              type="button"
              :class="['btn', 'btn-link', 'text-decoration-none', {invisible: user.name === 'root' && currentUser.isAdmin}]"
              :disabled="!currentUser.isAdmin"
              @click.stop.prevent="toggleIsAdmin(user.id)"
            >
              {{ user.isAdmin ? 'set as user' : 'set as admin' }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import AdminNav from '../components/AdminNav.vue'
import {usersForAdminUsers as dummyUsers} from '../fakedata/dummyDatas.js'
import { currentUserForNavbarAndRestaurantCommentsAndAdminUsers as dummyUser} from '../fakedata/dummyDatas.js'

export default {
  name: 'AdminUsers',
  components: {
    AdminNav
  },
  data() {
    return {
      users: [],
      currentUser: {}
    }
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    fetchUsers() {
      this.users = dummyUsers.users
      this.currentUser = dummyUser.currentUser
    },
    toggleIsAdmin(userId) {
      // TODO: 之後需要將這個值回傳給後端，做修改
      this.users = this.users.map(user => {
        if (user.id === userId) {
          return {
            ...user,
            isAdmin: !user.isAdmin
          }
        }
        return user
      })
    }
  }
}
</script>