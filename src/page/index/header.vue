<template>
  <a-layout-header class="header">
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="handleCollapsed"
    />
    <a-dropdown class="user">
      <a>{{ $store.state.userName }}<a-icon type="down" /> </a>
      <a-menu slot="overlay">
        <a-menu-item>
          <a href="javascript:;" @click="handleQuit">退出</a>
        </a-menu-item>
      </a-menu>
    </a-dropdown>
  </a-layout-header>
</template>

<script>
import TYPES from 'store/types'
export default {
  props: ['collapsed'],
  methods: {
    handleCollapsed () {
      this.$emit('onCollapsed')
    },
    handleQuit () {
      this.$store.commit(TYPES.REMOVE_TOKEN)
      window.location.replace('/login')
    }
  }
}
</script>
<style lang="less" scoped>
  .header{
    display: flex;
    align-items: center;
    padding: 0 24px;
    background-color: @component-background;
    .user{
      margin-left: auto;
      color: @text-color;
    }
  }
</style>
