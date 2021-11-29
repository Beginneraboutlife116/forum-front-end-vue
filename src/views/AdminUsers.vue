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
              @click.stop.prevent="toggleIsAdmin(user.id, user.isAdmin)"
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
import adminAPI from '@/apis/admin.js'
import { Toast } from '@/mixins/helpers.js'
import { mapState } from 'vuex'

export default {
  name: 'AdminUsers',
  components: {
    AdminNav
  },
  data() {
    return {
      users: []
    }
  },
  computed: {
    ...mapState(['currentUser'])
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    async fetchUsers() {
      try {
        const { data } = await adminAPI.users.getUsers()
        this.users = data.users
      } catch(error) {
        Toast.fire({
          icon: 'error',
          title: '無法讀取所有使用者資料，請稍後再試'
        })
      }
    },
    async toggleIsAdmin(userId, isAdmin) {
      // TODO: 之後需要將這個值回傳給後端，做修改
      try {
        const willBeAdmin = !isAdmin
        const { data } = await adminAPI.users.toggleIsAdmin({ userId, isAdmin: willBeAdmin.toString() })
        // 變成string的理由：因為service檔案中，是使用'true'來比對
        if (data.status !== 'success') {
          throw new Error(data.message)
        }
        this.users = this.users.map(user => {
          if (user.id === userId) {
            return {
              ...user,
              isAdmin: willBeAdmin
            }
          }
          return user
        })
        Toast.fire({
          icon: 'success',
          title: '成功更新使用者資料'
        })
      } catch (error) {
        Toast.fire({
          icon: 'error',
          title: '無法更新使用者資料，請稍後再試'
        })
        console.log('error: ', error)
      }
    }
  }
}
</script>