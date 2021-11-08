<template>
  <ul class="pagination">
    <li :class="['page-item', { disabled: currentPage === 1 }]">
      <router-link
        class="page-link"
        :to="{
          name: 'restaurants',
          query: {
            categoryId,
            page: previousPage
          }
        }"
        aria-label="Previous"
      >
        <span aria-hidden="true">&laquo;</span>
      </router-link>
    </li>

    <li
      v-for="page of totalPage"
      :key="page"
      :class="['page-item', { active: page === currentPage }]"
    >
      <router-link
        class="page-link"
        :to="{
          name: 'restaurants',
          query: {
            categoryId,
            page
          }
        }"
      >
        {{ page }}
      </router-link>
    </li>

    <li :class="['page-item', { disabled: currentPage === totalPage.length }]">
      <router-link
        class="page-link"
        :to="{
          name: 'restaurants',
          query: {
            categoryId,
            page: nextPage
          }
        }"
        aria-label="Next"
      >
        <span aria-hidden="true">&raquo;</span>
      </router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'RestaurantsPagination',
  props: {
    categoryId: {
      type: [String, Number],
      default: ''
    },
    currentPage: {
      type: Number,
      default: 1
    },
    totalPage: {
      type: Array,
      required: true
    },
    previousPage: {
      type: Number,
      required: true
    },
    nextPage: {
      type: Number,
      required: true
    }
  }
}
</script>