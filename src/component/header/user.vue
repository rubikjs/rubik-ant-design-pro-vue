<template>
  <a-dropdown>
    <div style="height: 100%">
      <a-avatar icon="user" size="small" :src="$store.state.user.avatar"/>
      {{ $store.state.user.name }}
    </div>
    <a-menu slot="overlay" style="min-width: 160px;">
      <a-menu-item key="0">
        <router-link :to="{ name: 'home' }">
          <a-icon type="home"/>
          <span>首页</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="1">
        <router-link :to="{ name: 'child' }">
          <a-icon type="user"/>
          <span>child</span>
        </router-link>
      </a-menu-item>
      <a-menu-item key="2" @click="handleUnauthorized">
        <a-icon type="bulb"/><span>访问没有权限接口</span>
      </a-menu-item>
      <a-menu-item key="3" disabled>
        <a-icon type="setting"/>
        <span>不可点击</span>
      </a-menu-item>
      <a-menu-divider/>
      <a-menu-item key="4" @click="handleQuit">
        <a-icon type="logout"/>
        <span>退出登录</span>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
import TYPES from 'store/types'
import axios from 'lib/axios'
export default {
  data () {
    return {}
  },
  methods: {
    handleQuit () {
      this.$store.commit(TYPES.REMOVE_TOKEN)
      window.location.replace('/login')
    },
    handleUnauthorized () {
      axios.get('unauthorized')
    }
  }
}
</script>
