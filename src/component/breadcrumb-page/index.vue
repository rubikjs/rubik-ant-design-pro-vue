<template>
  <a-layout class="page">
    <a-layout-header class="header">
      <a-breadcrumb>
        <a-breadcrumb-item v-if="!isHomeRoute">
          <router-link :to="{ path: '/' }">{{ this.$t('route.home') }}</router-link>
        </a-breadcrumb-item>
        <a-breadcrumb-item v-for="route in $route.matched" :key="route.name">
          {{ getRouteText(route) }}
        </a-breadcrumb-item>
      </a-breadcrumb>
      <h1>{{ getRouteText($route) }}</h1>
      <div class="extra">
        <slot name="header"/>
      </div>
    </a-layout-header>
    <a-layout-content class="content">
      <slot />
    </a-layout-content>
  </a-layout>
</template>

<script>
import { getRouteText } from 'lib/util'
export default {
  computed: {
    isHomeRoute () {
      return this.$route.name === 'home'
    }
  },
  methods: {
    getRouteText
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
      h1{
        font-size: 20px;
        font-weight: 600;
        margin-top: 12px;
      }
      .extra{
        margin-top: 12px;
      }
    }
    .content{
      flex: 1;
      box-sizing: border-box;
      margin: 24px;
      background-color: @component-background;
    }
  }
</style>
