<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'MainApp',
  mounted: function () {
    this.$store.dispatch('loadTasks')
    this.$store.dispatch('loadIssues')
    this.$store.dispatch('loadPrograms')
    this.$store.dispatch('loadUsers')
  }
}
</script>

<style lang="scss">
@import '~@/assets/styles.scss';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
