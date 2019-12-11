<template>
  <div>
    home
    <br>
    <router-link :to="{name: 'child'}">link to child</router-link>
    <br>
    <router-link :to="{name: 'child3'}">link to child3</router-link>(hide in the menu)
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>
