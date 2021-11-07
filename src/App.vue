<template>
  <div id="app">
    <app-navbar/>
    <router-view />
  </div>
</template>

<style lang="scss">
</style>
<script>
import AppNavbar from "@/components/AppNavbar";
export default {
  components: {AppNavbar}
}
</script>