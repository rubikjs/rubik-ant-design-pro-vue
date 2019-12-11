<template>
  <a-layout style="height:100vh">
    <Menu :collapsed="collapsed" />
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
