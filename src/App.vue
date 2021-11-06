<template>
  <div id="restaurant-forum">
    <NavBar /> 
    <!-- 因為是在vue template，所以這樣的命名是允許的！ -->
    <!-- 如果是globally registered的component就不能這樣命名，要依據w3s所提供HTML的規則，主要就是烤肉串命名的方式 -->
    <main role="main" class="mt-5 bg-white">
      <router-view />
    </main>
  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/NavBar.vue'

export default {
  components: { // 此為NavBar上層，記得在component後面要加上s
    NavBar
  }
}
</script>