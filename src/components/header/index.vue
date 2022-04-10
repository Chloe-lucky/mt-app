<template>
  <div class="m-header">
    <el-row>
      <top-bar />
    </el-row>
    <el-row>
      <search-bar />
    </el-row>
  </div>
</template>

<script>
import searchBar from './searchBar.vue'
import topBar from './topBar.vue'
export default {
  components: {
    searchBar,
    topBar
  }
}
</script>

<style lang="scss">
@import "@/assets/css/public/header/index.scss"
</style>
