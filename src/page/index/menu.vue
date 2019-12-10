<template>
  <div>
    <a-layout-sider :trigger="null" collapsible v-model="collapsed" style="height: 100%">
      <div class="logo" />
      <a-menu theme="dark" mode="inline" :defaultSelectedKeys="['1']">
        <template v-for="route in menuRoutes">
          <a-menu-item :key="route.name" v-if="!route.children">
            <router-link :to="route.path">
              <a-icon :type="route.meta.icon" />
              <span>{{ route.meta.text }}</span>
            </router-link>
          </a-menu-item>
          <a-sub-menu v-else :key="route.name">
            <span slot="title"><a-icon :type="route.meta.icon" /><span>{{ route.meta.text }}</span></span>
            <a-menu-item v-for="child in route.children" :key="child.name">
              <router-link :to="child.path">
                {{ child.meta.text }}
              </router-link>
            </a-menu-item>
          </a-sub-menu>
        </template>
      </a-menu>
    </a-layout-sider>
  </div>
</template>

<script>
import { menuRoutes } from './routes'
export default {
  props: ['collapsed'],
  data () {
    return {
      menuRoutes
    }
  }
}
</script>

<style scoped lang="scss">
  .logo{
    height: 64px;
  }
</style>
