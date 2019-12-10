<template>
  <div class="page">
    home
    <router-link to="/parent">
      跳到parent页
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .page {
    div {
      color: red;
    }
  }
</style>
