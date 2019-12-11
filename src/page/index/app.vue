<template>
  <a-layout style="height:100vh">
    <Menu v-if="$route.name" :collapsed="collapsed" /> <!--有效路由才渲染，解决异步路由初始当前路由为空的问题-->
    <a-layout>
      <Header :collapsed="collapsed" @onCollapsed="() => collapsed = !collapsed" />
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff' }"
      >
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
import Header from './header'
import Menu from './menu'

export default {
  router,
  components: {
    Menu,
    Header
  },
  data () {
    return {
      collapsed: false
    }
  }
}
</script>
