<template>
  <a-dropdown>
    <div style="height: 100%;display: inline-flex;align-items: center;cursor: pointer">
      <a-icon type="global" style="font-size: 16px;"></a-icon>
    </div>
    <a-menu slot="overlay" style="min-width: 160px;" v-model="selectedKeys" @click="handleChangeLang">
      <a-menu-item key="zh-CN">🇨🇳 简体中文</a-menu-item>
      <a-menu-item key="en-US">🇺🇸 English</a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
import { getLang } from 'lib/lang'
import bus, { BUS_EVENTS } from 'lib/bus'

export default {
  computed: {
    selectedKeys () {
      return [this.$store.state.lang]
    }
  },
  methods: {
    handleChangeLang ({ key }) {
      if (key === this.$store.state.lang) return
      getLang(key).then(() => {
        bus.$emit(BUS_EVENTS.CHANGE_LANG)
      })
    }
  }
}
</script>
