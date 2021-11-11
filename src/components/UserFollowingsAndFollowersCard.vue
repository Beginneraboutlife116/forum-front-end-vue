<template>
  <div class="card mb-4">
    <div class="card-header">
      <strong> {{ group.length }} </strong>
      followings（追蹤者）
    </div>
    <div class="card-body">
      <a
        v-for="individual of group"
        :key="individual.id"
        class="me-1"
      >
        <img
          :src="individual.image"
          class="avatar rounded"
          width="60"
          height="60"
        >
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserFollowingCardbody',
  props: {
    group: {
      type: Array,
      required: true
    }
  }
}
</script>