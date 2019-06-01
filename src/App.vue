<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/img/4K-final-top.jpg"> 
    <Sol msg="Welcome to Your Vue.js App"/>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Sol from './views/Sol.vue'
// import Sunrise from './views/Sunrise.vue'
// import Map from './views/Map.vue'
import StationMap from './views/StationMap.vue'

export default {
  name: 'app',
  components: {
    Sol, 
    StationMap,
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
  /* background-image: url(./assets/img/4K-final-top.jpg) */
  /* background-repeat: no-repeat, repeat; */
}
</style>
