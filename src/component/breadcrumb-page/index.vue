<template>
  <a-layout class="page">
    <a-layout-header class="header">
      <a-breadcrumb>
        <a-breadcrumb-item v-for="route in $route.matched" :key="route.name">
          <router-link v-if="showLink(route)" :to="{ name: route.name }">{{ getRouteText(route) }}</router-link>
          <span v-else>{{ getRouteText(route) }}</span>
        </a-breadcrumb-item>
      </a-breadcrumb>
      <slot name="header"/>
    </a-layout-header>
    <a-layout-content class="content">
      <slot />
    </a-layout-content>
  </a-layout>
</template>

<script>
import { getRouteText } from 'lib/util'
export default {
  created () {
    console.log(this.$route.path, this.$route.matched)
  },
  methods: {
    getRouteText,
    showLink (route) {
      if (route.name === this.$route.name) return false
      return route.name === 'home'
    }
  }
}
</script>
<style lang="less" scoped>
  .page {
    min-height: 100%;
    padding: 0;
    margin: 0;
    .header{
      background-color: @component-background;
      padding: 12px 24px;
      height: auto;
      line-height: unset;
    }
    .content{
      flex: 1;
      box-sizing: border-box;
      padding: 24px;
      margin: 24px;
      background-color: @component-background;
    }
  }
</style>
