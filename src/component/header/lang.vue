<template>
  <a-dropdown>
    <div style="height: 100%;display: flex;align-items: center">
      <a-icon type="global" style="font-size: 16px;"></a-icon>
    </div>
    <a-menu slot="overlay" style="min-width: 160px;" v-model="selectedKeys" @click="handleChangeLang">
      <a-menu-item key="zh-CN">简体中文</a-menu-item>
      <a-menu-item key="en-US">English</a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
import { getLang } from 'lib/lang'

export default {
  computed: {
    selectedKeys () {
      return [this.$store.state.lang]
    }
  },
  methods: {
    handleChangeLang ({ key }) {
      if (key === this.$store.state.lang) return
      getLang(key)
    }
  }
}
</script>
