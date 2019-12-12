<template>
  <div class="action">
    <slot />
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
<style lang="less" scoped>
  .action{
    padding: 0 12px;
    color: @text-color;
    cursor: pointer;
    &:hover{
      background-color: @my-header-action-hover-bg;
    }
  }
</style>
