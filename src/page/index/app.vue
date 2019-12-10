<template>
  <a-layout style="height:100vh">
    <Menu :collapsed="collapsed"/>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          style="padding: 0 24px;"
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>
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
import Menu from './menu'

export default {
  router,
  components: {
    Menu
  },
  data () {
    return {
      collapsed: false
    }
  }
}
</script>
