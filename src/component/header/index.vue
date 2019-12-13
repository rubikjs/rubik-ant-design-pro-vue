<template>
  <a-layout-header class="header">
    <a-icon
      class="collapsed"
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
      <Action v-if="ENABLE_I18N">
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
import Lang from 'component/lang/index'
import { ENABLE_I18N } from 'config'
export default {
  components: {
    Action,
    Notice,
    User,
    Doc,
    Lang
  },
  props: ['collapsed'],
  data () {
    return {
      ENABLE_I18N
    }
  },
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
    .collapsed{
      font-size: 20px;
      padding: 19px 24px;
    }
    .actions{
      margin-left: auto;
      display: flex;
      align-items: center;
      height: 100%;
    }
  }
</style>
