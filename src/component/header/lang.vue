<template>
  <a-dropdown class="user">
    <div style="height: 100%">
      <a-icon type="global"></a-icon>
    </div>
    <a-menu slot="overlay" style="min-width: 160px;">
      <a-menu-item key="0">
        <router-link :to="{ name: 'home' }">
          <a-icon type="home"/>
          <span>首页</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
import TYPES from 'store/types'

export default {
  data () {
    return {}
  },
  methods: {
    handleQuit () {
      this.$store.commit(TYPES.REMOVE_TOKEN)
      window.location.replace('/login')
    }
  }
}
</script>
