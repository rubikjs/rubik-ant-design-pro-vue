<template>
  <a-layout class="app">
    <Menu :collapsed="collapsed" :routes="menuRoutes"/>
    <a-layout>
      <Header :collapsed="collapsed" @onCollapsed="() => collapsed = !collapsed"/>
      <a-layout-content>
        <keep-alive>
          <router-view
            v-if="$route.meta.keepAlive"
          />
        </keep-alive>
        <router-view
          v-if="!$route.meta.keepAlive"
        />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import router from './router'
import Header from 'component/header'
import Menu from 'component/menu'
import { menuRoutes } from './routes'

export default {
  router,
  components: {
    Menu,
    Header
  },
  data () {
    return {
      collapsed: false,
      menuRoutes
    }
  }
}
</script>
<style lang="less" scoped>
  .app {
    height: 100vh;
  }
</style>
