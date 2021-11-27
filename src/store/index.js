import Vue from 'vue'
import Vuex from 'vuex'
import userAPI from './../apis/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: '',
      email: '',
      image: '',
      isAdmin: false
    },
    isAuthenticated: false
  },
  mutations: {
    setCurrentUser(state, currentUser) {
      state.currentUser = {
        ...state.currentUser,
        // TODO: 將API取得的currentUser覆蓋掉Vuex state.currentUser
        ...currentUser
      }
      state.isAuthenticated = true
    }
  },
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await userAPI.getCurrentUser()
        const { id, name, email, image, isAdmin } = data
        commit('setCurrentUser', {
          id, name, email, image, isAdmin
        })
      } catch (error) {
        console.error(error.message)
      }
    }
  },
  modules: {
  }
})
