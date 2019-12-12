<template>
  <a-layout-header class="header">
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="handleCollapsed"
    />
    <div class="actions">
      <Action>
        <Doc />
      </Action>
      <Action>
        <Notice />
      </Action>
      <Action>
        <User />
      </Action>
      <Action>
        <Lang />
      </Action>
    </div>
  </a-layout-header>
</template>

<script>
import Action from './action'
import User from './user'
import Doc from './doc'
import Notice from './notice'
import Lang from './lang'
export default {
  components: {
    Action,
    Notice,
    User,
    Doc,
    Lang
  },
  props: ['collapsed'],
  methods: {
    handleCollapsed () {
      this.$emit('onCollapsed')
    }
  }
}
</script>
<style lang="less" scoped>
  .header{
    display: flex;
    align-items: center;
    background-color: @component-background;
    padding: 0;
    .trigger{
      font-size: 20px;
      padding: 19px 24px;
    }
    .actions{
      margin-left: auto;
      display: flex;
      align-items: center;
    }
  }
</style>
