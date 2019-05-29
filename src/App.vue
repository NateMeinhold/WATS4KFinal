<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png"> 
    <Sol msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Sol from './views/Sol.vue'
//import Sunrise from './views/Sunrise.vue'

export default {
  name: 'app',
  components: {
    Sol, 
  }, 

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
