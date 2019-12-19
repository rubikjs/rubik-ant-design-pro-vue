<template>
  <div>
    home
    <br>
    <router-link :to="{name: 'child'}">link to child</router-link>
    <br>
    <router-link :to="{name: 'child3'}">link to child3</router-link>(hide in the menu)
    <br>
    <router-link :to="{name: 'unauthorized'}">link to unauthorized page</router-link>
    <br>
    page themes:
    <br>
    <a @click="setTheme('dark')">dark</a>
    <br>
    <a @click="setTheme('light')">light</a>
    <br>
    color themes:
    <br>
    <a v-for="(color, name) in themes" :key="name" @click="loadThemeStyle(name)" style="display:inline-block;margin:0 4px;width: 20px;height: 20px;" :style="{backgroundColor: color}"></a>
  </div>
</template>

<script>
import { loadThemeStyle, resetThemeStyle } from 'lib/util'
import TYPES from 'store/types'
export default {
  data () {
    return {
      themes: {
        default: 'rgb(24, 144, 255)',
        dust: 'rgb(245, 34, 45)',
        volcano: 'rgb(250, 84, 28)',
        sunset: 'rgb(250, 173, 20)',
        cyan: 'rgb(19, 194, 194)',
        green: 'rgb(82, 196, 26)',
        geekblue: 'rgb(47, 84, 235)',
        purple: 'rgb(114, 46, 209)'
      }
    }
  },
  methods: {
    loadThemeStyle (name) {
      if (name === 'default') {
        resetThemeStyle()
        return
      }
      this.$message.loading('loading theme', 0)
      loadThemeStyle(name).finally(() => {
        this.$message.destroy()
      })
    },
    setTheme (theme) {
      this.$store.commit(TYPES.SET_THEME, theme)
    }
  }
}
</script>
