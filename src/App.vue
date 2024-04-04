<template>
  <div id="app">
    <DeskingContainer />
  </div>
</template>

<script>
import DeskingContainer from './components/Desking/Container.vue';

export default {
  name: 'App',
  components: {
    DeskingContainer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
