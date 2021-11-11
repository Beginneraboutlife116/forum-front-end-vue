<template>
  <div class="album py-5 bg-light">
    <div class="container">
      <!-- UserProfileCard.vue -->
      <div class="row">
        <div class="col-md-4">
          <!-- UserFollowingsCard -->
          <!-- UserFollowersCard -->
        </div>
        <div class="col-md-8">
          <!-- UserCommentsCard -->
          <!-- UserFavoritedRestaurantsCard -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { forUser as dummyData } from '../fakedata/dummyDatas'

export default {
  data() {
    return {
      profile: dummyData.profile
    }
  }
}
</script>