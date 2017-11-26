<template>
  <div id="app">
    <img src="./assets/logo.png">
    <widget></widget>
  </div>
</template>

<script>
import Widget from './components/widget'

export default {
  name: 'app',
  components: {
    Widget
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
