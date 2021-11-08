<template>
  <ul class="nav nav-pills mb-4">
    <li class="nav-item">
      <router-link
        class="nav-link"
        aria-current="page"
        :to="{ path: '/restaurants' }"
      >
        全部
      </router-link>
    </li>

    <li
      v-for="category of categories"
      :key="category.id"
      class="nav-item"
    >
      <router-link
        class="nav-link"
        :to="{ name: 'restaurants', query: { categoryId: category.id } }"
      >
        {{ category.name }}
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'RestaurantsNavPills',
  props: {
    categories: {
      type: Array,
      required: true
    }
  }
}
</script>